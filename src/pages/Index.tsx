
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import MoodSelector from "@/components/MoodSelector";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <MoodSelector />
      <Products />
      <Sustainability />
      <Trust />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
