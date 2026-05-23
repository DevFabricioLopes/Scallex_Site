import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, AlertCircle, Info, ThumbsUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  badge: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList: FAQItem[] = [
    {
      question: '"Marketplace é caro" (As taxas vão comer meu lucro?)',
      badge: "INTELIGÊNCIA FINANCEIRA",
      answer: "Pelo contrário. Pagar comissão de 10% a 18% APENAS sobre as vendas que realmente acontecem é infinitamente mais rentável do que pagar altos aluguéis fixos comerciais de shoppings ou ruas movimentadas, custos de energia, equipe ociosa e decoração sem qualquer garantia de venda. Além disso, a Scalle X realiza auditoria de margens cirúrgica: estruturamos sua precificação considerando impostos e taxas dos canais para garantir que você tenha lucro líquido real e saudável no final de cada mês.",
    },
    {
      question: '"Não sei como funciona" (Tenho medo da complexidade técnica)',
      badge: "DELEGAÇÃO COMPLETA",
      answer: "É exatamente por isso que nossa assessoria existe. Você e sua equipe NÃO precisam reaprender ou perder centenas de horas decifrando algoritmos dinâmicos de marketplaces. A Scalle X cuida de toda a configuração do ERP, SEO de anúncios, gestão de tráfego (Ads), e otimização logística diária. O seu trabalho resume-se a receber os pedidos já faturados e etiquetados pelo nosso sistema e disponibilizá-los na transportadora (coleta oficial). Nós somos o seu departamento de e-commerce invisível de alta performance.",
    },
    {
      question: '"Funciona pro meu nicho?" (Será que meu produto atrai compradores?)',
      badge: "COMPATIBILIDADE AMPLA",
      answer: "A internet é o maior shopping center do planeta. Nichos como Vestuário, Pet Shop, Autopeças/Acessórios automotivos, Casa & Decoração, Beleza, Suplementos e Eletrodomésticos faturam BILHÕES anualmente nos marketplaces parceiros. Se o seu produto resolve uma necessidade, tem apelo comercial ou concorrência física local, ele possui espaço garantido no digital de escala nacional. Realizaremos uma auditoria de potencial gratuita para apresentar o volume exato do seu nicho antes de iniciar a operação.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#050505]/95 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8A2EFF] font-mono text-xs font-bold tracking-widest uppercase mb-3 block glow-text-purple">
            OBJEÇÕES RESOLVIDAS COM MATEMÁTICA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Suas dúvidas. <br />
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] bg-clip-text text-transparent glow-text-blue">
              Respondidas de forma transparente.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Elimine as falsas amarras mentais que estão atrasando o crescimento da sua marca e entenda por que os marketplaces são a melhor escolha para expandir seu varejo físico.
          </p>
        </div>

        {/* FAQs list wrapper */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0b0615] border-[#8A2EFF]/35 shadow-[0_0_15px_rgba(138,46,255,0.06)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                }`}
              >
                {/* Header Toggle Clickable */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 transition-colors focus:outline-none"
                >
                  <div className="space-y-1">
                    <span 
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-widest block max-w-max leading-none ${
                        isOpen ? "bg-[#8A2EFF]/20 text-[#8A2EFF]" : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight pt-1">
                      {item.question}
                    </h3>
                  </div>
                  <div className="p-1 rounded bg-white/5 mt-1 shrink-0 text-gray-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#00D9FF]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Animated Body Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-sm text-gray-300 leading-relaxed font-light">
                    {item.answer}
                    
                    {/* Inline trust icon proof */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-gray-400">
                      <ThumbsUp className="w-3.5 h-3.5 text-[#00D9FF]" />
                      <span>Estruturação cirúrgica realizada pela Scalle X Assessoria.</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
