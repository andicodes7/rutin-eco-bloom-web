
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useMood, MoodType } from '@/contexts/MoodContext';

const MoodSelector = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { setCurrentMood, getMoodConfig } = useMood();

  const moods: { type: MoodType; label: string; image: string }[] = [
    { type: 'emotional', label: 'Emotional', image: '/lovable-uploads/d454777d-55bd-4c0e-9120-0de635fe9387.png' },
    { type: 'angry', label: 'Angry', image: '/lovable-uploads/b585835b-a259-48ef-b75d-ae13b5ebd0ef.png' },
    { type: 'joy', label: 'Joy', image: '/lovable-uploads/879ee869-60cc-4608-b78a-a2ccf80687ed.png' },
    { type: 'wow', label: 'Wow', image: '/lovable-uploads/84135151-2689-4cb8-801c-c1536329c5bf.png' }
  ];

  const handleMoodSelect = (mood: MoodType) => {
    setCurrentMood(mood);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 3000);
  };

  if (!isVisible) return null;

  const config = getMoodConfig();

  return (
    <div className={`py-12 px-4 bg-gradient-to-r ${config.bgGradient}`}>
      <div className="container mx-auto max-w-5xl text-center">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">
          How's your cycle mood today?
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Click on the heart that represents how you're feeling
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {moods.map((mood) => (
            <Card 
              key={mood.type}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-110 bg-white/80 backdrop-blur-sm border-2 border-white/50"
              onClick={() => handleMoodSelect(mood.type)}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img 
                    src={mood.image} 
                    alt={mood.label}
                    className="w-16 h-16 mx-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
                <div className="text-base font-semibold text-gray-700">
                  {mood.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Your selection helps us personalize your experience
        </p>
      </div>
    </div>
  );
};

export default MoodSelector;
