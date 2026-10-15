import React, { useEffect, useRef, useState } from "react";
import {
  BRAND_NAME,
  BUY_BUTTON_APPEAR_SECONDS,
  CHECKOUT_URL,
  PRICE,
  VSL_EMBED_SRC,
  handleBuyNowClick,
  testMode,
  trackMetaPixel,
} from "../config";
import {
  Volume2,
  VolumeX,
  Maximize2,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  Play,
} from "lucide-react";

// Local storage key for resume capability
const STORAGE_TIME_KEY = "budah_vsl_saved_time";

export function VslPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  // Video playback state
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1800); // initial baseline ~30m until detected
  const [hasUnmutedOnce, setHasUnmutedOnce] = useState(false);

  // Resume prompt state
  const [savedTime, setSavedTime] = useState<number | null>(null);
  const [showResumeBanner, setShowResumeBanner] = useState(false);

  // Milestones for Meta Pixel
  const pixelMilestones = useRef({
    watched25: false,
    watched50: false,
    watched75: false,
  });

  // Delayed buy button visibility
  const [showBuyButton, setShowBuyButton] = useState<boolean>(() => {
    if (testMode) return true;
    if (typeof window !== "undefined" && window.location.search.includes("test=true")) {
      return true;
    }
    return false;
  });

  // Check query params for instant test mode
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("test=true")) {
      setShowBuyButton(true);
    }
  }, []);

  // Check for saved watch time in localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_TIME_KEY);
      if (stored) {
        const parsed = parseFloat(stored);
        if (!isNaN(parsed) && parsed > 15 && parsed < 2700) {
          setSavedTime(parsed);
          setShowResumeBanner(true);
        }
      }
    } catch (e) {
      // LocalStorage might be disabled in private mode
    }
  }, []);

  // Initialize Player.js with fallback timer
  useEffect(() => {
    let isSubscribed = true;
    let fallbackTimer: NodeJS.Timeout | null = null;
    let fallbackInterval: NodeJS.Timeout | null = null;

    // Timer fallback: If Player.js fails to initialize within 8 seconds,
    // trigger a background counter so the buy button will still appear reliably.
    fallbackTimer = setTimeout(() => {
      if (!isPlayerReady && isSubscribed) {
        console.warn("Player.js fallback timer activated.");
        fallbackInterval = setInterval(() => {
          setCurrentTime((prev) => {
            const next = prev + 1;
            if (next >= BUY_BUTTON_APPEAR_SECONDS) {
              setShowBuyButton(true);
            }
            return next;
          });
        }, 1000);
      }
    }, 8000);

    const initPlayer = () => {
      const iframe = iframeRef.current;
      const playerjs = (window as any).playerjs;

      if (!iframe || !playerjs) {
        return false;
      }

      try {
        const player = new playerjs.Player(iframe);
        playerRef.current = player;

        player.on("ready", () => {
          if (!isSubscribed) return;
          setIsPlayerReady(true);
          if (fallbackTimer) clearTimeout(fallbackTimer);
          if (fallbackInterval) clearInterval(fallbackInterval);

          try {
            player.getDuration((dur: number) => {
              if (dur && dur > 0 && isSubscribed) {
                setDuration(dur);
              }
            });
          } catch (err) {
            // ignore duration lookup error
          }
        });

        player.on("play", () => {
          if (isSubscribed) setIsPlaying(true);
        });

        player.on("pause", () => {
          if (isSubscribed) setIsPlaying(false);
        });

        player.on("timeupdate", (data: any) => {
          if (!isSubscribed) return;
          const seconds = typeof data === "number" ? data : data?.seconds || data?.currentTime || 0;
          const totalDur = data?.duration || 0;

          if (totalDur > 0) {
            setDuration(totalDur);
          }

          if (seconds > 0) {
            setCurrentTime(seconds);

            // Save to localStorage every 5 seconds
            try {
              if (Math.floor(seconds) % 5 === 0) {
                localStorage.setItem(STORAGE_TIME_KEY, seconds.toString());
              }
            } catch (err) {
              // ignore storage errors
            }

            // Check Meta Pixel Milestones based on REAL video currentTime and duration
            const currentDur = totalDur > 0 ? totalDur : duration;
            if (currentDur > 0) {
              const ratio = seconds / currentDur;
              if (ratio >= 0.25 && !pixelMilestones.current.watched25) {
                pixelMilestones.current.watched25 = true;
                trackMetaPixel("VideoWatched25", { seconds, ratio: 0.25 }, true);
              }
              if (ratio >= 0.5 && !pixelMilestones.current.watched50) {
                pixelMilestones.current.watched50 = true;
                trackMetaPixel("VideoWatched50", { seconds, ratio: 0.5 }, true);
              }
              if (ratio >= 0.75 && !pixelMilestones.current.watched75) {
                pixelMilestones.current.watched75 = true;
                trackMetaPixel("VideoWatched75", { seconds, ratio: 0.75 }, true);
              }
            }

            // Check Delayed Buy Button threshold (21:55 / 1315s)
            if (seconds >= BUY_BUTTON_APPEAR_SECONDS) {
              setShowBuyButton(true);
            }
          }
        });

        return true;
      } catch (err) {
        console.warn("Could not bind playerjs to iframe:", err);
        return false;
      }
    };

    // Try immediately, or retry when Player.js finishes loading
    if (!initPlayer()) {
      const interval = setInterval(() => {
        if (initPlayer()) {
          clearInterval(interval);
        }
      }, 500);

      const timeout = setTimeout(() => {
        clearInterval(interval);
      }, 7000);

      return () => {
        isSubscribed = false;
        clearInterval(interval);
        clearTimeout(timeout);
        if (fallbackTimer) clearTimeout(fallbackTimer);
        if (fallbackInterval) clearInterval(fallbackInterval);
      };
    }

    return () => {
      isSubscribed = false;
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (fallbackInterval) clearInterval(fallbackInterval);
    };
  }, [duration]);

  // Handle "Tap to listen" overlay action: unmute, restart from 0, play
  const handleUnmuteAndPlay = () => {
    setHasUnmutedOnce(true);
    setIsUnmuted(true);

    if (playerRef.current) {
      try {
        playerRef.current.unmute();
      } catch (e) {}
      try {
        playerRef.current.setCurrentTime(0);
      } catch (e) {}
      try {
        playerRef.current.play();
      } catch (e) {}
    } else if (iframeRef.current) {
      // Direct postMessage fallback
      iframeRef.current.contentWindow?.postMessage({ method: "unmute" }, "*");
      iframeRef.current.contentWindow?.postMessage({ method: "setCurrentTime", value: 0 }, "*");
      iframeRef.current.contentWindow?.postMessage({ method: "play" }, "*");
    }
  };

  // Resume functions
  const handleContinueSaved = () => {
    setShowResumeBanner(false);
    if (savedTime && playerRef.current) {
      try {
        playerRef.current.unmute();
        playerRef.current.setCurrentTime(savedTime);
        playerRef.current.play();
        setHasUnmutedOnce(true);
        setIsUnmuted(true);
      } catch (e) {}
    }
  };

  const handleStartOver = () => {
    setShowResumeBanner(false);
    try {
      localStorage.removeItem(STORAGE_TIME_KEY);
    } catch (e) {}
    handleUnmuteAndPlay();
  };

  // Fullscreen helper
  const handleToggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Compute fake smooth progress bar with easing curve
  // "Advances based on the real time, but with an easing curve so it looks fast at the start and slower at the end."
  const effectiveDuration = duration > 0 ? duration : 1800;
  const rawRatio = Math.min(1, Math.max(0, currentTime / effectiveDuration));
  // Power 0.6 curve: when ratio = 0.1 -> 25%, ratio = 0.5 -> 66%, ratio = 0.9 -> 94%
  const easedPercent = Math.min(98.5, Math.pow(rawRatio, 0.6) * 100);

  // Format mm:ss for display
  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = Math.floor(totalSec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="vsl-section" className="relative py-8 sm:py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Subtle decorative glow */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#5B7B6D]" />
            Special Video Presentation
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1F5E4B] font-semibold leading-tight max-w-2xl mx-auto">
            Discover the Frequency That Harmonizes Your Mind and Body
          </h2>
          <p className="text-sm sm:text-base text-[#5A524A] mt-2 max-w-lg mx-auto">
            Turn up your audio and watch this brief presentation to understand how the 12 frequencies work.
          </p>
        </div>

        {/* Resume Banner Prompt */}
        {showResumeBanner && savedTime && (
          <div className="mb-4 max-w-[420px] mx-auto bg-white border border-[#E8D9C5] rounded-2xl p-3.5 shadow-sm flex items-center justify-between gap-3 text-xs sm:text-sm animate-fade-in">
            <div className="flex items-center gap-2 text-[#2C2825]">
              <RotateCcw className="w-4 h-4 text-[#1F5E4B] shrink-0" />
              <span>
                Resume from <strong>{formatTime(savedTime)}</strong>?
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handleContinueSaved}
                className="bg-[#1F5E4B] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[#174739] transition cursor-pointer"
              >
                Continue
              </button>
              <button
                onClick={handleStartOver}
                className="text-[#7A7267] hover:text-[#2C2825] px-2 py-1 text-xs font-medium cursor-pointer"
              >
                Start Over
              </button>
            </div>
          </div>
        )}

        {/* Video Player Container */}
        {/* Mobile: fills width, max height 80vh. Desktop: max-width ~400px centered */}
        <div className="relative mx-auto max-w-[400px] w-full">
          {/* Sunrise Glow behind player */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#FED7AA] via-[#FEE2E2] to-[#FEF08A] rounded-[32px] blur-xl opacity-70 -z-10 transition-opacity" />

          {/* Player Frame */}
          <div
            ref={containerRef}
            className="relative w-full rounded-[24px] overflow-hidden bg-black shadow-2xl border-4 border-white/90 aspect-[9/16] max-h-[80vh] flex flex-col justify-center"
          >
            {/* The exact Bunny Stream embed iframe */}
            <div className="relative w-full h-full">
              <iframe
                ref={iframeRef}
                src={VSL_EMBED_SRC}
                loading="lazy"
                title={`${BRAND_NAME} Official Presentation`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />

              {/* Tap To Listen Pulsing Overlay (Only visible before user taps) */}
              {!hasUnmutedOnce && (
                <div
                  onClick={handleUnmuteAndPlay}
                  className="absolute inset-0 z-20 bg-black/60 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300"
                >
                  <div className="animate-pulse-gentle bg-[#1F5E4B] text-white p-5 rounded-full shadow-2xl mb-4 border-2 border-white/40 flex items-center justify-center">
                    <Volume2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                    Tap to Listen
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 mt-1 max-w-[220px] font-medium leading-relaxed drop-shadow">
                    Your video is already playing muted. Tap anywhere to activate high-fidelity sound.
                  </span>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#FBF6EE] bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch from beginning</span>
                  </div>
                </div>
              )}

              {/* Transparent Shield Layer after unmuting */}
              {/* Prevents accidental pause / scrubbing, keeping presentation focus intact */}
              {hasUnmutedOnce && (
                <div className="absolute inset-0 z-10 pointer-events-auto">
                  {/* Small Fullscreen Button in top right */}
                  <button
                    onClick={handleToggleFullscreen}
                    aria-label="Toggle Fullscreen"
                    title="Fullscreen"
                    className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-sm cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Audio Status Pill */}
                  <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] text-white/90 font-medium">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Audio Active</span>
                  </div>
                </div>
              )}
            </div>

            {/* Fake Smooth Progress Bar at bottom of video frame */}
            {/* Non-clickable, no skipping, no seeking. Advances with easing curve */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-6 pb-2 px-3">
              <div className="flex items-center justify-between text-[10px] text-white/80 font-medium mb-1.5 px-0.5">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Presentation
                </span>
                <span className="opacity-75">High Definition Audio</span>
              </div>
              <div
                className="w-full h-1.5 bg-white/25 rounded-full overflow-hidden select-none pointer-events-none"
                role="progressbar"
                aria-valuenow={Math.round(easedPercent)}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#5B7B6D] via-[#F6D091] to-[#1F5E4B] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.max(2, easedPercent)}%` }}
                />
              </div>
            </div>
          </div>

          {/* Skipping not allowed note below player */}
          <div className="mt-3 text-center">
            <p className="text-[12px] text-[#7A7267] flex items-center justify-center gap-1.5 font-medium">
              <Lock className="w-3.5 h-3.5 text-[#5B7B6D] shrink-0" />
              <span>Skipping ahead is disabled to ensure you receive the complete guidance.</span>
            </p>
          </div>

          {/* DELAYED BUY BUTTON: Fades in when REAL video time reaches BUY_BUTTON_APPEAR_AT (21:55) */}
          {showBuyButton && (
            <div className="mt-6 text-center animate-fade-in transition-all duration-700">
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E8D9C5] shadow-lg">
                <p className="text-xs font-semibold text-[#1F5E4B] uppercase tracking-wider mb-2">
                  Special Access Open
                </p>
                <button
                  onClick={handleBuyNowClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1F5E4B] hover:bg-[#174739] active:scale-[0.98] text-white py-3.5 px-6 rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group"
                >
                  <span>Get Budah Frequency – {PRICE}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] text-[#7A7267]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#5B7B6D]" />
                  <span>7-Day Full Money-Back Guarantee · Instant Download</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
