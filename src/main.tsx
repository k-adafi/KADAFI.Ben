import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { LoaderProvider } from './context/LoaderContext.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
