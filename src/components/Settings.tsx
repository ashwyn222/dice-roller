import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { Theme, themes } from '../App';
import { ThemeCard } from './ThemeCard';

interface SettingsProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  onBack: () => void;
}

export function Settings({ currentTheme, onThemeChange, onBack }: SettingsProps) {
  const currentThemeData = themes[currentTheme];
  const lightThemes: Theme[] = ['classic-white', 'sky', 'vibrant'];
  const metallicThemes: Theme[] = ['silver', 'gold', 'bronze'];
  const darkThemes: Theme[] = ['neon', 'matte', 'midnight'];

  return (
    <div 
      className="min-h-screen p-6"
      style={{ 
        background: currentThemeData.background,
        color: currentThemeData.text 
      }}
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="p-3 rounded-full mr-4"
            style={{
              background: currentThemeData.surface,
              color: currentThemeData.accent,
            }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <h1 style={{ color: currentThemeData.text }}>
            Settings
          </h1>
        </motion.div>

        {/* Light Themes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 
            className="mb-4 opacity-80"
            style={{ color: currentThemeData.text }}
          >
            Light Themes
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {lightThemes.map((themeKey, index) => (
              <ThemeCard
                key={themeKey}
                theme={themes[themeKey]}
                themeKey={themeKey}
                isSelected={currentTheme === themeKey}
                onSelect={() => onThemeChange(themeKey)}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Metallic Themes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 
            className="mb-4 opacity-80"
            style={{ color: currentThemeData.text }}
          >
            Metallic Themes
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {metallicThemes.map((themeKey, index) => (
              <ThemeCard
                key={themeKey}
                theme={themes[themeKey]}
                themeKey={themeKey}
                isSelected={currentTheme === themeKey}
                onSelect={() => onThemeChange(themeKey)}
                delay={0.5 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Dark Themes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 
            className="mb-4 opacity-80"
            style={{ color: currentThemeData.text }}
          >
            Dark Themes
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {darkThemes.map((themeKey, index) => (
              <ThemeCard
                key={themeKey}
                theme={themes[themeKey]}
                themeKey={themeKey}
                isSelected={currentTheme === themeKey}
                onSelect={() => onThemeChange(themeKey)}
                delay={0.8 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

