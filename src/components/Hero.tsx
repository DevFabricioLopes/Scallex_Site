import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, ShieldCheck, Zap, ArrowRight, Package, TrendingUp } from "lucide-react";

interface SaleNotification {
  id: number;
  niche: string;
  value: number;
  marketplace: string;
  time: string;
}

const NICHES = [
  "Pet Shop", "Vestuário", "Calçados", "Autopeças", "Beleza & Cosméticos", 
  "Casa & Decoração", "Eletrodomésticos", "Suplementos", "Brinquedos"
];

const MARKETPLACES = ["Mercado Livre", "Amazon", "Shopee", "Magazine Luiza"];

export default function Hero() {
  const [sales, setSales] = useState<SaleNotification[]>([
    { id: 1, niche: "Pet Shop", value: 189.90, marketplace: "Mercado Livre", time: "Agora mesmo" },
    { id: 2, niche: "Casa & Decoração", value: 450.00, marketplace: "Amazon", time: "Há 1 min" },
    { id: 3, niche: "Vestuário", value: 129.90, marketplace: "Shopee", time: "Há 2 min" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNiche = NICHES[Math.floor(Math.random() * NICHES.length)];
      const randomMkt = MARKETPLACES[Math.floor(Math.random() * MARKETPLACES.length)];
      const randomValue = Math.floor(Math.random() * 850) + 49.90;
      
      const newSale: SaleNotification = {
        id: Date.now(),
        niche: randomNiche,
        value: parseFloat(randomValue.toFixed(2)),
        marketplace: randomMkt,
        time: "Agora mesmo"
      };

      setSales((prev) => [newSale, ...prev.slice(0, 4)]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleCtaScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#simulador");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Cyberpunk Details */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      
      {/* Floating neon light blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-[#00D9FF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-[#8A2EFF]/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(#00D9FF 1px, transparent 1px), linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Bullets */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Micro-Headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D9FF]/8 border border-[#00D9FF]/20 text-xs font-mono font-bold text-[#00D9FF] tracking-wider uppercase mb-6 max-w-max">
            <Zap className="w-3.5 h-3.5 animate-pulse text-[#00D9FF]" />
            <span>Se você não está no marketplace, está deixando dinheiro na prateleira.</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Transforme sua Empresa Física em uma{" "}
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] bg-clip-text text-transparent glow-text-blue">
              Máquina de Vendas 24h
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-400 font-light mb-8 max-w-xl leading-relaxed">
            Enquanto sua loja fecha, o marketplace continua vendendo todos os dias — com escala, previsibilidade e alcance nacional.
          </p>

          {/* Bullets */}
          <div className="flex flex-col gap-4 mb-9">
            {[
              "Venda todos os dias — até enquanto dorme",
              "Pare de depender do movimento da sua cidade",
              "Escale seu faturamento com previsibilidade"
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#00D9FF] shrink-0 mt-0.5" />
                <span className="text-gray-200 font-medium text-base">{bullet}</span>
              </div>
            ))}
          </div>

          {/* CTA & Trust Badges */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <a
              href="#simulador"
              onClick={handleCtaScroll}
              id="hero-cta-button"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] rounded-xl font-bold text-black hover:text-white text-lg tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(0,217,255,0.4)] hover:shadow-[0_0_35px_rgba(138,46,255,0.7)] text-center hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Simular Potential de Escala <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#8A2EFF] to-[#00D9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-[#8A2EFF]" />
              <div className="text-left">
                <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest leading-none">Vagas Status</p>
                <p className="text-sm font-bold text-white tracking-wide">Vagas Limitadas para Maio</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High Tech Visual Dashboard & simulated sales ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Glassmorphic Cyber Display */}
          <div className="glass rounded-2xl p-6 border border-[#00D9FF]/20 relative overflow-hidden shadow-[0_20px_50px_rgba(5,5,5,0.8)]">
            {/* Glossy sheen */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />
            
            {/* Header / Meta */}
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00D9FF]" />
                <span className="w-3 h-3 rounded-full bg-[#8A2EFF]" />
                <span className="w-3 h-3 rounded-full bg-gray-700" />
              </div>
              <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider glow-text-blue">
                SCALLE-X ENGINE v4.3 // LIVE
              </span>
            </div>

            {/* Display Stat Widget in cyber style */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">Status da Operação</span>
                <span className="text-sm font-bold text-[#00D9FF] flex items-center gap-1.5 mt-1 glow-text-blue">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" /> Ativo & Vendendo
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#050505] border border-white/5">
                <span className="text-[10px] font-mono text-gray-500 uppercase block tracking-wider">Metodologia</span>
                <span className="text-sm font-bold text-white block mt-1">Escala Omnichannel</span>
              </div>
            </div>

            {/* Sales Stream Ticker */}
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Package className="w-3.5 h-3.5 text-[#8A2EFF]" /> Monitor de Pedidos Simulados 24h:
            </h3>

            <div className="space-y-3 min-h-[220px]">
              <AnimatePresence mode="popLayout">
                {sales.map((sale) => (
                  <motion.div
                    key={sale.id}
                    layout
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00D9FF]/20 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D9FF]/20 to-[#8A2EFF]/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-[#00D9FF]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono text-[#00D9FF] font-bold">
                            {sale.marketplace}
                          </span>
                          <span className="text-[10px] text-gray-500">• {sale.time}</span>
                        </div>
                        <p className="text-sm font-bold text-white mt-0.5">
                          Setor: <span className="text-gray-300 font-medium">{sale.niche}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-gray-500 block">Faturamento</span>
                      <span className="text-sm font-black font-mono text-white">
                        R$ {sale.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Simulated Live counter of total items sold today */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">Total vendas acumuladas hoje (Simulação)</span>
              <span className="text-[#00D9FF] font-extrabold flex items-center gap-1 glow-text-blue">
                1.482 pedidos <span className="text-white font-mono font-light text-[10px] bg-emerald-500/20 px-1 py-0.5 rounded leading-none text-emerald-400">+12%</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Anchor line for micro visuals */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent" />
    </section>
  );
}
