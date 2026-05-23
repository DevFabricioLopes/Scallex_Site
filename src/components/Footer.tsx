import React from "react";
import { ArrowUp } from "lucide-react";
import ScalleXLogo from "./ScalleXLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-white/5 pt-12 pb-8 overflow-hidden" id="main-footer">
      {/* Absolute micro grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#00D9FF 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col gap-10">
        
        {/* Top block: Brand & Scroll to Top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5 w-full">
          {/* Brand Left */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <ScalleXLogo />
            </div>
            <p className="text-xs text-gray-500 max-w-sm">
              Scalle X Assessoria — Especialistas em estruturação e escala em marketplaces com segurança e conformidade operacional.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            id="back-to-top-btn"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#00D9FF] hover:text-black hover:shadow-[0_0_15px_rgba(0,217,255,0.4)] border border-white/10 hover:border-[#00D9FF] flex items-center justify-center transition-all cursor-pointer shrink-0"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Middle block: All protection & partner badges side-by-side in a responsive flex row */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-2 w-full">
          
          {/* Seal 1: Mercado Livre Consultoria Certificada Shield */}
          <div className="flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-[#FFE600]/20 px-4 py-2.5 rounded-2xl transition-all duration-300 group">
            <svg 
              className="w-10 h-12 shrink-0 drop-shadow-[0_0_10px_rgba(0,83,156,0.3)] group-hover:scale-105 transition-transform duration-300" 
              viewBox="0 0 100 115" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#shield-clip)">
                {/* Shield Base Colors */}
                <rect x="0" y="0" width="100" height="55" fill="#FFFFFF"/>
                <rect x="0" y="55" width="100" height="60" fill="#FFE600"/>
                
                {/* Text Content */}
                <text x="50" y="24" textAnchor="middle" fill="#0A0A0A" fontSize="7.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">CONSULTORIA</text>
                <text x="50" y="39" textAnchor="middle" fill="#00539C" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.2">Certificada</text>
                
                {/* Handshake Graphic */}
                <circle cx="50" cy="80" r="16" fill="#FFE600" stroke="#001E50" strokeWidth="2" />
                <path d="M42 80c2-1.5 5-2 8-2s6 .5 8 2M42 80c1 1 2 2 4 2s4-1 4-2M48 80c1 1 2 2 4 2s4-1 4-2" stroke="#001E50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M37 83c2-1 4.5-1.5 7-1s3 3.5 5.5 3.5 5-2 6.5-3c1.5-1 4.5 0 5 1" stroke="#001E50" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </g>
              
              {/* Outer Blue Borders */}
              <path d="M50 2 L92 18 C92 60 55 101 50 110 C45 101 8 60 8 18 Z" stroke="#00539C" strokeWidth="4" strokeLinejoin="round" fill="none" />
              <path d="M50 4 L90 19 C90 59 54 99 50 108 C46 99 10 59 10 19 Z" stroke="#3483FA" strokeWidth="2" strokeLinejoin="round" fill="none" />
              <defs>
                <clipPath id="shield-clip">
                  <path d="M50 2 L92 18 C92 60 55 101 50 110 C45 101 8 60 8 18 Z"/>
                </clipPath>
              </defs>
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-mono font-black text-white tracking-widest leading-none">MERCADO LIVRE</p>
              <p className="text-[9px] font-sans text-gray-400 font-medium leading-none mt-1">Consultoria Certificada</p>
            </div>
          </div>

          {/* Seal 2: Compra Segura Site Protegido SSL */}
          <div className="flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 px-4 py-2.5 rounded-2xl transition-all duration-300 group">
            <svg 
              className="w-8 h-9 text-emerald-500 fill-emerald-500/10 shrink-0 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform duration-300" 
              viewBox="0 0 24 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2 L20 5 C20 16 14 23 12 25 C10 23 4 16 4 5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M9 13.5 L11 15.5 L15 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-mono font-black text-white tracking-widest leading-none flex items-center gap-1.5">
                COMPRA SEGURA <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </p>
              <p className="text-[9px] font-sans text-gray-400 font-medium leading-none mt-1">SITE PROTEGIDO • CERTIFICADO SSL</p>
            </div>
          </div>

          {/* Seal 3: Google Safe Browsing */}
          <div className="flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-blue-500/20 px-4 py-2.5 rounded-2xl transition-all duration-300 group">
            <svg 
              className="w-8 h-9 text-emerald-400 shrink-0 filter drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] group-hover:scale-105 transition-transform duration-300" 
              viewBox="0 0 24 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2 L20 5 C20 16 14 23 12 25 C10 23 4 16 4 5 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              <path d="M9 14 L11 16 L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-left">
              <p className="text-[9px] font-sans text-gray-400 font-semibold leading-none">Safe Browsing</p>
              <p className="text-xs font-black tracking-tight text-white leading-none mt-1">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </p>
            </div>
          </div>

          {/* Seal 4: Reclame AQUI */}
          <div className="flex items-center gap-3 bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-lime-500/20 px-4 py-2.5 rounded-2xl transition-all duration-300 group">
            <div className="w-8 h-8 rounded-lg bg-[#84cc16]/10 flex items-center justify-center border border-[#84cc16]/20 text-[#84cc16] shrink-0 font-extrabold text-[11px] group-hover:scale-105 transition-transform duration-300">
              RA
            </div>
            <div className="text-left">
              <p className="text-[9px] font-sans text-gray-400 font-semibold leading-none">Empresa Recomendada</p>
              <p className="text-[11px] font-sans font-bold leading-none mt-1.5">
                <span className="text-white font-black">Reclame</span>
                <span className="text-[#84cc16] font-black">AQUI</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Centered Copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left w-full">
          <span className="text-xs font-mono text-gray-500 block">
            © {currentYear} SCALLE X ASSESSORIA. TODOS OS DIREITOS RESERVADOS.
          </span>
          <a
            href="https://github.com/DevFabricioLopes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#00D9FF] transition-all group font-mono"
            id="developer-github-link"
          >
            <span className="text-gray-600">Desenvolvido por</span>
            <span className="font-extrabold group-hover:underline">DevFabricioLopes</span>
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-[#00D9FF] group-hover:scale-110 transition-all"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
