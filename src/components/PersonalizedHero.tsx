import { Button } from "@/components/ui/button";
import { useMood } from "@/contexts/MoodContext";

const PersonalizedHero = () => {
  const { currentMood, getMoodConfig } = useMood();
  const config = getMoodConfig();

  return (
    <section className={`pt-24 pb-16 px-4 bg-gradient-to-b ${config.bgGradient} transition-all duration-500`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {currentMood && config.image && (
            <div className="flex justify-center mb-6">
              <img 
                src={config.image} 
                alt={`${currentMood} mood`}
                className="w-24 h-24 object-contain animate-bounce"
              />
            </div>
          )}
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Period products
              <span className="block text-pink-500">that understand you.</span>
            </h1>
            
            {currentMood && (
              <div className={`p-4 rounded-lg bg-white/80 backdrop-blur-sm max-w-2xl mx-auto`}>
                <p className={`text-lg font-medium ${config.textColor}`}>
                  {config.message}
                </p>
              </div>
            )}
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sustainable, comfortable, and chemical-free sanitary pads 
              made from natural materials. Because you deserve better.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`text-lg px-12 py-6 ${currentMood ? config.buttonColor : 'bg-pink-500 hover:bg-pink-600'} text-white rounded-full transition-all duration-300`}
            >
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6 border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full">
              Learn More
            </Button>
          </div>

          
          <div className="pt-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-pink-500">100%</div>
                <div className="text-lg font-medium text-gray-900">Organic</div>
                <div className="text-sm text-gray-600">Natural materials only</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-pink-500">0</div>
                <div className="text-lg font-medium text-gray-900">Chemicals</div>
                <div className="text-sm text-gray-600">No harmful substances</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-pink-500">6</div>
                <div className="text-lg font-medium text-gray-900">Months</div>
                <div className="text-sm text-gray-600">To fully biodegrade</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Join thousands of women who have made the switch to healthier, 
              more sustainable period care. Free shipping on orders over $25.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedHero;
