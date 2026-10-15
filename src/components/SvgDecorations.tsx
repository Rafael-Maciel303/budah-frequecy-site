import React from "react";

export function MandalaIcon({ className = "w-6 h-6 text-[#1F5E4B]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="50" cy="50" r="44" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="32" />
      <circle cx="50" cy="50" r="18" />
      <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.2" />
      {/* 8 petals */}
      <path d="M50 18 C40 32 40 40 50 50 C60 40 60 32 50 18 Z" opacity="0.75" />
      <path d="M50 82 C40 68 40 60 50 50 C60 60 60 68 50 82 Z" opacity="0.75" />
      <path d="M18 50 C32 40 40 40 50 50 C40 60 32 60 18 50 Z" opacity="0.75" />
      <path d="M82 50 C68 40 60 40 50 50 C60 60 68 60 82 50 Z" opacity="0.75" />
      <path d="M27.4 27.4 C41.5 35.6 44 44 50 50 C44 44 35.6 41.5 27.4 27.4 Z" opacity="0.5" />
      <path d="M72.6 72.6 C58.5 64.4 56 56 50 50 C56 56 64.4 58.5 72.6 72.6 Z" opacity="0.5" />
      <path d="M72.6 27.4 C64.4 41.5 56 44 50 50 C56 44 58.5 35.6 72.6 27.4 Z" opacity="0.5" />
      <path d="M27.4 72.6 C35.6 58.5 44 56 50 50 C44 56 41.5 64.4 27.4 72.6 Z" opacity="0.5" />
    </svg>
  );
}

export function WaveGraphic({ className = "w-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
      <path
        d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function WaveGraphicReverse({ className = "w-full" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
      <path
        d="M0 40C240 10 480 70 720 40C960 10 1200 70 1440 40V0H0V40Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function SoundWaveIcon({ className = "w-5 h-5 text-[#1F5E4B]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 4v16" />
      <path d="M14 7v10" />
      <path d="M18 10v4" />
      <path d="M22 12h-1" />
    </svg>
  );
}
