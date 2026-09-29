import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Check,
  CalendarCheck,
  Video,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Home,
} from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    // Confetti celebration burst on load
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#00897B", "#26A69A", "#80CBC4", "#F59E0B", "#FFFFFF"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#00897B", "#26A69A", "#80CBC4", "#F59E0B", "#FFFFFF"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Initial center burst
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00897B", "#26A69A", "#80CBC4", "#F59E0B", "#FFFFFF"],
    });
  }, []);

  const triggerConfettiAgain = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#00897B", "#26A69A", "#80CBC4", "#F59E0B", "#FFFFFF"],
    });
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-[#090E11] text-[#E2E8F0] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Dynamic Animated Ambient Background Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#00897B]/30 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#26A69A]/25 blur-[110px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#00897B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Main Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[620px] mx-auto text-center bg-gradient-to-b from-[#141E23]/90 to-[#0F171B]/95 border border-[#26A69A]/25 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_50px_rgba(0,137,123,0.15)] backdrop-blur-xl"
      >
        {/* Brand Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 mb-6 group transition-all hover:scale-105 duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md group-hover:shadow-[0_0_15px_rgba(38,166,154,0.4)] transition-shadow">
              <img
                src="/mslogo.png"
                alt="Marketing Safalta"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-white tracking-tight">
              Marketing <span className="text-[#26A69A]">Safalta</span>
            </span>
          </Link>
        </motion.div>

        {/* Celebratory Checkmark Icon with Glowing Rings */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          {/* Animated Expanding Rings */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.4, 1.6], opacity: [0.6, 0.2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-[#26A69A]"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.25, 1.4], opacity: [0.8, 0.3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute inset-0 rounded-full bg-[#00897B]/20 blur-md"
          />

          {/* Core Checkmark Badge */}
          <motion.button
            type="button"
            onClick={triggerConfettiAgain}
            title="Click to celebrate again!"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: 0.2,
            }}
            className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-[#00897B] to-[#26A69A] p-0.5 shadow-[0_0_30px_rgba(38,166,154,0.5)] cursor-pointer"
          >
            <div className="w-full h-full rounded-full bg-[#0E171B] flex items-center justify-center text-[#26A69A]">
              <motion.div
                initial={{ pathLength: 0, scale: 0 }}
                animate={{ pathLength: 1, scale: 1 }}
                transition={{ delay: 0.45, duration: 0.4, type: "spring" }}
              >
                <Check className="w-10 h-10 stroke-[3] text-[#26A69A]" />
              </motion.div>
            </div>
          </motion.button>
        </div>

        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#26A69A] bg-[#26A69A]/15 border border-[#26A69A]/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(38,166,154,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "4s" }} />
          Meeting Confirmed
        </motion.div>

        {/* Main Heading with responsive font-size and balance */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="font-['Outfit',sans-serif] text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3 break-words [text-wrap:balance]"
        >
          Thank You! Your meeting is confirmed successfully.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 max-w-lg mx-auto"
        >
          We look forward to meeting you! Our healthcare growth strategist will connect with you at the scheduled time to discuss your custom patient acquisition blueprint.
        </motion.p>

        {/* Interactive Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left"
        >
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#26A69A]/40 transition-colors flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00897B]/20 text-[#26A69A] flex items-center justify-center shrink-0 mt-0.5">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold mb-0.5">Video Call Link</h4>
              <p className="text-[#94A3B8] text-[11px] sm:text-xs leading-normal">
                Check your email inbox or spam folder for the Google Meet / calendar invite.
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#26A69A]/40 transition-colors flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00897B]/20 text-[#26A69A] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-bold mb-0.5">1-on-1 Doctor Session</h4>
              <p className="text-[#94A3B8] text-[11px] sm:text-xs leading-normal">
                Tailored 30-day patient growth plan with zero obligations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00897B] to-[#26A69A] hover:from-[#00796B] hover:to-[#229A8E] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-[0_10px_25px_rgba(0,137,123,0.4)] hover:shadow-[0_15px_35px_rgba(0,137,123,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={triggerConfettiAgain}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#80CBC4] hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 py-3.5 px-6 rounded-full transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#26A69A]" />
            Celebrate Again 🎉
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
