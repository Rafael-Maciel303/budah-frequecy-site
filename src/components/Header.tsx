import React from "react";
import { BRAND_NAME, PRICE, handleBuyNowClick } from "../config";
import { MandalaIcon } from "./SvgDecorations";
import { ArrowRight, Volume2 } from "lucide-react";

export function Header() {
  const scrollToVsl = (e: React.MouseEvent) => {
    e.preventDefault();
    const vslEl = document.getElementById("vsl-section");
    if (vslEl) {
      vslEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF6EE]/95 backdrop-blur-md border-b border-[#E8D9C5]/60 transition-all duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#E9F0EB] flex items-center justify-center text-[#1F5E4B] transition-transform group-hover:rotate-45 duration-300">
            <MandalaIcon className="w-5 h-5 text-[#1F5E4B]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-lg sm:text-xl text-[#1F5E4B] tracking-tight leading-none">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#7A7267] font-medium mt-0.5">
              12 Solfeggio Frequencies
            </span>
          </div>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToVsl}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#5B7B6D] hover:text-[#1F5E4B] px-3 py-1.5 rounded-full transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Watch Video
          </button>

          <button
            onClick={handleBuyNowClick}
            className="inline-flex items-center gap-1.5 bg-[#1F5E4B] hover:bg-[#174739] active:scale-[0.98] text-[#FBF6EE] px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm transition-all duration-200 cursor-pointer"
          >
            <span>Buy Now – {PRICE}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
