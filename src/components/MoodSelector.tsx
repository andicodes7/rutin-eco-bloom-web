
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useMood, MoodType } from '@/contexts/MoodContext';

const MoodSelector = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { setCurrentMood, getMoodConfig } = useMood();

  const moods: { type: MoodType; label: string; emoji: string }[] = [
    { type: 'energetic', label: 'Energetic', emoji: '⚡' },
    { type: 'calm', label: 'Calm', emoji: '😌' },
    { type: 'emotional', label: 'Emotional', emoji: '💭' },
    { type: 'happy', label: 'Happy', emoji: '😊' }
  ];

  const handleMoodSelect = (mood: MoodType) => {
    setCurrentMood(mood);
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 3000);
  };

  if (!isVisible) return null;

  const config = getMoodConfig();

  return (
    <div className={`py-8 px-4 bg-gradient-to-r ${config.bgGradient}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          How are you feeling today?
        </h3>
        <p className="text-gray-600 mb-6">
          Let us personalize your experience based on your current mood
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {moods.map((mood) => (
            <Card 
              key={mood.type}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
              onClick={() => handleMoodSelect(mood.type)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium text-gray-700">
                  {mood.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
