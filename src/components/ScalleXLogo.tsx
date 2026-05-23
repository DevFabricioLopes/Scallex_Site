import React from "react";

interface ScalleXLogoProps {
  className?: string;
  showText?: boolean;
}

export default function ScalleXLogo({ className = "", showText = true }: ScalleXLogoProps) {
  return (
    <div className={`flex flex-col select-none leading-none ${className}`} id="scallex-brand-logo">
      <div className="flex items-baseline relative pr-3">
        {/* SCALLE */}
        <span className="font-extrabold tracking-[0.16em] text-lg sm:text-xl text-white bg-gradient-to-r from-white via-[#E0F7FF] to-[#00D9FF] bg-clip-text text-transparent">
          SCALLE
        </span>
        {/* Stylized X with bottom-cursive flourish - padded on the right to prevent italic letter clipping */}
        <span className="ml-[5px] pr-3 font-black italic text-2xl sm:text-3xl text-transparent bg-gradient-to-br from-[#8A2EFF] via-[#C026D3] to-[#F43F5E] bg-clip-text relative">
          X
        </span>
      </div>

      {/* Underlining Swoosh vector matching the styling bottom curve */}
      <svg
        className="w-full h-1 mt-[2px] opacity-80"
        viewBox="0 0 100 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbit-grad-logo-small" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="30%" stopColor="#2563EB" />
            <stop offset="70%" stopColor="#8A2EFF" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>
        <path
          d="M 0 2 Q 50 8 100 0"
          stroke="url(#orbit-grad-logo-small)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
