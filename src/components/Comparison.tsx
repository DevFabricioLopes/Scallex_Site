import React from "react";
import { X, Check, ArrowRight, ShieldAlert, Zap, Globe, Clock, RefreshCw, BarChart } from "lucide-react";

export default function Comparison() {
  const fisicaItems = [
    { text: "Horário limitado (8h às 18h)", desc: "Portas fechadas no feriado, fim de semana e noite.", icon: <Clock className="w-5 h-5 text-red-500" /> },
    { text: "Dependência geográfica", desc: "Suas vendas dependem de quem passa em frente à loja física.", icon: <Globe className="w-5 h-5 text-red-500" /> },
    { text: "Fluxo e vendas instáveis", desc: "Inflexibilidade nas vendas diante de climas instáveis.", icon: <RefreshCw className="w-5 h-5 text-red-500" /> },
    { text: "Crescimento lento e caro", desc: "Para aumentar faturamentos é preciso alugar novos pontos físicos.", icon: <BarChart className="w-5 h-5 text-red-500" /> },
    { text: "Faturamento travado", desc: "Limitado ao tamanho do estoque físico e população local.", icon: <ShieldAlert className="w-5 h-5 text-red-500" /> },
  ];

  const marketplaceItems = [
    { text: "Vendas 24h por dia", desc: "Sua loja vende enquanto você dorme, viaja ou passa tempo com a família.", icon: <Clock className="w-5 h-5 text-[#00D9FF]" /> },
    { text: "Alcance nacional", desc: "Entrega e divulgação facilitadas para todo o território brasileiro.", icon: <Globe className="w-5 h-5 text-[#00D9FF]" /> },
    { text: "Escala previsível", desc: "Aceleradores de anúncios e dados dão previsibilidade matemática.", icon: <Zap className="w-5 h-5 text-[#00D9FF]" /> },
    { text: "Crescimento contínuo", desc: "Otimizações constantes aumentam sua fatia de mercado continuamente.", icon: <BarChart className="w-5 h-5 text-[#00D9FF]" /> },
    { text: "Operação automatizada", desc: "Logística integrada e faturamento eletrônico despachados em escala.", icon: <RefreshCw className="w-5 h-5 text-[#00D9FF]" /> },
  ];

  const handleCtaScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#simulador");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="comparacao" className="relative py-14 bg-[#050505] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00D9FF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-blue">
            QUEM NÃO COMPARA, FICA PARA TRÁS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Empresa Física <span className="text-gray-500">vs</span>{" "}
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] bg-clip-text text-transparent glow-text-purple">
              Marketplace
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Veja em números claros como a estrutura de negócios baseada em marketplace liberta sua empresa das amarras tradicionais e permite decolagens exponenciais de faturamento.
          </p>
        </div>

        {/* Comparison Boxes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Physical Box */}
          <div className="p-8 rounded-2xl bg-white/[0.01] border border-red-500/10 flex flex-col justify-between shadow-[0_10px_30px_rgba(255,0,0,0.01)] relative overflow-hidden group hover:border-red-500/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Empresa Física</h3>
                  <p className="text-xs text-red-500 font-mono tracking-wider uppercase">Modelo Limitado</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {fisicaItems.map((item, idx) => (
                  <div key={idx} id={`fisica-item-${idx}`} className="flex gap-4 items-start">
                    <div className="p-1 rounded bg-red-500/5 mt-0.5 shrink-0 border border-red-500/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-200">{item.text}</h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="text-[10px] font-mono text-gray-600 block">DURABILIDADE EM RISCO</span>
            </div>
          </div>

          {/* Marketplace Box */}
          <div className="p-8 rounded-2xl bg-[#0a0510]/80 border border-[#00D9FF]/20 flex flex-col justify-between relative overflow-hidden shadow-[0_15px_35px_rgba(138,46,255,0.1)] group hover:border-[#8A2EFF]/30 transition-all duration-300">
            {/* Absolute Glowing overlay elements inside */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8A2EFF]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-white mb-0.5 tracking-tight flex items-center gap-2">
                    Marketplace <span className="text-xs font-mono px-2 py-0.5 bg-[#00D9FF]/20 rounded text-[#00D9FF] tracking-widest leading-none">ESCALA RECOMENDADA</span>
                  </h3>
                  <p className="text-xs text-[#00D9FF] font-mono tracking-wider uppercase glow-text-blue">Modelo Escalável Automatizado</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                  <Check className="w-5 h-5 text-[#00D9FF]" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {marketplaceItems.map((item, idx) => (
                  <div key={idx} id={`marketplace-item-${idx}`} className="flex gap-4 items-start">
                    <div className="p-1 rounded bg-[#00D9FF]/8 mt-0.5 shrink-0 border border-[#00D9FF]/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{item.text}</h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#00D9FF] uppercase tracking-wider glow-text-blue">CRESCIMENTO EXPONENCIAL ATIVADO</span>
              <a
                href="#simulador"
                onClick={handleCtaScroll}
                className="text-xs font-mono font-bold text-[#00D9FF] hover:text-[#8A2EFF] flex items-center gap-1 transition-colors group/link"
              >
                PROJETAR CRESCIMENTO <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
