
import { Button } from "@/components/ui/button";
import { useMood } from "@/contexts/MoodContext";

const PersonalizedHero = () => {
  const { currentMood, getMoodConfig } = useMood();
  const config = getMoodConfig();

  return (
    <section className={`pt-20 pb-16 px-4 bg-gradient-to-b ${config.bgGradient} transition-all duration-500`}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Period care that 
              <span className="block text-pink-500">gets you.</span>
            </h1>
            
            {currentMood && (
              <div className={`p-6 rounded-2xl bg-white/90 backdrop-blur-sm max-w-2xl mx-auto shadow-lg`}>
                <p className={`text-xl font-medium ${config.textColor}`}>
                  {config.message}
                </p>
              </div>
            )}
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Clean, comfortable, and conscious period products made with your body and the planet in mind.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`text-lg px-12 py-6 ${currentMood ? config.buttonColor : 'bg-pink-500 hover:bg-pink-600'} text-white rounded-full transition-all duration-300 font-semibold`}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-6 border-2 border-pink-400 text-pink-600 hover:bg-pink-50 rounded-full font-semibold"
            >
              Learn More
            </Button>
          </div>

          <div className="pt-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-pink-500">100%</div>
                <div className="text-lg font-semibold text-gray-900">Organic Cotton</div>
                <div className="text-sm text-gray-600">Natural materials only, no compromises</div>
              </div>
              <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-pink-500">0</div>
                <div className="text-lg font-semibold text-gray-900">Harmful Chemicals</div>
                <div className="text-sm text-gray-600">Pure and safe for your body</div>
              </div>
              <div className="text-center space-y-3 p-6 bg-white/60 rounded-2xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-pink-500">12hr</div>
                <div className="text-lg font-semibold text-gray-900">Protection</div>
                <div className="text-sm text-gray-600">All-day confidence and comfort</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Join thousands of women who've made the switch to healthier, 
              more sustainable period care. Free shipping on orders over $35.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedHero;
