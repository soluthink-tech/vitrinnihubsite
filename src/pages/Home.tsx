import MouseBackground from "@/components/vitrinni/MouseBackground";
import Navigation from "@/components/vitrinni/Navigation";
import Hero from "@/components/vitrinni/Hero";
import Ecosystem from "@/components/vitrinni/Ecosystem";
import Features from "@/components/vitrinni/Features";
import HowItWorks from "@/components/vitrinni/HowItWorks";
import Testimonials from "@/components/vitrinni/Testimonials";
import FAQ from "@/components/vitrinni/FAQ";
import Contact from "@/components/vitrinni/Contact";
import Footer from "@/components/vitrinni/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MouseBackground />
      <Navigation />
      <Hero />
      <Ecosystem />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
