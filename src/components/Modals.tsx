import React, { useEffect } from "react";
import { BRAND_NAME, CONTACT_EMAIL, GUARANTEE_DAYS } from "../config";
import { X, ShieldCheck, Mail, FileText, CheckCircle2 } from "lucide-react";

export type ModalType = "privacy" | "terms" | "refund" | "contact" | null;

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export function LegalModals({ activeModal, onClose }: ModalsProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (activeModal) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl border border-[#E8D9C5] max-h-[85vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#F0E6D8] flex items-center justify-between bg-[#FBF6EE]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E9F0EB] flex items-center justify-center text-[#1F5E4B]">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1F5E4B]">
              {activeModal === "privacy" && "Privacy Policy"}
              {activeModal === "terms" && "Terms of Use"}
              {activeModal === "refund" && "Refund Policy"}
              {activeModal === "contact" && "Contact Customer Support"}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#7A7267] hover:text-[#2C2825] hover:bg-black/5 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm sm:text-base text-[#4A433B] leading-relaxed">
          {/* TEMPLATE – review before launch */}
          {activeModal === "privacy" && (
            <div className="space-y-4">
              {/* TEMPLATE – review before launch */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A7267]">
                Last Updated: October 2026 · /* TEMPLATE – review before launch */
              </p>
              <p>
                At <strong>{BRAND_NAME}</strong>, we respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy outlines how your information is gathered, utilized, and safeguarded when interacting with our website.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                1. Information We Collect
              </h4>
              <p>
                When purchasing {BRAND_NAME}, transactions are securely handled through Hotmart, our third-party checkout processor. We do not store your full financial payment data or credit card numbers on our servers. We receive customer fulfillment information (such as your name and email address) to deliver your digital MP3 audio access.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                2. Meta Pixel, Cookies & Analytics
              </h4>
              <p>
                This website uses the standard Meta Pixel (provided by Meta Platforms, Inc.) and browser cookies to measure advertising effectiveness, analyze anonymous page interaction (such as video watch milestones), and deliver relevant promotional messages. These cookies do not extract sensitive personal details. You can disable cookies at any time via your browser settings.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                3. How We Use Your Data
              </h4>
              <p>
                Your contact details are used strictly for order confirmation, delivery of the 12 {BRAND_NAME} MP3 files, customer support inquiries, and important product updates. We do not sell, rent, or trade your personal information to third parties.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                4. Contacting Us
              </h4>
              <p>
                If you have questions regarding this Privacy Policy or wish to request data deletion, please contact our support team at:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1F5E4B] font-semibold underline">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </div>
          )}

          {/* TEMPLATE – review before launch */}
          {activeModal === "terms" && (
            <div className="space-y-4">
              {/* TEMPLATE – review before launch */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A7267]">
                Effective Date: October 2026 · /* TEMPLATE – review before launch */
              </p>
              <p>
                Please read these Terms of Use carefully before accessing or using the <strong>{BRAND_NAME}</strong> collection. By purchasing or using this website, you agree to be bound by these terms.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                1. Digital Product & Personal License
              </h4>
              <p>
                {BRAND_NAME} is a collection of 12 downloadable audio files (high-quality MP3 format). Upon successful purchase, you are granted a non-exclusive, non-transferable, revocable license for personal, non-commercial listening. You may not resell, redistribute, broadcast, remix, or sublicense the audio files or accompanying materials.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                2. Strict No Medical Claims Disclaimer
              </h4>
              <div className="p-4 rounded-xl bg-[#FAF0E6] border border-[#E8D4BE] text-sm text-[#5B3923] font-medium leading-relaxed">
                {BRAND_NAME} is created solely for personal relaxation, meditative ambient listening, and mindfulness exploration. <strong>This product does not replace medical or therapeutic care. Results may vary. It is not intended to diagnose, treat, cure, or prevent any medical condition or disease.</strong> Always seek the counsel of a licensed healthcare provider regarding physical or mental health questions. Never listen while driving, operating heavy machinery, or engaging in tasks requiring full physical vigilance.
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                3. Purchase & Delivery
              </h4>
              <p>
                Orders are processed through Hotmart. Upon payment confirmation, you receive immediate digital access to download and stream all 12 tracks.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                4. Limitation of Liability
              </h4>
              <p>
                To the fullest extent permitted by law, {BRAND_NAME} and its creators shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this product.
              </p>
            </div>
          )}

          {/* TEMPLATE – review before launch */}
          {activeModal === "refund" && (
            <div className="space-y-4">
              {/* TEMPLATE – review before launch */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A7267]">
                Peace-of-Mind Guarantee · /* TEMPLATE – review before launch */
              </p>
              <div className="p-4 rounded-xl bg-[#E9F0EB] border border-[#C5D9CB] flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#1F5E4B] shrink-0" />
                <div>
                  <h5 className="font-serif font-bold text-base text-[#1F5E4B]">
                    {GUARANTEE_DAYS}-Day 100% Money-Back Guarantee
                  </h5>
                  <p className="text-xs text-[#3E5C4B] mt-0.5">
                    We want you to explore the 12 frequencies with complete confidence and peace of mind.
                  </p>
                </div>
              </div>
              <p>
                If for any reason you feel {BRAND_NAME} is not the right fit for your daily relaxation routine, you can request a full refund within <strong>{GUARANTEE_DAYS} days</strong> from your original date of purchase.
              </p>
              <h4 className="font-serif text-lg font-bold text-[#1F5E4B] pt-2">
                How to Request Your Refund:
              </h4>
              <ol className="list-decimal list-inside space-y-2.5 pl-1">
                <li>
                  <strong>Directly via Hotmart:</strong> Log into your Hotmart account or visit the Hotmart buyer support portal, navigate to your purchases, and select "Request Refund" within the {GUARANTEE_DAYS}-day window.
                </li>
                <li>
                  <strong>Via Our Support Team:</strong> Send a quick email to{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1F5E4B] font-semibold underline">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  with your purchase email address and transaction code.
                </li>
              </ol>
              <p className="pt-2 text-sm text-[#5A524A]">
                Once requested through the platform, your refund will be processed promptly back to your original payment method. No awkward questions asked.
              </p>
            </div>
          )}

          {/* TEMPLATE – review before launch */}
          {activeModal === "contact" && (
            <div className="space-y-4">
              {/* TEMPLATE – review before launch */}
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7A7267]">
                Customer Care & Inquiries · /* TEMPLATE – review before launch */
              </p>
              <p>
                Have a question about your order, file downloads, or need help listening on your mobile device? We are here to assist you.
              </p>
              <div className="p-6 rounded-2xl bg-[#FBF6EE] border border-[#E8D9C5] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E9F0EB] text-[#1F5E4B] mx-auto flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1F5E4B]">
                  Official Support Email
                </h4>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-block text-lg sm:text-xl font-semibold text-[#1F5E4B] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-xs text-[#7A7267]">
                  Typical response time: within 24 to 48 business hours.
                </p>
              </div>

              <div className="space-y-2 text-sm text-[#5A524A] pt-2">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Assistance with audio download links and file extraction</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Playback tips on iPhone, iPad, Android, and desktop</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5E4B]" />
                  <span>Hotmart receipt and order lookup</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#F0E6D8] bg-[#FBF6EE] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1F5E4B] hover:bg-[#174739] text-white text-sm font-medium px-5 py-2 rounded-full transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
