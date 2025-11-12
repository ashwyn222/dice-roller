import { useState } from 'react';
import { motion } from 'motion/react';

interface DiceRollerProps {
  theme: {
    background: string;
    surface: string;
    dice: string;
    dots: string;
    text: string;
    accent: string;
  };
}

const diceDots = {
  1: [{ x: 50, y: 50 }],
  2: [
    { x: 30, y: 30 },
    { x: 70, y: 70 },
  ],
  3: [
    { x: 30, y: 30 },
    { x: 50, y: 50 },
    { x: 70, y: 70 },
  ],
  4: [
    { x: 30, y: 30 },
    { x: 70, y: 30 },
    { x: 30, y: 70 },
    { x: 70, y: 70 },
  ],
  5: [
    { x: 30, y: 30 },
    { x: 70, y: 30 },
    { x: 50, y: 50 },
    { x: 30, y: 70 },
    { x: 70, y: 70 },
  ],
  6: [
    { x: 30, y: 30 },
    { x: 70, y: 30 },
    { x: 30, y: 50 },
    { x: 70, y: 50 },
    { x: 30, y: 70 },
    { x: 70, y: 70 },
  ],
};

// Face configurations for standard dice
const faceRotations = [
  { face: 1, rotateX: 0, rotateY: 0 },       // Front
  { face: 6, rotateX: 0, rotateY: 180 },     // Back
  { face: 2, rotateX: 0, rotateY: -90 },     // Right
  { face: 5, rotateX: 0, rotateY: 90 },      // Left
  { face: 3, rotateX: -90, rotateY: 0 },     // Top
  { face: 4, rotateX: 90, rotateY: 0 },      // Bottom
];

interface DiceFaceProps {
  number: number;
  theme: {
    dice: string;
    dots: string;
    accent: string;
  };
  transform: string;
}

function DiceFace({ number, theme, transform }: DiceFaceProps) {
  const dots = diceDots[number as keyof typeof diceDots];

  return (
    <div
      className="absolute w-full h-full flex items-center justify-center"
      style={{
        transform,
        backfaceVisibility: 'hidden',
        background: theme.dice,
        border: `1px solid ${theme.accent}40`,
        boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -2px 8px rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Dots */}
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: '16%',
            height: '16%',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: 'translate(-50%, -50%)',
            background: theme.dots,
          }}
        />
      ))}
    </div>
  );
}

export function DiceRoller({ theme }: DiceRollerProps) {
  const [isRolling, setIsRolling] = useState(false);
  const [rotation, setRotation] = useState({ x: -30, y: 45 });
  const [currentFace, setCurrentFace] = useState(1);

  const rollDice = () => {
    if (isRolling) return;
    
    // Haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate([10, 20, 10]);
    }
    
    setIsRolling(true);

    // Generate random number (1-6)
    const result = Math.floor(Math.random() * 6) + 1;

    // Random spins for natural effect
    const spinsX = 4 + Math.floor(Math.random() * 3); // 4-6 spins
    const spinsY = 4 + Math.floor(Math.random() * 3); // 4-6 spins

    // Get target rotation for the result
    const targetFace = faceRotations.find(f => f.face === result)!;
    
    const newRotation = {
      x: targetFace.rotateX + (360 * spinsX),
      y: targetFace.rotateY + (360 * spinsY),
    };

    setRotation(newRotation);
    setCurrentFace(result);

    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  const diceSize = 'min(50vw, 200px)';

  return (
    <div className="flex items-center justify-center h-full">
      {/* 3D Dice Container */}
      <div
        onClick={rollDice}
        className="cursor-pointer select-none"
        style={{
          perspective: '1000px',
          width: diceSize,
          height: diceSize,
        }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{
            duration: isRolling ? 1 : 0,
            ease: isRolling ? [0.34, 1.56, 0.64, 1] : 'easeOut',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Cube with 6 faces */}
          <DiceFace
            number={1}
            theme={theme}
            transform={`rotateY(0deg) translateZ(calc(${diceSize} / 2))`}
          />
          <DiceFace
            number={6}
            theme={theme}
            transform={`rotateY(180deg) translateZ(calc(${diceSize} / 2))`}
          />
          <DiceFace
            number={2}
            theme={theme}
            transform={`rotateY(90deg) translateZ(calc(${diceSize} / 2))`}
          />
          <DiceFace
            number={5}
            theme={theme}
            transform={`rotateY(-90deg) translateZ(calc(${diceSize} / 2))`}
          />
          <DiceFace
            number={3}
            theme={theme}
            transform={`rotateX(90deg) translateZ(calc(${diceSize} / 2))`}
          />
          <DiceFace
            number={4}
            theme={theme}
            transform={`rotateX(-90deg) translateZ(calc(${diceSize} / 2))`}
          />
        </motion.div>
      </div>
    </div>
  );
}

