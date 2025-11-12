import { useState, useEffect } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DiceRoller } from './components/DiceRoller';
import { Settings } from './components/Settings';
import { PWAInstaller } from './components/PWAInstaller';

export const themes = {
  'classic-white': {
    name: 'Classic',
    type: 'light',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    surface: '#ffffff',
    dice: '#ffffff',
    dots: '#1a1a1a',
    text: '#1a1a1a',
    accent: '#4a90e2',
  },
  'sky': {
    name: 'Sky',
    type: 'light',
    background: 'linear-gradient(135deg, #e0f7ff 0%, #a7d8f0 100%)',
    surface: '#ffffff',
    dice: '#f0f9ff',
    dots: '#1e3a8a',
    text: '#1a1a1a',
    accent: '#0284c7',
  },
  'vibrant': {
    name: 'Vibrant',
    type: 'light',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    surface: '#ffffff',
    dice: '#ffffff',
    dots: '#667eea',
    text: '#ffffff',
    accent: '#fbbf24',
  },
  'silver': {
    name: 'Silver',
    type: 'metallic',
    background: 'linear-gradient(135deg, #52525b 0%, #71717a 100%)',
    surface: 'linear-gradient(145deg, #d4d4d8, #e4e4e7)',
    dice: 'radial-gradient(circle at 30% 30%, #f4f4f5, #d4d4d8 40%, #a1a1aa 80%, #71717a 100%)',
    dots: '#18181b',
    text: '#18181b',
    accent: '#6366f1',
  },
  'gold': {
    name: 'Gold',
    type: 'metallic',
    background: 'linear-gradient(135deg, #713f12 0%, #854d0e 100%)',
    surface: 'linear-gradient(145deg, #fbbf24, #fcd34d)',
    dice: 'radial-gradient(circle at 30% 30%, #fef3c7, #fde047 25%, #facc15 50%, #eab308 75%, #ca8a04 100%)',
    dots: '#451a03',
    text: '#451a03',
    accent: '#f59e0b',
  },
  'bronze': {
    name: 'Bronze',
    type: 'metallic',
    background: 'linear-gradient(135deg, #431407 0%, #78350f 100%)',
    surface: 'linear-gradient(145deg, #d97706, #f59e0b)',
    dice: 'radial-gradient(circle at 30% 30%, #fed7aa, #fb923c 25%, #ea580c 50%, #c2410c 75%, #92400e 100%)',
    dots: '#1c0a00',
    text: '#1c0a00',
    accent: '#ea580c',
  },
  'neon': {
    name: 'Neon',
    type: 'dark',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    surface: '#1e293b',
    dice: '#1e293b',
    dots: '#22d3ee',
    text: '#f1f5f9',
    accent: '#22d3ee',
  },
  'matte': {
    name: 'Matte',
    type: 'dark',
    background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
    surface: '#3f3f46',
    dice: '#71717a',
    dots: '#fafafa',
    text: '#fafafa',
    accent: '#a855f7',
  },
  'midnight': {
    name: 'Midnight',
    type: 'dark',
    background: 'linear-gradient(135deg, #0c4a6e 0%, #075985 100%)',
    surface: '#0e7490',
    dice: '#155e75',
    dots: '#fef08a',
    text: '#f0f9ff',
    accent: '#fde047',
  },
} as const;

export type Theme = keyof typeof themes;

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    // Load saved theme from localStorage, fallback to 'classic-white'
    const savedTheme = localStorage.getItem('diceRollerTheme') as Theme | null;
    return savedTheme && savedTheme in themes ? savedTheme : 'classic-white';
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Apply theme colors to body
    const theme = themes[currentTheme];
    document.body.style.background = theme.background;
    document.body.style.color = theme.text;
    
    // Save theme to localStorage
    localStorage.setItem('diceRollerTheme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: themes[currentTheme].background }}>
      <PWAInstaller />
      
      <AnimatePresence mode="wait">
        {!showSettings ? (
          <motion.div
            key="dice-roller"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-screen"
          >
            {/* Settings Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSettings(true)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full shadow-lg"
              style={{
                background: themes[currentTheme].surface,
                color: themes[currentTheme].accent,
              }}
            >
              <SettingsIcon className="w-6 h-6" />
            </motion.button>

            {/* Dice Roller */}
            <DiceRoller theme={themes[currentTheme]} />
          </motion.div>
        ) : (
          <motion.div
            key="settings"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <Settings
              currentTheme={currentTheme}
              onThemeChange={setCurrentTheme}
              onBack={() => setShowSettings(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

