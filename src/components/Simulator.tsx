import { useState, useMemo } from "react";
import { Coins, HelpCircle, ArrowRight, ShieldCheck, Zap, Layers, BarChart3, TrendingUp } from "lucide-react";

interface NicheConfig {
  name: string;
  factor3m: number;
  factor6m: number;
  factor12m: number;
  recommendations: string[];
}

const NICHES_DATA: NicheConfig[] = [
  { name: "Pet Shop", factor3m: 0.35, factor6m: 0.85, factor12m: 1.6, recommendations: ["Mercado Livre (Líder)", "Shopee (Volume)", "Amazon"] },
  { name: "Vestuário & Moda", factor3m: 0.4, factor6m: 1.1, factor12m: 2.2, recommendations: ["Shopee (Excelente)", "Mercado Livre", "Shein (Nacional)"] },
  { name: "Autopeças & Acessórios", factor3m: 0.5, factor6m: 1.3, factor12m: 2.5, recommendations: ["Mercado Livre (Absoluto)", "Amazon", "Shopee"] },
  { name: "Casa, Decoração & Jardim", factor3m: 0.3, factor6m: 0.9, factor12m: 1.8, recommendations: ["Mercado Livre", "Amazon (Alta)", "Magalu"] },
  { name: "Cosméticos & Perfumaria", factor3m: 0.45, factor6m: 1.2, factor12m: 2.4, recommendations: ["Shopee (Líder)", "Mercado Livre", "Amazon"] },
  { name: "Eletrônicos & Informática", factor3m: 0.6, factor6m: 1.5, factor12m: 3.0, recommendations: ["Mercado Livre", "Amazon (Referência)", "Shopee"] },
  { name: "Alimentos & Bebidas", factor3m: 0.25, factor6m: 0.7, factor12m: 1.4, recommendations: ["Mercado Livre (Full)", "Shopee", "Magalu"] },
];

export default function Simulator() {
  const [selectedNicheIndex, setSelectedNicheIndex] = useState(0);
  const [physicalRev, setPhysicalRev] = useState(30000); // Default current physical revenue R$30.000

  const niche = NICHES_DATA[selectedNicheIndex];

  // Dynamic calculations based on niche coefficient & physical revenue slider
  const projection = useMemo(() => {
    const p3m = physicalRev * niche.factor3m;
    const p6m = physicalRev * niche.factor6m;
    const p12m = physicalRev * niche.factor12m;
    
    // Average order unit estimates: assume average ticket is R$ 120
    const ticketMedio = 120;
    const dailyOrders = Math.round((p6m / 30) / ticketMedio);

    return {
      m3: Math.round(p3m),
      m6: Math.round(p6m),
      m12: Math.round(p12m),
      total6m: Math.round(physicalRev + p6m),
      dailyOrders: dailyOrders < 1 ? 1 : dailyOrders,
    };
  }, [physicalRev, niche]);

  // Dynamic WhatsApp link with customized message based on results
  const whatsAppNumber = "5548991575656";
  const customMessage = `Olá! Realizei a simulação de escala para meu segmento de ${niche.name}. Atualmente faturo R$ ${physicalRev.toLocaleString("pt-BR")}/mês no físico e descobri que posso faturar +R$ ${projection.m6.toLocaleString("pt-BR")}/mês em 6 meses com o método da Scalle X. Gostaria de agendar meu diagnóstico gratuito!`;
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(customMessage)}`;

  // SVG Chart rendering math
  const maxVal = Math.max(physicalRev, projection.m12);
  const getPercentageHeight = (val: number) => {
    return (val / maxVal) * 100;
  };

  return (
    <section id="simulador" className="relative py-14 bg-[#050505] overflow-hidden">
      {/* Decorative grids and spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[55rem] h-[30rem] bg-[#00D9FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8A2EFF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-purple">
            SIMULADOR INTERATIVO DE COMPATIBILIDADE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Projete sua Nova Escala Digital
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Selecione o nicho do seu produto atual e informe o faturamento aproximado de sua loja física para visualizar instantaneamente uma estimativa rampa de vendas online.
          </p>
        </div>

        {/* Simulator Panel Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Side */}
          <div className="lg:col-span-5 p-8 rounded-2xl glass border border-white/8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Niche select */}
              <div>
                <label className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider block mb-3">
                  1. Seu Segmento / Nicho
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {NICHES_DATA.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedNicheIndex(idx)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold text-left border transition-all duration-200 ${
                        selectedNicheIndex === idx
                          ? "bg-[#00D9FF]/10 text-[#00D9FF] border-[#00D9FF]/40 shadow-[0_0_10px_rgba(0,217,255,0.15)]"
                          : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider current revenue */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider block">
                    2. Faturamento Físico Atual
                  </label>
                  <span className="text-base font-extrabold font-mono text-white">
                    R$ {physicalRev.toLocaleString("pt-BR")} /mês
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={physicalRev}
                  onChange={(e) => setPhysicalRev(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-white/10 appearance-none cursor-pointer accent-[#00D9FF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
                  <span>R$ 5 mil</span>
                  <span>R$ 250 mil</span>
                  <span>R$ 500 mil +</span>
                </div>
              </div>

              {/* Recommendations */}
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                <span className="text-[10px] font-mono text-[#8A2EFF] uppercase tracking-wider block mb-2 font-bold">
                  Canais Sugeridos p/ {niche.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {niche.recommendations.map((rec, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#8A2EFF]/8 border border-[#8A2EFF]/20 rounded text-xs text-gray-300 font-medium"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info summary */}
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-gray-500">
              *A simulação é baseada no faturamento histórico escalável observado em nossos clientes estruturados em até 12 meses.
            </div>
          </div>

          {/* Visualization Output Side */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#0c0612] to-[#040208] border border-[#8A2EFF]/20 p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(138,46,255,0.08)]">
            <div>
              {/* Header result */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Projeção Digital Estimada</span>
                  <h3 className="text-lg font-bold text-white mt-1">Sua Empresa Pode Agregar</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-1 rounded">
                    + R$ {projection.m6.toLocaleString("pt-BR")} / Mês
                  </span>
                </div>
              </div>

              {/* Metric highlights */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                  <span className="text-[10px] font-mono text-gray-400 block tracking-wider uppercase">Em 3 Meses (+30%)</span>
                  <span className="text-lg font-extrabold text-white mt-1 block">
                    +R$ {projection.m3.toLocaleString("pt-BR")}
                  </span>
                </div>
                <div className="p-4 bg-[#00D9FF]/5 border border-[#00D9FF]/20 rounded-xl relative overflow-hidden">
                  <span className="text-[10px] font-mono text-[#00D9FF] font-bold block tracking-wider uppercase">Em 6 Meses (+85%)</span>
                  <span className="text-lg font-black text-[#00D9FF] mt-1 block glow-text-blue">
                    +R$ {projection.m6.toLocaleString("pt-BR")}
                  </span>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#00D9FF]/10 rounded-bl-xl flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-[#00D9FF]" />
                  </div>
                </div>
                <div className="p-4 bg-[#8A2EFF]/5 border border-[#8A2EFF]/20 rounded-xl col-span-2 md:col-span-1">
                  <span className="text-[10px] font-mono text-purple-400 block tracking-wider uppercase">Em 12 Meses (+160%)</span>
                  <span className="text-lg font-extrabold text-white mt-1 block">
                    +R$ {projection.m12.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>

              {/* Neon Vertical Chart Visualization */}
              <div className="space-y-4 mb-8">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block flex items-center gap-1">
                  <BarChart3 className="w-4 h-4 text-[#00D9FF]" /> Rampa de Faturamento Mensal (Simulado):
                </span>
                
                <div className="relative h-44 bg-white/[0.01] border border-white/5 rounded-xl px-6 flex items-end justify-between gap-4 pt-6">
                  {/* Grid Lines */}
                  <div className="absolute inset-x-0 top-1/4 h-[1px] bg-white/5 border-dashed" />
                  <div className="absolute inset-x-0 top-2/4 h-[1px] bg-white/5 border-dashed" />
                  <div className="absolute inset-x-0 top-3/4 h-[1px] bg-white/5 border-dashed" />

                  {/* Físico Bar */}
                  <div className="flex flex-col items-center w-1/4 group relative z-10">
                    <div 
                      className="w-full max-w-[40px] bg-gray-600 rounded-t-md transition-all duration-500"
                      style={{ height: `${getPercentageHeight(physicalRev) * 1.1}px`, minHeight: '15px' }}
                    />
                    <span className="text-[10px] font-mono text-gray-500 uppercase font-black mt-2">FÍSICO</span>
                    <span className="text-[9px] font-mono text-gray-400">R$ {Math.round(physicalRev / 1000)}k</span>
                  </div>

                  {/* 3 Meses Bar */}
                  <div className="flex flex-col items-center w-1/4 group relative z-10">
                    <div 
                      className="w-full max-w-[40px] bg-gradient-to-t from-[#8A2EFF]/30 to-[#8A2EFF] rounded-t-md transition-all duration-500 glow-purple"
                      style={{ height: `${getPercentageHeight(projection.m3) * 1.1}px`, minHeight: '15px' }}
                    />
                    <span className="text-[10px] font-mono text-gray-400 uppercase mt-2">3 MESES</span>
                    <span className="text-[9px] font-mono text-white">R$ {Math.round(projection.m3 / 1000)}k</span>
                  </div>

                  {/* 6 Meses Bar */}
                  <div className="flex flex-col items-center w-1/4 group relative z-10">
                    <div 
                      className="w-full max-w-[40px] bg-gradient-to-t from-[#00D9FF]/40 to-[#00D9FF] rounded-t-md transition-all duration-500 glow-blue-lg"
                      style={{ height: `${getPercentageHeight(projection.m6) * 1.1}px`, minHeight: '15px' }}
                    />
                    <span className="text-[10px] font-mono text-[#00D9FF] uppercase font-bold mt-2">6 MESES</span>
                    <span className="text-[9px] font-mono text-white">R$ {Math.round(projection.m6 / 1000)}k</span>
                  </div>

                  {/* 12 Meses Bar */}
                  <div className="flex flex-col items-center w-1/4 group relative z-10">
                    <div 
                      className="w-full max-w-[40px] bg-gradient-to-t from-[#8A2EFF] to-[#00D9FF] rounded-t-md transition-all duration-500 glow-blue"
                      style={{ height: `${getPercentageHeight(projection.m12) * 1.1}px`, minHeight: '15px' }}
                    />
                    <span className="text-[10px] font-mono text-[#8A2EFF] uppercase mt-2">12 MESES</span>
                    <span className="text-[9px] font-mono text-white">R$ {Math.round(projection.m12 / 1000)}k</span>
                  </div>
                </div>
              </div>

              {/* Extra logistics projections and shipping simulation */}
              <div className="p-4 bg-white/5 border border-white/8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block">Despacho Logístico Estimado</span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    Média de <span className="text-[#00D9FF] font-mono glow-text-blue">{projection.dailyOrders} pedidos diários</span> na transportadora do Full.
                  </p>
                </div>
                <div className="text-xs text-gray-400 leading-normal max-w-xs">
                  Sua equipe fica responsável por etiquetas, empacotamento e envio ao ponto de coleta.
                  <br />
                  Nós cuidamos da estratégia e crescimento da sua empresa! 🚀
                </div>
              </div>
            </div>

            {/* Simulated CTA Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] hover:from-[#8A2EFF] hover:to-[#00D9FF] text-black hover:text-white font-extrabold text-center tracking-wide flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(138,46,255,0.6)] transition-all duration-300"
            >
              ATIVAR ESTA SIMULAÇÃO NO WHATSAPP <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
