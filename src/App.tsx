/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  BRAND_NAME,
  PRICE,
  GUARANTEE_DAYS,
  CONTACT_EMAIL,
  handleBuyNowClick,
} from "./config";
import { Header } from "./components/Header";
import { VslPlayer } from "./components/VslPlayer";
import { FrequenciesGrid } from "./components/FrequenciesGrid";
import { LegalModals, ModalType } from "./components/Modals";
import { MandalaIcon, SoundWaveIcon, WaveGraphic, WaveGraphicReverse } from "./components/SvgDecorations";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Headphones,
  Smartphone,
  Download,
  Moon,
  Compass,
  Heart,
  Sun,
  Sparkles,
  ChevronDown,
  Volume2,
  FileCheck,
  HelpCircle,
} from "lucide-react";

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToVsl = (e: React.MouseEvent) => {
    e.preventDefault();
    const vslEl = document.getElementById("vsl-section");
    if (vslEl) {
      vslEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#2C2825] flex flex-col font-sans selection:bg-[#E8D9C5] selection:text-[#1F5E4B]">
      {/* Sticky Top Header */}
      <Header />

      <main className="flex-grow">
        {/* =========================================================
            SECTION 1: HERO
        ========================================================= */}
        <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-20 overflow-hidden bg-cream-sand">
          {/* Subtle decorative background glow circles */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#FED7AA]/30 via-[#FEE2E2]/20 to-transparent blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {/* Soft decorative badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1F5E4B] bg-[#E9F0EB] border border-[#D3E2D7] px-4 py-1.5 rounded-full mb-6 shadow-xs">
              <MandalaIcon className="w-4 h-4 text-[#1F5E4B]" />
              <span>Awaken Inner Harmony & Peace</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#1F5E4B] tracking-tight leading-[1.15] sm:leading-[1.12]">
              Reclaim Your Natural Calm and Mental Serenity with {BRAND_NAME}
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-xl text-[#5A524A] max-w-2xl mx-auto leading-relaxed font-normal">
              A master collection of 12 Solfeggio and healing frequency MP3 tracks created to ease everyday tension, quiet racing thoughts, and support deep relaxation.
            </p>

            {/* Two Action Buttons: Watch the Video & Buy Now */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
              <button
                onClick={scrollToVsl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#5B7B6D] text-[#1F5E4B] hover:bg-[#E9F0EB] active:scale-[0.98] py-3.5 px-6 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#5B7B6D]" />
                <span>Watch the Video</span>
              </button>

              <button
                onClick={handleBuyNowClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1F5E4B] hover:bg-[#174739] text-[#FBF6EE] active:scale-[0.98] py-3.5 px-7 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group"
              >
                <span>Buy Now – {PRICE}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Assurance line below hero CTA */}
            <div className="mt-5 flex items-center justify-center gap-4 text-xs text-[#7A7267]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5B7B6D]" />
                Instant Digital Access
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5B7B6D]" />
                {GUARANTEE_DAYS}-Day Money-Back Guarantee
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: VSL PLAYER (Vertical video + delayed buy button)
        ========================================================= */}
        <VslPlayer />

        {/* Wave divider */}
        <div className="w-full overflow-hidden leading-none text-white -mb-1">
          <WaveGraphic className="w-full h-8 sm:h-14 text-white" />
        </div>

        {/* =========================================================
            SECTION 3: WHAT IS BUDAH FREQUENCY
        ========================================================= */}
        <section id="about" className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                The Science & Art of Sound
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
                What is {BRAND_NAME}?
              </h2>
            </div>

            <div className="bg-[#FAF5ED] rounded-[24px] p-6 sm:p-10 border border-[#EBE1D2] space-y-5 text-base sm:text-lg text-[#4A433B] leading-relaxed">
              <p>
                <strong>{BRAND_NAME}</strong> is a thoughtfully mastered audio library consisting of 12 distinct Solfeggio and harmonic sound-frequency MP3 recordings. For centuries, across ancient acoustic traditions and modern acoustic research, specific Hertz frequencies have been observed to exert a naturally calming, centering influence over human awareness.
              </p>
              <p>
                Modern life constantly immerses us in artificial noises, hurried schedules, and electronic stimulation that leave the nervous system in prolonged tension. When you immerse yourself in pure, harmonic frequencies, your brainwaves naturally settle into tranquil rhythms.
              </p>
              <p>
                There are no complex apps to configure, no monthly membership fees, and no specialized equipment needed. Simply download your files directly to your phone, tablet, or computer, plug in your preferred earphones or let your room fill with serene ambient tone, and allow yourself to unwind.
              </p>

              {/* Gentle disclaimer box */}
              <div className="mt-6 pt-5 border-t border-[#E5DAC8] flex items-start gap-3 text-xs sm:text-sm text-[#6A6258] italic">
                <ShieldCheck className="w-5 h-5 text-[#5B7B6D] shrink-0 mt-0.5" />
                <span>
                  {BRAND_NAME} is formulated strictly for holistic relaxation, meditation, and daily lifestyle mindfulness. It does not replace medical treatment and makes no curative claims.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Wave divider reverse */}
        <div className="w-full overflow-hidden leading-none text-white -mt-1">
          <WaveGraphicReverse className="w-full h-8 sm:h-14 text-white" />
        </div>

        {/* =========================================================
            SECTION 4: BENEFITS (4-6 cards, soft wording)
        ========================================================= */}
        <section id="benefits" className="py-16 sm:py-24 bg-[#FBF6EE]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3">
                <Heart className="w-3.5 h-3.5 text-[#5B7B6D]" />
                Daily Well-Being
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
                Gentle Support for Your Mind, Body, and Spirit
              </h2>
              <p className="mt-3 text-base text-[#5A524A]">
                Incorporate these harmonic soundscapes into your daily routine and notice the subtle shifts toward tranquil balance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center mb-5">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Deep Mental Tranquility
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Gently quiet the endless internal monologue and sensory overload of busy days, inviting effortless stillness into your thoughts.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF0EC] text-[#B35338] flex items-center justify-center mb-5">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Restful Evening Unwinding
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Establish a comforting nighttime ritual. Soft acoustic frequencies support easing your nervous system down before bedtime.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF7F8] text-[#286E78] flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Calm Focus & Creative Flow
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Play subtle frequencies in the background while working, studying, or reading to maintain relaxed yet sharp concentration.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF7EA] text-[#B88126] flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Effortless Meditation
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  You don’t have to struggle to "empty your mind". Sound frequencies serve as a gentle anchor that naturally stabilizes meditative awareness.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#F8F2FC] text-[#6B3FA0] flex items-center justify-center mb-5">
                  <SoundWaveIcon className="w-6 h-6 text-[#6B3FA0]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Harmonious Home Atmosphere
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Fill your living spaces, bedroom, or office with grounding soundscapes that dissolve chaotic vibrations and encourage peace.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-[24px] p-7 border border-[#EAE1D3] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F6F5] text-[#2B6D63] flex items-center justify-center mb-5">
                  <MandalaIcon className="w-6 h-6 text-[#2B6D63]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C2825] mb-2">
                  Renewed Sense of Vitality
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Clear lingering mental fatigue and welcome an uplifting, grateful perspective toward your personal goals and relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: HOW IT WORKS (3 steps)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Simplicity by Design
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
                How {BRAND_NAME} Works
              </h2>
              <p className="mt-3 text-base text-[#5A524A]">
                Enjoying the restorative power of Solfeggio sound requires just three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#FAF5ED] border border-[#EBE1D2]">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] text-white font-serif font-bold text-xl flex items-center justify-center mb-4 shadow-sm">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C2825] mb-2">
                  Instant Digital Access
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Right after completing checkout, you receive immediate email access with direct download links for all 12 master MP3 tracks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#FAF5ED] border border-[#EBE1D2]">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] text-white font-serif font-bold text-xl flex items-center justify-center mb-4 shadow-sm">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C2825] mb-2">
                  Choose Your Daily Frequency
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Consult the included frequency guide to choose the track that matches your intention: relaxation, deep focus, vitality, or restful sleep.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-[24px] bg-[#FAF5ED] border border-[#EBE1D2]">
                <div className="w-14 h-14 rounded-full bg-[#1F5E4B] text-white font-serif font-bold text-xl flex items-center justify-center mb-4 shadow-sm">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C2825] mb-2">
                  Listen Anywhere, Anytime
                </h3>
                <p className="text-sm text-[#5A524A] leading-relaxed">
                  Put on your regular headphones or play through your room speaker. Breathe deeply for 15 to 30 minutes and enjoy the tranquility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 6: AVAILABLE FREQUENCIES GRID (12 tracks)
        ========================================================= */}
        <FrequenciesGrid />

        {/* =========================================================
            SECTION 7: WHAT'S INCLUDED (NO testimonials, NO fake reviews)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3">
                <FileCheck className="w-3.5 h-3.5" />
                Transparent Value
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
                What’s Included in Your Purchase
              </h2>
              <p className="mt-3 text-base text-[#5A524A]">
                Everything you receive today in the complete {BRAND_NAME} digital collection.
              </p>
            </div>

            <div className="bg-[#FAF5ED] border border-[#EAE0D1] rounded-[24px] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <SoundWaveIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2C2825]">
                      12 Master-Quality MP3 Tracks
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A6258] mt-1">
                      Professionally mixed in high-definition 320kbps format for pristine harmonic resonance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2C2825]">
                      Instant Digital Download
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A6258] mt-1">
                      Immediate access delivered right to your email inbox immediately after purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2C2825]">
                      Universal Device Compatibility
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A6258] mt-1">
                      Works effortlessly on iPhone, iPad, Android, Mac, Windows, and home stereo systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center shrink-0 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#2C2825]">
                      100% Offline Listening
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6A6258] mt-1">
                      Download once and listen in airplane mode, outdoors, or anywhere without using cellular data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Included summary banner */}
              <div className="pt-6 border-t border-[#E5DAC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5B544B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Lifetime ownership · No recurring subscription charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Comprehensive PDF Track & Listening Guide included</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 8: OFFER CARD
        ========================================================= */}
        <section id="offer" className="py-16 sm:py-24 bg-[#FBF6EE]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="relative bg-white rounded-[32px] p-8 sm:p-12 border-2 border-[#E8D9C5] shadow-xl text-center">
              {/* Decorative accent */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1F5E4B] text-white text-xs font-semibold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-sm">
                Complete Digital Collection
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-bold mt-2">
                Get {BRAND_NAME} Today
              </h2>
              <p className="text-sm sm:text-base text-[#5A524A] mt-2 max-w-lg mx-auto">
                Begin your journey to daily calm with all 12 Solfeggio audio frequencies ready for immediate download.
              </p>

              {/* Price block */}
              <div className="my-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#1F5E4B]">
                    {PRICE}
                  </span>
                  <span className="text-sm sm:text-base text-[#7A7267] font-medium">
                    one-time payment
                  </span>
                </div>
                <p className="text-xs text-[#7A7267] mt-1">
                  No subscriptions · Lifetime access to all 12 audio files
                </p>
              </div>

              {/* Feature bullet checklist */}
              <div className="max-w-md mx-auto space-y-2.5 text-left text-sm text-[#4A433B] mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>All 12 Solfeggio & Healing Frequency MP3 Tracks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>Immediate Digital Delivery via Email</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>Works on Any Smartphone, Tablet, or Computer</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>Offline Playback Supported Anywhere</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B] shrink-0" />
                  <span>{GUARANTEE_DAYS}-Day 100% Money-Back Guarantee</span>
                </div>
              </div>

              {/* Primary Buy Button */}
              <button
                onClick={handleBuyNowClick}
                className="w-full max-w-md inline-flex items-center justify-center gap-2 bg-[#1F5E4B] hover:bg-[#174739] active:scale-[0.98] text-[#FBF6EE] py-4 px-8 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group"
              >
                <span>Get Budah Frequency – {PRICE}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Visible Guarantee Badge inside Offer Card */}
              <div className="mt-8 pt-6 border-t border-[#F0E6D8] max-w-md mx-auto">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{GUARANTEE_DAYS}-Day Money-Back Guarantee</span>
                </div>
                <p className="text-xs text-[#6A6258] leading-relaxed">
                  If you are not completely satisfied with {BRAND_NAME}, you can request a full refund within {GUARANTEE_DAYS} days through the Hotmart purchase platform. No hassle, no risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 9: GUARANTEE SECTION
        ========================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-[#FAF5ED] rounded-[24px] p-6 sm:p-10 border border-[#E9DFD0] flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#1F5E4B]">
                  Our {GUARANTEE_DAYS}-Day Peace-of-Mind Guarantee
                </h3>
                <p className="text-sm sm:text-base text-[#5A524A] leading-relaxed">
                  We believe you will love the tranquility and calm {BRAND_NAME} brings into your home. Take a full 7 days to listen to all 12 frequencies. If for any reason it does not meet your expectations, simply request a refund through Hotmart or contact our support team at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1F5E4B] font-semibold underline">
                    {CONTACT_EMAIL}
                  </a>.
                  You will receive a prompt 100% refund of your purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 10: FAQ (5-6 questions)
        ========================================================= */}
        <section id="faq" className="py-16 sm:py-24 bg-[#FBF6EE]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F5E4B] bg-[#E9F0EB] px-3.5 py-1.5 rounded-full mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                Frequently Asked Questions
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1F5E4B] font-semibold tracking-tight">
                Common Questions About {BRAND_NAME}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How do I get my files after purchasing?",
                  a: "Immediately upon completing your order through Hotmart, you will receive an email containing your secure download and streaming access link. You can download all 12 MP3 files straight to your phone, tablet, or computer right away.",
                },
                {
                  q: "What is the refund policy?",
                  a: `We provide a full ${GUARANTEE_DAYS}-day money-back guarantee. If you are not completely satisfied with your listening experience, you can easily request a full refund within ${GUARANTEE_DAYS} days directly through Hotmart or by contacting our support email at ${CONTACT_EMAIL}.`,
                },
                {
                  q: "Can I listen on my phone or tablet?",
                  a: "Yes, 100%. The audio tracks are provided in standard, universally compatible MP3 format. They play seamlessly inside Apple Music, Spotify local files, Google Files, VLC, or any default media player on iOS and Android.",
                },
                {
                  q: "Do I need special headphones or high-end equipment?",
                  a: "No special audio hardware is required. While standard over-ear or in-ear headphones provide an immersive personal listening experience, you can also play the frequencies freely through room speakers or bluetooth soundbars.",
                },
                {
                  q: "How long should I listen each day?",
                  a: "Most listeners find 15 to 30 minutes per day to be an ideal duration. You can listen while meditating, working, relaxing before bed, or playing softly in the background during family dinners.",
                },
                {
                  q: "Does Budah Frequency make any medical or health claims?",
                  a: "No. Budah Frequency makes no medical claims, promises of cures, or therapeutic diagnoses. These tracks are designed purely for acoustic relaxation, mindfulness enjoyment, and peaceful ambiance.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] border border-[#E8D9C5] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2C2825] hover:text-[#1F5E4B] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5B7B6D] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#5A524A] leading-relaxed border-t border-[#F5EFE6] pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 11: FINAL CTA (Deep forest-green band)
        ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#133A2E] text-[#FBF6EE] relative overflow-hidden">
          {/* Subtle line art mandala decoration in background */}
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <MandalaIcon className="w-96 h-96 text-white" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-200 bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Begin Your Practice Today
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Bring Calm, Harmony, and Balance into Your Daily Life
            </h2>

            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
              Join thousands who use {BRAND_NAME} as their daily anchor for meditation, rest, and peaceful focus.
            </p>

            <div className="mt-8">
              <button
                onClick={handleBuyNowClick}
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#133A2E] hover:bg-[#FBF6EE] active:scale-[0.98] py-4 px-8 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer group"
              >
                <span>Get Instant Access – {PRICE}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-4 text-xs text-emerald-200/80 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Full {GUARANTEE_DAYS}-Day Money-Back Guarantee · Instant Download</span>
            </p>
          </div>
        </section>
      </main>

      {/* =========================================================
          SECTION 12: FOOTER
      ========================================================= */}
      <footer className="bg-[#FAF5ED] border-t border-[#E8D9C5] py-12 text-[#6A6258] text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Top footer row: brand & links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#E9DFD0]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#E9F0EB] text-[#1F5E4B] flex items-center justify-center">
                <MandalaIcon className="w-4 h-4" />
              </div>
              <span className="font-serif font-bold text-lg text-[#1F5E4B]">
                {BRAND_NAME}
              </span>
            </div>

            {/* In-page modal links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                onClick={() => setActiveModal("privacy")}
                className="hover:text-[#1F5E4B] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal("terms")}
                className="hover:text-[#1F5E4B] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Terms of Use
              </button>
              <button
                onClick={() => setActiveModal("refund")}
                className="hover:text-[#1F5E4B] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Refund Policy
              </button>
              <button
                onClick={() => setActiveModal("contact")}
                className="hover:text-[#1F5E4B] transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Support Email Contact */}
          <div className="text-center text-xs text-[#7A7267]">
            <span>Customer Support: </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#1F5E4B] font-semibold hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Required Legal Disclaimers */}
          <div className="space-y-3 text-[11px] text-[#8A8275] max-w-3xl mx-auto text-center leading-relaxed">
            <p>
              <strong>Disclaimer:</strong> This product does not replace medical or therapeutic care. Results may vary. Not intended to diagnose, treat, cure or prevent any disease. Always consult a qualified medical professional for health-related concerns.
            </p>
            <p>
              <strong>Meta Disclaimer:</strong> This site is not part of Facebook or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta Platforms, Inc. in any way. FACEBOOK is a trademark of META PLATFORMS, INC.
            </p>
            <p className="pt-2 text-[11px] text-[#A39B8F]">
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Accessible In-Page Legal Modals */}
      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
