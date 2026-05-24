import React from "react";
import { Award, TrendingUp, CheckCircle, Flame, FileSpreadsheet, Percent, BarChart } from "lucide-react";

export default function CaseStudy() {
  const handleCtaScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#simulador");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="case" className="relative py-14 bg-[#050505] overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-[#8A2EFF]/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] bg-[#00D9FF]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00D9FF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-blue">
            ESTUDO DE CASO REAL AUTO-AUDITADO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Do zero à escala real
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Nós não vendemos sonhos intangíveis. Vendemos faturamento real e escala estruturada. Conheça a história de transformação de um de nossos maiores cases.
          </p>
        </div>

        {/* Case Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-[#0a0515]/90 to-[#050308]/90 border border-[#8A2EFF]/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(138,46,255,0.08)] max-w-6xl mx-auto hover:border-[#00D9FF]/30 transition-colors duration-500">
          {/* Left Block: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8A2EFF]/10 border border-[#8A2EFF]/25 text-xs font-mono font-bold text-[#8A2EFF] tracking-wider uppercase mb-2">
              <Award className="w-4 h-4 text-[#8A2EFF]" /> MODELO ASSESSORIA SCALLE X
            </div>

            <h3 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight">
              Case de Sucesso: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-white">Hiper Pet</span>
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
              A Hiper Pet começou como uma operação de varejo pet com ótima aceitação local, mas sem nenhum canal de vendas estabelecido estruturadamente na internet. Eles sofriam com as limitações de movimentação física e oscilações diárias.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#00D9FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#00D9FF]" />
                </div>
                <p className="text-gray-400 text-sm font-light">
                  <strong className="text-white font-semibold">Início Blindado:</strong> Operação inteira estruturada e cadastrada do zero absoluto seguindo nossa metodologia rigorosa.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#00D9FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#00D9FF]" />
                </div>
                <p className="text-gray-400 text-sm font-light">
                  <strong className="text-white font-semibold">Geração de Tração orgânica:</strong> SEO técnico e anúncios optimizados que pularam para as primeiras páginas do Mercado Livre rapidamente.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-[#00D9FF]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-[#00D9FF]" />
                </div>
                <p className="text-gray-400 text-sm font-light">
                  <strong className="text-white font-semibold">Logística Aceleradora:</strong> Integração com hubs rápidos que garantem envios no mesmo dia para aumentar aprovação.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-lg md:text-xl italic text-gray-300 font-medium leading-relaxed">
                "Isso não é teoria. É execução com método, estrutura inteligente e gestão profissional diária."
              </p>
            </div>
          </div>

          {/* Right Block: Stats Dashboard & graphic representation */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* The Big Result Visual */}
            <div className="p-8 rounded-2xl glass-purple border border-[#8A2EFF]/35 text-center relative overflow-hidden shadow-[0_10px_30px_rgba(138,46,255,0.05)]">
              {/* background glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8A2EFF]/10 rounded-full blur-xl pointer-events-none" />
              
              <span className="text-xs font-mono text-[#8A2EFF] font-bold uppercase tracking-widest block mb-1">
                FATURAMENTO ONLINE RECORRENTE
              </span>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mt-2 bg-gradient-to-r from-white via-white to-[#00D9FF] bg-clip-text text-transparent">
                +R$ 600.000
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#00D9FF]/10 rounded-md text-xs font-mono text-[#00D9FF] font-bold">
                <Flame className="w-3.5 h-3.5 animate-bounce" /> SAÍRAM DO ZERO NO ONLINE
              </div>
            </div>

            {/* Benchmark Columns comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between text-gray-500 mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase block">Fase Inicial</span>
                  <BarChart className="w-4 h-4" />
                </div>
                <p className="text-xl font-bold text-gray-400">R$ 0,00</p>
                <p className="text-xs text-red-400 mt-1 font-mono font-medium leading-none">Inexistente no Digital</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#00D9FF]/5 border border-[#00D9FF]/20">
                <div className="flex items-center justify-between text-[#00D9FF] mb-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase block font-bold">COM MÉTODO</span>
                  <TrendingUp className="w-4 h-4 animate-pulse" />
                </div>
                <p className="text-xl font-extrabold text-white">R$ 600k</p>
                <p className="text-xs text-emerald-400 mt-1 font-mono font-medium leading-none">100% Estruturado</p>
              </div>
            </div>

            {/* Persuasive Callout button */}
            <div className="p-5 rounded-2xl bg-[#050505] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[10px] font-mono text-gray-500 tracking-wider block uppercase font-bold">Estrutura Inteligente</span>
                <p className="text-xs text-gray-400 mt-0.5">Sua empresa também pode se tornar um case de destaque.</p>
              </div>
              <a
                href="#simulador"
                onClick={handleCtaScroll}
                className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-[#00D9FF] border border-white/10 hover:border-[#00D9FF] text-white hover:text-black hover:font-bold text-xs font-mono tracking-wider transition-all duration-300"
              >
                PROJETAR MINHA COBERTURA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
