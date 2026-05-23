import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Comparison from "./components/Comparison";
import Solution from "./components/Solution";
import Simulator from "./components/Simulator";
import HowItWorks from "./components/HowItWorks";
import CaseStudy from "./components/CaseStudy";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div 
      className="bg-[#050505] min-h-screen text-white overflow-hidden font-sans select-none antialiased selection:bg-[#00D9FF] selection:text-black relative"
      style={{
        backgroundImage: `radial-gradient(circle at 0% 0%, rgba(0,217,255,0.08) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(138,46,255,0.08) 0%, transparent 40%)`
      }}
    >
      {/* Decorative cyber ambient overlay effects across entire app view */}
      <div className="fixed inset-0 pointer-events-none z-40 border-[8px] border-[#050505]" />
      
      {/* Dynamic tech grain texture */}
      <div 
        className="fixed inset-0 opacity-[0.012] pointer-events-none z-50 duration-1000"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Structured Landing Page Sections */}
      <Header />
      
      <main id="landing-main-content">
        <Hero />
        <Problems />
        <Comparison />
        <Solution />
        <Simulator />
        <HowItWorks />
        <CaseStudy />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
