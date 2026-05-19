"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import interfaceLogo from "@/assets/interface-logo.png";
import bridgeImage from "@/assets/Bridge.png";

function BridgeIllustration() {
  return (
    <Image
      src={bridgeImage}
      alt="Bridge illustration"
      className="w-full mx-auto h-auto"
      priority
    />
  );
}

function MetaPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5a2a57]/55 border border-white/10 text-[#e8c9dc] backdrop-blur-sm shadow-inner shadow-white/5 whitespace-nowrap">
      {icon}
      <span className="font-montserrat font-semibold tracking-wide text-[11px] sm:text-sm">
        {label}
      </span>
    </div>
  );
}

const CalendarIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ClockIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const PinIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-[#efb3ce]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[78vh] sm:min-h-screen text-white font-inter overflow-x-hidden">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(161,0,90,0.15) 0%, transparent 70%)",
        }}
      />

      <main className="relative z-10 flex flex-col items-center text-center px-4 pt-28 sm:pt-24 md:pt-32 pb-0 max-w-6xl mx-auto">

        <div className="mb-4 sm:mb-5 inline-flex items-center rounded-full px-4 py-1.5 border border-[#a56992]/45 bg-[#3a0f3f]/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
          <span className="text-[10px] sm:text-[11px] font-montserrat font-semibold tracking-[0.15em] uppercase text-[#e8a8c9] leading-tight">
            PUP Computer Engineering Seminar 2026
          </span>
        </div>

        <h1
          className={`font-montserrat font-extrabold tracking-tight leading-[0.95] mb-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "clamp(2.8rem, 14vw, 7rem)" }}
        >
          <span className="text-white">INTERFACE </span>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-coral"
            style={{ WebkitTextStroke: "0px", textShadow: "none" }}
          >
            2026
          </span>
        </h1>

        <p className="max-w-xl text-white/65 font-inter font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-4 px-2">
          Bridging Core Computer Engineering Principles with Emerging Industry Practice.
        </p>

        <div className="sm:hidden flex flex-col items-center gap-1 mb-6 text-center">
          <p className="font-montserrat text-xl font-bold text-[#FF2F8E] tracking-tight">
            May 22, 2026
          </p>
          <p className="text-sm text-white/70 font-medium">
            08:00 AM - 05:00 PM • CEA AVR / Virtual
          </p>
        </div>

        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-7 w-full sm:w-auto">
          <MetaPill icon={<CalendarIcon />} label="May 22, 2026" />
          <MetaPill icon={<ClockIcon />} label="08:00 AM – 05:00 PM" />
          <MetaPill icon={<PinIcon />} label="CEA AVR / Virtual" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10 w-full max-w-xl px-2 sm:px-0">
          <a
            href={process.env.NEXT_PUBLIC_LUMA_URL || "https://lu.ma"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-10 py-4 rounded-xl font-montserrat font-bold text-lg sm:text-xl tracking-wide text-[#5c0b3f] bg-[#f2a8c5] hover:bg-[#f7b8cf] transition-all duration-200 active:scale-95 text-center shadow-lg shadow-[#a1005a]/20"
          >
            Register on Luma
          </a>
          <a
            href="#agenda"
            className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-10 py-4 rounded-xl font-montserrat font-bold text-lg sm:text-xl tracking-wide text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 active:scale-95 text-center"
          >
            Learn More
          </a>
        </div>

        <div
          className={`w-full max-w-4xl relative transition-all duration-1000 delay-300 -mx-4 sm:mx-0 mt-0 sm:mt-0 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ width: "calc(100% + 2rem)", marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="overflow-hidden">
            <BridgeIllustration />
          </div>
        </div>
      </main>
    </div>
  );
}