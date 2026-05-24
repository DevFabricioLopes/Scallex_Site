import { useState, useEffect } from "react";
import { Menu, X, Rocket, Shield } from "lucide-react";
import ScalleXLogo from "./ScalleXLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "O Problema", href: "#dor" },
    { label: "Comparação", href: "#comparacao" },
    { label: "A Solução", href: "#solucao" },
    { label: "Simulador de Escala", href: "#simulador" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Case Real", href: "#case" },
    { label: "Perguntas Frequentes", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3.5 ${
          isScrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-[#00D9FF]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Navigation Group relative to Left */}
          <div className="flex items-center gap-6 xl:gap-10">
            <a
              href="#"
              id="header-logo-link"
              className="flex items-center shrink-0 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <ScalleXLogo />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  id={`nav-item-${idx}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-[13px] xl:text-sm text-gray-400 hover:text-white px-2.5 xl:px-3.5 py-2 transition-all duration-200 relative group text-left whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Button / Mobile Menu */}
          <div className="flex items-center justify-end gap-4 shrink-0">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/5548991575656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Scalle%20X%20para%20escalar%20meu%20faturamento."
                target="_blank"
                rel="noopener noreferrer"
                id="nav-cta-primary"
                className="relative overflow-hidden group px-5 py-2.5 bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] rounded-lg font-bold text-sm tracking-wide text-black hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,217,255,0.3)] hover:shadow-[0_0_25px_rgba(138,46,255,0.6)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Falar com Assessor <Rocket className="w-4 h-4" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8A2EFF] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-colors rounded-lg hover:bg-white/5 active:scale-95"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#00D9FF]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile viewport */}
      <div
        id="mobile-menu-backdrop"
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Modern Side-sliding Navigation Drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed top-0 right-0 h-screen w-[300px] max-w-[85vw] bg-[#050505] border-l border-[#00D9FF]/20 shadow-[-10px_0_40px_rgba(0,0,0,0.95)] z-[9999] transition-transform duration-300 ease-out flex flex-col justify-between p-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/5">
          <ScalleXLogo className="scale-90 origin-left" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-gray-400 hover:text-[#00D9FF] active:scale-95 transition-all focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                id={`mobile-nav-item-${idx}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-semibold text-gray-300 hover:text-[#00D9FF] hover:bg-[#00D9FF]/5 transition-all px-4 py-3 text-left block rounded-xl border border-transparent hover:border-[#00D9FF]/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Actions */}
        <div className="mt-auto space-y-3 pt-4 border-t border-white/5 bg-[#050505]">
          <a
            href="#simulador"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-3.5 bg-transparent border border-[#00D9FF]/40 text-[#00D9FF] rounded-xl text-xs font-bold font-mono tracking-widest hover:bg-[#00D9FF]/8 hover:border-[#00D9FF] active:scale-95 transition-all uppercase block"
          >
            SIMULAR ESCALA
          </a>
          <a
            href="https://wa.me/5548991575656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Scalle%20X%20para%20escalar%20meu%20faturamento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] text-black font-extrabold rounded-xl text-sm tracking-wide shadow-[0_0_15px_rgba(0,217,255,0.4)] active:scale-95 hover:brightness-110 transition-all text-center block"
          >
            <Rocket className="w-4 h-4 shrink-0" /> CONVERSAR COM ASSESSOR
          </a>
        </div>
      </div>
    </>
  );
}
