import { Layers, Sparkles, Search, Coins, Truck, Cpu, Settings, CheckCircle2, Building, ShieldCheck } from "lucide-react";

export default function Solution() {
  const pillars = [
    {
      icon: <Layers className="w-6 h-6 text-[#00D9FF]" />,
      title: "Estruturação Completa",
      desc: "Criamos e configuramos suas contas profissionais do zero absoluto nas maiores vitrines da internet (Mercado Livre, Shopee, Amazon, e mais), deixando sua marca blindada e oficial.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#8A2EFF]" />,
      title: "Anúncios Profissionais",
      desc: "Copywriting persuasivo focado em conversão e imagens diagramadas por especialistas em vendas. Anúncios impecáveis que superam a concorrência na primeira olhada.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#00D9FF]" />,
      title: "SEO Interno & Algoritmo",
      desc: "Pesquisa cirúrgica de palavras-chave mais buscadas e tagueamento técnico avançado para colocar seus produtos nos primeiros lugares das buscas orgânicas.",
    },
    {
      icon: <Coins className="w-6 h-6 text-[#8A2EFF]" />,
      title: "Gestão de Tráfego Pago (Ads)",
      desc: "Alocação eficiente de verba em campanhas pagas dentro dos próprios marketplaces (Product Ads, Shopee Ads, Amazon Ads) gerando picos de tráfego qualificado de alta intenção.",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#00D9FF]" />,
      title: "Estrutura Logística Decolada",
      desc: "Ativação certeira nas redes logísticas de alta performance (Coleta, Mercado Envios Flex, Coletas e Full). Reduza prazos de entrega e fretes à metade.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#8A2EFF]" />,
      title: "Integração Completa ERP",
      desc: "Interligamos seus estoques, notas fiscais eletrônicas e expedição com os principais sistemas automatizados do país (Bling, Tiny), prevenindo furos e retrabalho manual.",
    },
    {
      icon: <Settings className="w-6 h-6 text-[#00D9FF]" />,
      title: "Otimização Contínua Diária",
      desc: "Análise profunda de relatórios de concorrência, precificação dinâmica e auditoria de margens. Otimizamos para extrair o máximo de lucro líquido de cada venda.",
    },
  ];

  return (
    <section id="solucao" className="relative py-24 bg-[#050505]/90 overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-[30%] left-[-15%] w-96 h-96 bg-[#8A2EFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00D9FF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-blue">
            OPERAÇÃO COMPLETA "CHAVE NA MÃO"
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Você não precisa aprender marketplace. <br />
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] bg-clip-text text-transparent glow-text-blue">
              Nós fazemos absolutamente tudo por você.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            A Scalle X constrói, estrutura e otimiza sua operação completa dentro dos marketplaces — do cadastro no ERP até as estratégias avançadas de escala.
          </p>
        </div>

        {/* Pillars Bento-style Grid - combining standard column span for design variance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              id={`solution-pillar-${idx}`}
              className="p-6 rounded-2xl glass hover:glass-blue hover:scale-[1.02] border border-white/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 font-mono text-sm tracking-widest text-[#00D9FF] hover:border-[#00D9FF]/30 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{pillar.desc}</p>
              </div>

              {/* Step indicator in small mono code format */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>SCALLE X // PILLAR</span>
                <span className="text-[#00D9FF]/75">0{idx + 1}</span>
              </div>
            </div>
          ))}

          {/* Last item: The Promise Statement Box (making up a larger bento slot) */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0a0515] to-[#140624] border border-[#8A2EFF]/25 flex flex-col justify-between lg:col-span-2 shadow-[0_15px_30px_rgba(138,46,255,0.06)]">
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A2EFF]/10 border border-[#8A2EFF]/20 text-[10px] font-mono font-bold text-[#8A2EFF] uppercase tracking-wider mb-6 max-w-max">
                <ShieldCheck className="w-3.5 h-3.5" /> FOCO TOTAL NA SUA EMPRESA
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Você focado na produção ou estoque. <br />
                Nós blindamos e gerenciamos sua escala.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl font-light">
                Esqueça a busca estressante por funcionários qualificados e horas jogadas fora tentando entender os algoritmos que mudam semanalmente. Nossos assessores especialistas executam os processos em nível avançado.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-gray-300 font-extrabold tracking-wide uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8A2EFF]" /> Você produz. Nós escalamos seu lucro.
              </span>
              <div className="text-[10px] font-mono text-[#8A2EFF]">
                ESTRUTURA DE OPERAÇÃO COMPLETA // 100% MONITORADA
              </div>
            </div>
          </div>
        </div>

        {/* Big visual statement block */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-xl md:text-2xl italic font-serif text-gray-200 font-medium">
            "Você continua focado no seu negócio. <span className="text-[#00D9FF] font-sans font-extrabold not-italic tracking-wide glow-text-blue block sm:inline">Nós construímos sua máquina de vendas.</span>"
          </p>
        </div>
      </div>
    </section>
  );
}
