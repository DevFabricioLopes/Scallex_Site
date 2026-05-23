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
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-[#00D9FF]/20 py-3"
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

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed top-[72px] left-0 right-0 glass border-b border-[#8A2EFF]/25 px-6 py-8 flex flex-col gap-6 animate-fade-in z-40 bg-[#050505]/95 shadow-[0_15px_40px_rgba(5,5,5,0.9)]"
        >
          <div className="flex flex-col gap-4 text-center items-center">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                id={`mobile-nav-item-${idx}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base font-semibold text-gray-300 hover:text-[#00D9FF] transition-colors py-1 text-center w-full block"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 max-w-xs mx-auto w-full">
            <a
              href="#simulador"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-center py-3 bg-transparent border border-[#00D9FF]/40 text-[#00D9FF] rounded-lg text-sm font-bold font-mono tracking-wider"
            >
              SIMULAR ESCALA
            </a>
            <a
              href="https://wa.me/5548991575656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Scalle%20X%20para%20escalar%20meu%20faturamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] text-black font-extrabold rounded-lg text-sm tracking-wide shadow-[0_0_15px_rgba(0,217,255,0.4)]"
            >
              <Rocket className="w-4 h-4" /> VAGAS LIMITADAS - AGENDAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
