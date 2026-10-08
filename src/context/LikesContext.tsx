import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type LikesContextValue = { likes: number; addLike: () => void };

const LikesContext = createContext<LikesContextValue | null>(null);

type LikesProviderProps = {
  children: ReactNode;
};

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState<number>(0);

  function addLike() {
    setLikes(prev => prev + 1);
  }

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes(): LikesContextValue {
  const context = useContext(LikesContext);
  if (context === null) {
    throw new Error('useLikes must be used inside <LikesProvider>');
  }
  return context;
}