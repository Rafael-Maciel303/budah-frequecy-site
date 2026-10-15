/**
 * Budah Frequency - Global Configuration
 * All key constants placed at the very top for effortless editing.
 */

export const BRAND_NAME = "Budah Frequency";

// Bunny Stream vertical VSL (iframe)
export const VSL_EMBED_SRC =
  "https://player.mediadelivery.net/embed/778341/698202b7-6d68-43d8-a7a3-694dcdf7f34d?autoplay=true&loop=false&muted=true&preload=true&responsive=true";

// Exact embed code from Bunny, used as the player
export const VSL_EMBED_CODE = `<div style="position:relative;padding-top:177.78%;"><iframe src="https://player.mediadelivery.net/embed/778341/698202b7-6d68-43d8-a7a3-694dcdf7f34d?autoplay=true&loop=false&muted=true&preload=true&responsive=true" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;" allowfullscreen="true"></iframe></div>`;

export const VSL_ASPECT = "9/16";

export const CHECKOUT_URL = "https://pay.hotmart.com/C107987859R";

// mm:ss of REAL video time when delayed button appears
export const BUY_BUTTON_APPEAR_AT = "21:55";

export const PRICE = "$37";

// MUST match the guarantee configured in Hotmart; owner will confirm
export const GUARANTEE_DAYS = 7;

// Official support email
export const CONTACT_EMAIL = "budahfrequency.support@gmail.com";

// When true, the delayed buy button shows immediately
export const testMode = false;

// Parse "mm:ss" to total seconds
export function parseTimeToSeconds(timeStr: string): number {
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 1315; // fallback: 21:55 in seconds
}

export const BUY_BUTTON_APPEAR_SECONDS = parseTimeToSeconds(BUY_BUTTON_APPEAR_AT);

/**
 * Meta Pixel helper with try/catch to protect execution even if blocked
 */
export function trackMetaPixel(eventName: string, data?: Record<string, unknown>, isCustom = false) {
  try {
    if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      const fbq = (window as unknown as { fbq: (...args: unknown[]) => void }).fbq;
      if (isCustom) {
        fbq("trackCustom", eventName, data);
      } else {
        fbq("track", eventName, data);
      }
    }
  } catch (err) {
    // Non-blocking fallback
    console.warn(`Meta Pixel event "${eventName}" could not be sent:`, err);
  }
}

/**
 * Trigger checkout navigation with InitiateCheckout event
 */
export function handleBuyNowClick(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }
  trackMetaPixel("InitiateCheckout", {
    content_name: BRAND_NAME,
    currency: "USD",
    value: 37.0,
  });
  window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
}
