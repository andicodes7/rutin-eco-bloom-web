
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type MoodType = 'emotional' | 'angry' | 'joy' | 'wow';

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
  emotional: {
    bgGradient: 'from-red-50 to-pink-50',
    textColor: 'text-red-500',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    image: '/lovable-uploads/d454777d-55bd-4c0e-9120-0de635fe9387.png',
    message: 'We understand those emotional days. Extra comfort when you need it most.'
  },
  angry: {
    bgGradient: 'from-orange-50 to-red-50',
    textColor: 'text-orange-600',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    image: '/lovable-uploads/b585835b-a259-48ef-b75d-ae13b5ebd0ef.png',
    message: 'Feeling frustrated? Our reliable protection has your back during tough moments.'
  },
  joy: {
    bgGradient: 'from-pink-50 to-rose-50',
    textColor: 'text-pink-500',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    image: '/lovable-uploads/879ee869-60cc-4608-b78a-a2ccf80687ed.png',
    message: 'Feeling great? Our products keep you confident and comfortable all day!'
  },
  wow: {
    bgGradient: 'from-pink-50 to-purple-50',
    textColor: 'text-pink-600',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    image: '/lovable-uploads/84135151-2689-4cb8-801c-c1536329c5bf.png',
    message: 'Amazing energy today! Let our premium products match your vibes.'
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
