
import Header from "@/components/Header";
import PersonalizedHero from "@/components/PersonalizedHero";
import MoodSelector from "@/components/MoodSelector";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Empowerment from "@/components/Empowerment";
import Sustainability from "@/components/Sustainability";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { MoodProvider } from "@/contexts/MoodContext";

const Index = () => {
  return (
    <MoodProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <MoodSelector />
        <PersonalizedHero />
        <Products />
        <Benefits />
        <Empowerment />
        <Sustainability />
        <Trust />
        <CallToAction />
        <Footer />
      </div>
    </MoodProvider>
  );
};

export default Index;
