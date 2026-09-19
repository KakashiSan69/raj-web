import React from "react";
import { MapPin, Phone, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

const WHATSAPP_PHONE = "916388910079";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "🏥 Hello Marketing Safalta Team, I would like to book a 1-on-1 healthcare growth consultation for my practice."
)}`;

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-7xl mx-auto">
      
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#263238] to-[#1E272C] text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#00897B]/20 blur-2xl" />

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#E0F2F1]/10 text-[#26A69A] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> 1-on-1 Doctor Strategy Session
          </span>

          <h3 className="text-2xl font-extrabold text-white tracking-tight mb-3">
            Start Filling Your Appointment Calendar
          </h3>

          <p className="text-sm text-[#B0BEC5] leading-relaxed mb-8">
            Tell us about your healthcare practice. We will analyze your local patient demand, competitor density, and build a custom 30-day patient acquisition blueprint.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3 text-[#E0F2F1]">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#26A69A] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-white text-xs">Pan-India Support</strong>
                <span className="text-xs text-[#B0BEC5]">Serving 200+ doctors & hospitals across India</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#E0F2F1]">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#26A69A] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-white text-xs">Dedicated Healthcare Strategist</strong>
                <span className="text-xs text-[#B0BEC5]">Prompt response within 2 hours</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#E0F2F1]">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#26A69A] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-white text-xs">Healthcare Growth Guarantee</strong>
                <span className="text-xs text-[#B0BEC5]">High-intent patient appointments • Verified results</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-[#90A4AE] mb-3">Prefer immediate chat over filling the form?</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      
      <div className="lg:col-span-7">
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141E23] border border-[#E0F2F1] dark:border-[#1E2D33] shadow-[0_10px_35px_rgba(38,50,56,0.05)] overflow-hidden">
          <iframe
            src="https://app.automatefunnels.in/form/healthcare-digital-marketing-mtekry97"
            name="lovable-form-healthcare-digital-marketing-mtekry97"
            title="Healthcare Digital Marketing Form"
            style={{ border: "none", width: "100%", minHeight: "600px", display: "block" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
