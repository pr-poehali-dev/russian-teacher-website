import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Achievements />
    </div>
  );
};

export default Index;
