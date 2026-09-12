import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import Benefits from "./components/sections/Benefits/Benefits";
import Services from "./components/sections/Services/Services";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import FAQ from "./components/sections/FAQ/FAQ";
import FinalCTA from "./components/sections/FinalCTA/FinalCTA";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

export default function App() {
  return (
    <>
      <a href="#inicio" className="skipLink">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
