
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MoodType = 'energetic' | 'calm' | 'emotional' | 'happy';

interface MoodContextType {
  currentMood: MoodType | null;
  setCurrentMood: (mood: MoodType) => void;
  getMoodConfig: () => MoodConfig;
}

interface MoodConfig {
  bgGradient: string;
  textColor: string;
  buttonColor: string;
  image: string;
  message: string;
}

const moodConfigs: Record<MoodType, MoodConfig> = {
  energetic: {
    bgGradient: 'from-orange-50 to-yellow-50',
    textColor: 'text-orange-600',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    image: '/lovable-uploads/8df6f384-08d7-4d7f-9291-cf8ae33cc86f.png',
    message: 'Feeling energetic? Our active comfort pads are perfect for your busy day!'
  },
  calm: {
    bgGradient: 'from-blue-50 to-indigo-50',
    textColor: 'text-blue-600',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    image: '/lovable-uploads/e9f429d5-7e41-49e5-b86d-8ebb6623aa35.png',
    message: 'Take a moment for yourself. Our gentle formula provides peaceful comfort.'
  },
  emotional: {
    bgGradient: 'from-red-50 to-pink-50',
    textColor: 'text-red-500',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    image: '/lovable-uploads/7957a409-d5c2-4dfa-add3-9e91ae11e831.png',
    message: 'We understand those tough days. Extra comfort when you need it most.'
  },
  happy: {
    bgGradient: 'from-pink-50 to-rose-50',
    textColor: 'text-pink-500',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    image: '/lovable-uploads/6aa1a515-34fe-4abb-a322-99f015701ef7.png',
    message: 'Celebrating feeling great! Our products keep you confident all day.'
  }
};

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [currentMood, setCurrentMood] = useState<MoodType | null>(null);

  const getMoodConfig = (): MoodConfig => {
    if (!currentMood) {
      return {
        bgGradient: 'from-pink-50 to-white',
        textColor: 'text-gray-900',
        buttonColor: 'bg-pink-500 hover:bg-pink-600',
        image: '',
        message: 'How are you feeling today?'
      };
    }
    return moodConfigs[currentMood];
  };

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood, getMoodConfig }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (context === undefined) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};
