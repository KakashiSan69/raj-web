import React, { useState, useEffect } from "react";
import { MapPin, Phone, ShieldCheck, Sparkles, MessageCircle, Calendar, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const WHATSAPP_PHONE = "916388910079";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "🏥 Hello Marketing Safalta Team, I would like to book a 1-on-1 healthcare growth consultation for my practice."
)}`;

const FORM_URL = "https://app.automatefunnels.in/form/healthcare-digital-marketing-mtekry97";
const CALENDAR_URL = "https://app.automatefunnels.in/v3/healthcare-marketing-strategy/consultation";

export default function ContactForm() {
  const [activeStep, setActiveStep] = useState<"form" | "calendar">("form");

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const raw = typeof e.data === "string" ? e.data.toLowerCase() : "";
        const obj = typeof e.data === "object" && e.data !== null ? (e.data as Record<string, any>) : null;
        if (
          raw.includes("submit") ||
          raw.includes("form-complete") ||
          raw.includes("leadconnector") ||
          obj?.type === "form-submit" ||
          obj?.action === "form-submit" ||
          obj?.event === "form-submit" ||
          obj?.status === "submitted"
        ) {
          setActiveStep("calendar");
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
          <div className="flex items-center justify-between border-b border-[#E0F2F1] dark:border-[#1E2D33] bg-[#F8FCFB] dark:bg-[#0E161A] p-3 sm:px-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveStep("form")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeStep === "form"
                    ? "bg-[#00897B] text-white shadow-sm"
                    : "text-[#546E7A] dark:text-[#90A4AE] hover:text-[#00897B]"
                }`}
              >
                <span>Step 1: Practice Form</span>
                {activeStep === "calendar" && <CheckCircle2 className="w-3.5 h-3.5 text-[#00897B]" />}
              </button>
              <span className="text-[#B0BEC5] text-xs">→</span>
              <button
                type="button"
                onClick={() => setActiveStep("calendar")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeStep === "calendar"
                    ? "bg-[#00897B] text-white shadow-sm"
                    : "text-[#546E7A] dark:text-[#90A4AE] hover:text-[#00897B]"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Step 2: Calendar Slot</span>
              </button>
            </div>

            {activeStep === "form" ? (
              <button
                type="button"
                onClick={() => setActiveStep("calendar")}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#00897B] hover:underline cursor-pointer"
              >
                <span>Go to Calendar</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setActiveStep("form")}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#546E7A] dark:text-[#90A4AE] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Edit Form Details</span>
              </button>
            )}
          </div>

          {activeStep === "form" ? (
            <div className="p-1">
              <iframe
                src={FORM_URL}
                name="lovable-form-healthcare-digital-marketing-mtekry97"
                title="Healthcare Digital Marketing Form"
                style={{ border: "none", width: "100%", minHeight: "650px", display: "block" }}
                loading="lazy"
              />
              <div className="p-3.5 bg-[#F8FCFB] dark:bg-[#0E161A] border-t border-[#E0F2F1] dark:border-[#1E2D33] text-center">
                <button
                  type="button"
                  onClick={() => setActiveStep("calendar")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00897B] hover:bg-[#00796B] text-white text-xs font-bold shadow-md shadow-[#00897B]/20 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Form Fill Ho Gaya? Pick Calendar Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-1">
              <iframe
                src={CALENDAR_URL}
                width="100%"
                height="800px"
                title="Healthcare Marketing Strategy Consultation Calendar"
                style={{ border: "none", borderRadius: "12px", width: "100%", height: "800px", display: "block" }}
                loading="lazy"
              />
              <div className="p-3 bg-[#F8FCFB] dark:bg-[#0E161A] border-t border-[#E0F2F1] dark:border-[#1E2D33] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveStep("form")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#546E7A] dark:text-[#90A4AE] hover:text-[#00897B] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Form Details</span>
                </button>
                <span className="text-[11px] text-[#78909C]">Choose your preferred consultation time above</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
