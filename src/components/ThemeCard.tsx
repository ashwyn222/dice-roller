import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ThemeCardProps {
  theme: {
    name: string;
    background: string;
    surface: string;
    dice: string;
    dots: string;
    accent: string;
  };
  themeKey: string;
  isSelected: boolean;
  onSelect: () => void;
  delay: number;
}

export function ThemeCard({ theme, isSelected, onSelect, delay }: ThemeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onSelect}
      className="relative cursor-pointer rounded-2xl overflow-hidden shadow-lg"
      style={{
        aspectRatio: '1',
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-label={`Select ${theme.name} theme`}
      aria-pressed={isSelected}
    >
      {/* Theme Preview */}
      <div
        className="w-full h-full p-4 flex flex-col items-center justify-center relative"
        style={{
          background: theme.background,
        }}
      >
        {/* Mini Dice Preview */}
        <div
          className="w-12 h-12 rounded-xl shadow-md mb-2 flex items-center justify-center relative"
          style={{
            background: theme.dice,
          }}
        >
          {/* Simplified dice dots (showing 5) */}
          {[
            { x: '25%', y: '25%' },
            { x: '75%', y: '25%' },
            { x: '50%', y: '50%' },
            { x: '25%', y: '75%' },
            { x: '75%', y: '75%' },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: theme.dots,
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        {/* Theme Name */}
        <div
          className="px-2 py-1 rounded-lg text-xs text-center font-medium"
          style={{
            background: theme.surface,
            color: theme.dots,
          }}
        >
          {theme.name}
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: theme.accent,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Check className="w-4 h-4 text-white" />
          </motion.div>
        )}

        {/* Hover Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `2px solid ${theme.accent}`,
            opacity: isSelected ? 1 : 0,
          }}
          whileHover={{ opacity: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

