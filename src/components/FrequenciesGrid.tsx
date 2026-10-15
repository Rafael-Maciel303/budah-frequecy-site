import React from "react";
import { SoundWaveIcon } from "./SvgDecorations";
import { Sparkles } from "lucide-react";

interface FrequencyTrack {
  frequency: string;
  title: string;
  subtitle: string;
  description: string;
  colorChip: {
    bg: string;
    text: string;
    border: string;
  };
}

export const TRACKS: FrequencyTrack[] = [
  {
    frequency: "174 Hz",
    title: "174Hz – Relief for pain",
    subtitle: "Physical Comfort & Deep Tension Release",
    description:
      "Traditionally associated with easing everyday physical tension, body stiffness, and soothing the nervous system into natural comfort.",
    colorChip: {
      bg: "bg-[#FDF0EC]",
      text: "text-[#B35338]",
      border: "border-[#F8D2C5]",
    },
  },
  {
    frequency: "258 Hz",
    title: "258Hz – Vitality",
    subtitle: "Cellular Renewal & Awakening Spirit",
    description:
      "Traditionally associated with revitalization, replenishing tired energy reserves, and restoring a vibrant sense of stamina throughout your day.",
    colorChip: {
      bg: "bg-[#FEF7EA]",
      text: "text-[#B88126]",
      border: "border-[#FBE2B2]",
    },
  },
  {
    frequency: "417 Hz",
    title: "417Hz – Transformation and change",
    subtitle: "Clearing Lingering Blocks & New Beginnings",
    description:
      "Associated with breaking stagnant emotional habits, releasing mental friction, and opening your mindset to positive life transformations.",
    colorChip: {
      bg: "bg-[#F3F7F2]",
      text: "text-[#3D6E50]",
      border: "border-[#D1E4D4]",
    },
  },
  {
    frequency: "432 Hz",
    title: "432Hz – Calms the mind",
    subtitle: "Natural Earth Tuning & Serene Stillness",
    description:
      "Associated with natural harmonic resonance, easing racing thoughts, and cultivating effortless presence during busy or anxious hours.",
    colorChip: {
      bg: "bg-[#EEF7F8]",
      text: "text-[#286E78]",
      border: "border-[#C9E7EA]",
    },
  },
  {
    frequency: "432Hz + 528Hz",
    title: "432Hz + 528Hz – Opening paths",
    subtitle: "Dual Harmonic Resonance & Forward Clarity",
    description:
      "A rare blended acoustic journey associated with clarity of vision, creative momentum, and aligning daily decisions with genuine purpose.",
    colorChip: {
      bg: "bg-[#F8F2FC]",
      text: "text-[#6B3FA0]",
      border: "border-[#E4D1F6]",
    },
  },
  {
    frequency: "528 Hz",
    title: "528Hz – Solfeggio Frequency",
    subtitle: "The Ancient Frequency of Transformation & Love",
    description:
      "Celebrated worldwide as the foundational miracle frequency for emotional equilibrium, self-compassion, and deep restorative peace.",
    colorChip: {
      bg: "bg-[#FDF2F4]",
      text: "text-[#A83856]",
      border: "border-[#F8D0DA]",
    },
  },
  {
    frequency: "639 Hz",
    title: "639Hz – Harmonious relationships",
    subtitle: "Empathy, Communication & Heart Connection",
    description:
      "Associated with warming interpersonal relations, encouraging clear and open dialogue, and healing unspoken distance in relationships.",
    colorChip: {
      bg: "bg-[#FFF6ED]",
      text: "text-[#B55B18]",
      border: "border-[#FAD9BC]",
    },
  },
  {
    frequency: "741 Hz",
    title: "741Hz – Detox",
    subtitle: "Energetic Cleansing & Mental Clarity",
    description:
      "Traditionally associated with cleansing psychic clutter, sharpening problem-solving clarity, and resetting after chaotic environments.",
    colorChip: {
      bg: "bg-[#F0F6F5]",
      text: "text-[#2B6D63]",
      border: "border-[#C7E3DE]",
    },
  },
  {
    frequency: "852 Hz",
    title: "852Hz – Intuition",
    subtitle: "Inner Awareness & Awakening Stillness",
    description:
      "Associated with quieting external noise so your internal guidance, instinct, and creative instincts emerge with lucid clarity.",
    colorChip: {
      bg: "bg-[#F3F3FA]",
      text: "text-[#4A4B8F]",
      border: "border-[#D7D8F2]",
    },
  },
  {
    frequency: "888 Hz",
    title: "888Hz – Prosperity and abundance",
    subtitle: "Infinite Potential & Mindset of Gratitude",
    description:
      "Associated with attuning the subconscious mind to abundance, grateful perspective, and receptive confidence in daily ventures.",
    colorChip: {
      bg: "bg-[#FFF9EA]",
      text: "text-[#9E7318]",
      border: "border-[#FCE5A7]",
    },
  },
  {
    frequency: "963 Hz",
    title: "963Hz – Spiritual connection",
    subtitle: "Higher Consciousness & Profound Oneness",
    description:
      "Associated with crown awakening, transcendent meditative depth, and experiencing a gentle, unifying sense of inner wholeness.",
    colorChip: {
      bg: "bg-[#F7F2FB]",
      text: "text-[#5C338A]",
      border: "border-[#E1CEF4]",
    },
  },
  {
    frequency: "Nature",
    title: "Sounds of Nature",
    subtitle: "Organic Pristine Forest & Water Soundscapes",
    description:
      "Master-recorded acoustic environmental layers of rainfall, mountain streams, and birdsong engineered for effortless background relaxation.",
    colorChip: {
      bg: "bg-[#EDF5EE]",
      text: "text-[#2F6639]",
      border: "border-[#C9E5CD]",
    },
  },
];

export function FrequenciesGrid() {
  return (
    <section id="frequencies" className="py-16 sm:py-24 bg-[#FAF4EA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E2ECE5] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 12-Track Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
            The 12 Master Frequencies in Budah Frequency
          </h2>
          <p className="mt-3 text-base text-[#5A524A] leading-relaxed">
            Every audio file is professionally produced in studio-grade 320kbps MP3 format.
            No subscriptions or apps required — simply download to any device and play.
          </p>
        </div>

        {/* 12 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRACKS.map((track, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 border border-[#EBE3D5] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Pastel chip and subtle wave icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full border ${track.colorChip.bg} ${track.colorChip.text} ${track.colorChip.border}`}
                  >
                    {track.frequency}
                  </span>
                  <div className="text-[#8E867B] p-1.5 rounded-lg bg-[#F8F5EE]">
                    <SoundWaveIcon className="w-4 h-4 text-[#5B7B6D]" />
                  </div>
                </div>

                {/* Track Title */}
                <h3 className="font-serif text-lg font-bold text-[#2C2825] leading-snug mb-1">
                  {track.title}
                </h3>
                <p className="text-xs font-medium text-[#7A7267] mb-3">
                  {track.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* Bottom detail */}
              <div className="mt-5 pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#8A8275]">
                <span>Track {String(idx + 1).padStart(2, "0")} of 12</span>
                <span className="font-medium text-[#1F5E4B]">Full Length Master</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/70 border border-[#E8D9C5] text-xs text-[#6B6359] leading-relaxed">
          <strong>Note:</strong> All tracks in Budah Frequency are designed for acoustic relaxation, mindfulness practice, and atmosphere enhancement. They are not intended as a substitute for professional medical guidance.
        </div>
      </div>
    </section>
  );
}
