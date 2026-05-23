import { CloudRain, CalendarDays, BarChart2, AlertCircle, ShoppingCart } from "lucide-react";

export default function Problems() {
  const problemsList = [
    {
      icon: <CloudRain className="w-10 h-10 text-red-500" />,
      title: "Choveu?",
      desc: "O movimento de clientes derrete instantaneamente. Clientes preferem o conforto de suas casas, deixando sua loja vazia com custos fixos rodando.",
    },
    {
      icon: <CalendarDays className="w-10 h-10 text-red-500" />,
      title: "Feriado?",
      desc: "As suas portas se fecham obrigatoriamente, as vendas param totalmente e sua empresa fica estagnada, gerando custo sem faturar nada.",
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-red-500" />,
      title: "Instabilidade?",
      desc: "O fluxo de fim de semana ou datas sazonais é altamente instável. É impossível fazer planejamento financeiro com previsibilidade real.",
    },
  ];

  return (
    <section id="dor" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative cyber line details */}
      <div className="absolute top-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent via-[#8A2EFF]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8A2EFF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-purple">
            A REALIDADE DO VAREJO TRADICIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            O problema não é seu produto. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#8A2EFF]">
              É o modelo de negócios.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Você pode ter um excelente produto e ótimos clientes fiéis. Mas se você depende exclusivamente da sua estrutura física, seu crescimento anual sempre estará limitado por barreiras que você não pode controlar.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main narrative panel */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-[#0a0505] to-[#120606] border border-red-500/10 flex flex-col justify-between shadow-[0_15px_30px_rgba(255,0,0,0.03)]">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/30">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Limitações Invisíveis que Estocam seu Capital
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empresas tradicionais gastam fortunas com aluguel comercial caro, custos de contratação local e decoração física — mas continuam atendendo apenas um pequeno raio geográfico em torno de sua loja.
              </p>
              <div className="h-[1px] bg-gradient-to-r from-red-500/20 via-transparent to-transparent my-4" />
              <p className="text-gray-300 font-medium text-sm leading-normal">
                Não é falta de potencial do seu time ou do seu produto. <br className="hidden sm:inline" />
                <span className="text-red-400 font-extrabold">É pura falta de estrutura para escalar geograficamente.</span>
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                ESTRUTURA LOCAL TRAVADA
              </span>
            </div>
          </div>

          {/* Cards for specific problems */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {problemsList.map((item, index) => (
              <div
                key={index}
                id={`problem-card-${index}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 hover:bg-white/[0.04] transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
              >
                <div className="p-3.5 rounded-xl bg-red-500/5 group-hover:bg-red-500/10 border border-red-500/10 group-hover:border-red-500/25 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Narrative Warning */}
        <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-white/8 relative overflow-hidden bg-gradient-to-r from-[#0d0d0d] to-[#050505]">
          <div className="absolute top-0 bottom-0 right-0 w-48 bg-gradient-to-l from-[#8A2EFF]/5 to-transparent blur-xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#00D9FF]" /> Enquanto isso, outras empresas vendem online...
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                Nossos concorrentes digitais estão faturando 24 horas por dia, 7 dias por semana, entregando para todo o Brasil. Não espere as portas físicas ficarem obsoletas para começar a diversificar.
              </p>
            </div>
            <a
              href="#simulador"
              className="px-6 py-3 bg-[#00D9FF]/10 hover:bg-[#00D9FF] text-[#00D9FF] hover:text-black font-bold text-xs font-mono tracking-widest uppercase rounded-lg border border-[#00D9FF]/30 hover:border-[#00D9FF] transition-all duration-300 shrink-0 uppercase shadow-[0_0_15px_rgba(0,217,255,0.1)] hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]"
            >
              MUDAR DE MODELO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
