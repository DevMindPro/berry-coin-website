import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Ecosystem from './components/Ecosystem';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Security from './components/Security';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-20 right-4 md:top-20 md:right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
      </button>

      <Header />
      <Hero />
      <Vision />
      <Ecosystem />
      <Tokenomics />
      <Roadmap />
      <Security />
      <Footer />
    </div>
  );
}

export default App;