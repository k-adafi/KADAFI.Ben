import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Home from './pages/Home';
import VideoDemo from './pages/VideoDemo';
import { ReactNode } from 'react';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <div className={theme}>
      {children}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<VideoDemo />} />
        </Routes>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;