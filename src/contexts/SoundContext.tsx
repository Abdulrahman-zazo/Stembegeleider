import React, { createContext, useState, type ReactNode, useCallback, useRef } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (src: string) => void;
  playSounds: (srcs: string[]) => Promise<void>;
  stopAllSounds: () => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const currentAudiosRef = useRef<HTMLAudioElement[]>([]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const stopAllSounds = useCallback(() => {
    currentAudiosRef.current.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    currentAudiosRef.current = [];
  }, []);

  const playSound = useCallback(
    (src: string) => {
      if (!soundEnabled) return;
      try {
        const audio = new Audio(src);
        audio.play().catch(() => {
          // Silently handle errors
        });
        currentAudiosRef.current.push(audio);
        // Clean up finished audios
        audio.onended = () => {
          currentAudiosRef.current = currentAudiosRef.current.filter((a) => a !== audio);
        };
      } catch {
        // Silently handle errors
      }
    },
    [soundEnabled]
  );

  const playSounds = useCallback(
    async (srcs: string[]): Promise<void> => {
      if (!soundEnabled) return;
      for (const src of srcs) {
        await new Promise<void>((resolve) => {
          try {
            const audio = new Audio(src);
            audio.onended = () => {
              currentAudiosRef.current = currentAudiosRef.current.filter((a) => a !== audio);
              resolve();
            };
            audio.play().catch(() => resolve());
            currentAudiosRef.current.push(audio);
          } catch {
            resolve();
          }
        });
        // Delay between sounds
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    },
    [soundEnabled]
  );

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound, playSounds, stopAllSounds }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = React.useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within SoundProvider');
  }
  return context;
};
