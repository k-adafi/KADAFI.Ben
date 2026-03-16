import { createContext, useContext } from 'react';

// Interfaces for our Context
interface LoaderContextType {
  loading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};
