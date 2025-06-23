
import { useState } from "react";

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    {
      id: "emotional",
      name: "Emotional",
      image: "/lovable-uploads/5d76c42b-431b-474b-81dc-0e41e1b5034a.png",
      alt: "Orange heart showing emotional mood"
    },
    {
      id: "angry",
      name: "Angry", 
      image: "/lovable-uploads/5b913ed7-e53c-4785-9595-119e192a41a1.png",
      alt: "Red heart showing angry mood"
    },
    {
      id: "joy",
      name: "Joy",
      image: "/lovable-uploads/327e79c9-0e0d-4b3b-b8ee-1682e48623bd.png", 
      alt: "Pink heart showing joyful mood"
    },
    {
      id: "wow",
      name: "Wow",
      image: "/lovable-uploads/e678089a-ecc7-447a-bbcd-1f555d27a32a.png",
      alt: "Light pink heart showing wow mood"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          How's your mood today?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Select how you're feeling to get personalized recommendations for your cycle
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                selectedMood === mood.id ? 'scale-110' : ''
              }`}
              onClick={() => setSelectedMood(mood.id)}
            >
              <div className="relative group">
                <img
                  src={mood.image}
                  alt={mood.alt}
                  className={`w-20 h-20 md:w-24 md:h-24 mx-auto transition-opacity duration-300 ${
                    selectedMood === mood.id ? 'opacity-100' : 'opacity-70'
                  } group-hover:opacity-100`}
                />
                <div className="mt-3">
                  <span className={`text-lg font-medium transition-colors duration-300 ${
                    selectedMood === mood.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {mood.name}
                  </span>
                </div>
                {selectedMood === mood.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {selectedMood && (
          <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-primary font-medium">
              Great choice! We'll customize your experience based on your {selectedMood} mood.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodSelector;
