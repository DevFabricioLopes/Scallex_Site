import React, { useState } from "react";
import { Send, PhoneCall, ShieldCheck, Mail, User, Building2, ChevronRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    niche: "Pet Shop",
    revenue: "Até R$ 20.000",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const niches = [
    "Pet Shop", "Vestuário & Moda", "Autopeças & Acessórios", 
    "Casa & Decoração", "Cosméticos", "Eletrônicos", "Outros"
  ];

  const revenues = [
    "Até R$ 20.000", "Entre R$ 20k e R$ 50k", 
    "Entre R$ 50k e R$ 100k", "Acima de R$ 100.000"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.businessName) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Save locally for diagnostic telemetry
    const localLeads = JSON.parse(localStorage.getItem("scalle_x_leads") || "[]");
    localLeads.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    });
    localStorage.setItem("scalle_x_leads", JSON.stringify(localLeads));

    setIsSubmitted(true);

    // Deep link redirect to Whatsapp (48) 99157-5656
    const delay = setTimeout(() => {
      const whatsAppNumber = "5548991575656";
      const leadMessage = `Olá! Quero agendar meu diagnóstico com a Scalle X.
Meus dados:
- Nome: ${formData.name}
- Empresa: ${formData.businessName}
- WhatsApp: ${formData.phone}
- Nicho: ${formData.niche}
- Faturamento Atual: ${formData.revenue}`;
      
      const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(leadMessage)}`;
      window.open(whatsappUrl, "_blank", "referrer");
    }, 1500);

    return () => clearTimeout(delay);
  };

  return (
    <section id="cta-contact" className="relative py-14 bg-[#050505] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient from-[#8A2EFF]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#8A2EFF]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0c0612] to-[#04020a] border border-[#00D9FF]/20 rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,217,255,0.06)] relative overflow-hidden">
          {/* Neon side strips */}
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#00D9FF]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Block */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#00D9FF] font-mono text-xs font-bold tracking-widest uppercase block glow-text-blue">
                VAGAS LIMITADAS PARA ESTE MÊS
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-white tracking-tight leading-tight">
                Sua empresa está pronta para escalar?
              </h2>
              <p className="text-gray-400 text-base font-light leading-relaxed max-w-md">
                Enquanto você pensa, alguém já está vendendo no seu lugar.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3">
                <p className="text-xs font-mono text-[#8A2EFF] uppercase tracking-wider font-bold">
                  Sua Estrutura Operacional Completa:
                </p>
                <div className="space-y-2">
                  {[
                    "Diagnóstico gratuito e estudo de mercado",
                    "Integração tecnológica total e SEO avançado",
                    "Gestão qualificada por assessores seniors"
                  ].map((item, id) => (
                    <div key={id} className="flex items-center gap-2 text-sm text-gray-300 font-light">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#00D9FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directly clickable direct whatsapp block */}
              <div className="pt-2">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Contato Direto</p>
                <a
                  href="https://wa.me/5548991575656?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20a%20Scalle%20X%20para%20escalar%20meu%20faturamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg font-extrabold text-[#00D9FF] hover:text-[#8A2EFF] mt-2 group transition-colors"
                >
                  <PhoneCall className="w-5 h-5 text-[#00D9FF] animate-pulse group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: (48) 99157-5656</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Interactive Form Box */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl glass border border-white/10 shadow-[0_15px_30px_rgba(5,5,5,0.7)]">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Lead Estruturado!</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Seu agendamento de diagnóstico gratuito foi computado localmente. Estamos te redirecionando para fechar com nosso assessor no WhatsApp...
                    </p>
                    <div className="pt-4">
                      <a
                        href={`https://wa.me/5548991575656?text=${encodeURIComponent("Olá! Enviei meus dados pelo site e quero meu Diagnóstico Gratuito.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#00D9FF] hover:underline"
                      >
                        Não foi redirecionado? Clique aqui
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-extrabold text-white mb-4 tracking-tight">
                      Agendar Diagnóstico Gratuito
                    </h3>

                    {/* Name input */}
                    <div>
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1.5 font-bold">
                        Seu Nome *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Digite seu nome completo"
                          className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition-all"
                        />
                      </div>
                    </div>

                    {/* Business Name input */}
                    <div>
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1.5 font-bold">
                        Nome da sua Empresa *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500">
                          <Building2 className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Ex: Lojas Pet Silva"
                          className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition-all"
                        />
                      </div>
                    </div>

                    {/* WhatsApp/Phone Input */}
                    <div>
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1.5 font-bold">
                        WhatsApp p/ Contato *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs font-bold leading-none">
                          BR
                        </span>
                        <input
                          type="text"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(48) 99157-5656"
                          className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] transition-all"
                        />
                      </div>
                    </div>

                    {/* Segment and Revenue selects grouped */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1.5 font-bold">
                          Segmento
                        </label>
                        <select
                          name="niche"
                          value={formData.niche}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 px-3 text-xs text-white focus:outline-none focus:border-[#00D9FF] transition-all"
                        >
                          {niches.map((n, i) => (
                            <option key={i} value={n} className="bg-[#050505] text-white">
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1.5 font-bold">
                          Faturamento Físico
                        </label>
                        <select
                          name="revenue"
                          value={formData.revenue}
                          onChange={handleInputChange}
                          className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 px-3 text-xs text-white focus:outline-none focus:border-[#00D9FF] transition-all"
                        >
                          {revenues.map((v, i) => (
                            <option key={i} value={v} className="bg-[#050505] text-white">
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit-diagnostic-btn"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#8A2EFF] text-black font-extrabold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(0,217,255,0.4)] transition-all cursor-pointer hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <span>VAGAS LIMITADAS — AGENDAR AGORA</span> 
                      <Send className="w-4 h-4" />
                    </button>

                    <div className="text-center pt-2">
                      <p className="text-[9px] font-mono text-gray-500 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-gray-500" /> Nós protegemos seus dados. LGPD em vigor.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
