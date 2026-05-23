import { CheckCircle2, TrendingUp, Settings, BarChart4, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Estruturação",
      subtitle: "Fase de Configuração Técnica",
      desc: "Realizamos diagnóstico tributário inicial, integração completa com o ERP Bling/Tiny, cadastro de contas nos marketplaces líderes (Mercado Livre, Shopee, Amazon) e criação da blindagem de marca profissional.",
      icon: <Settings className="w-6 h-6 text-[#00D9FF]" />,
    },
    {
      num: "02",
      title: "Execução",
      subtitle: "Fase de Inteligência e Criativos",
      desc: "Nossa equipe cria fotos profissionais diagramadas, copywriting persuasivo de alta conversão, descrições tagueadas com SEO e precificação cirúrgica com foco na preservação máxima da sua margem de lucro líquido.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#8A2EFF]" />,
    },
    {
      num: "03",
      title: "Ativação",
      subtitle: "Fase de Tração Acelerada",
      desc: "Lançamento oficial dos produtos com campanhas de Ads patrocinados nativos para impulsionar o algoritmo. Ativação nas redes logísticas expressas ultra rápidas (Flex, Coleta e Full) para garantir selo de envio rápido.",
      icon: <Rocket className="w-6 h-6 text-[#00D9FF]" />,
    },
    {
      num: "04",
      title: "Escala",
      subtitle: "Fase de Faturamento Exponencial",
      desc: "Análise contínua de relatórios, otimização de campanhas, ativações promocionais e expansão horizontal para novos marketplaces. Sua máquina de vendas operando no talo com faturamento recorrente nacional.",
      icon: <TrendingUp className="w-6 h-6 text-[#8A2EFF]" />,
    },
  ];

  return (
    <section id="como-funciona" className="relative py-24 bg-[#050505]/95 overflow-hidden">
      {/* Decorative lines in deep black spaces */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8A2EFF]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#8A2EFF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-purple">
            METODOLOGIA TESTADA E APROVADA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Como sua operação começa a escalar
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Nós implantamos um ecossistema com etapas profissionais estruturadas para garantir que sua transição do varejo físico para os marketplaces seja madura, blindada e lucrativa desde os primeiros dias.
          </p>
        </div>

        {/* Stepper Grid Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              id={`step-card-${idx}`}
              className="p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-[#00D9FF]/25 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Card visual backdrop lines */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#00D9FF]/5 to-transparent rounded-tr-2xl group-hover:from-[#00D9FF]/20 transition-all duration-300 pointer-events-none" />

              <div>
                {/* Number heading */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white/10 to-white/40 group-hover:from-[#00D9FF] group-hover:to-[#8A2EFF] transition-all duration-300">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#00D9FF]/30 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Sub-label */}
                <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest block mb-1">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D9FF] transition-colors tracking-tight">
                  {step.title}
                </h3>

                {/* Body decription */}
                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator footer in monospace */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
                <span>SCALLE X OPERATIONAL</span>
                <span>STEP // {step.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
