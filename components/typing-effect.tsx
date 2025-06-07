import React, { useState, useEffect, useCallback } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDeleting?: number;
  delayBeforeRetyping?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 75,
  delayBeforeDeleting = 1500,
  delayBeforeRetyping = 500,
  className = "text-6xl font-bold text-black"
}) => {
  // Current text being displayed
  const [currentText, setCurrentText] = useState("");
  // Current phase: 0 = typing, 1 = pause after typing, 2 = deleting, 3 = pause after deleting
  const [phase, setPhase] = useState(0);
  
  // Reset function to ensure we can restart the cycle
  const resetCycle = useCallback(() => {
    setCurrentText("");
    setPhase(0);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    // Phase 0: Typing
    if (phase === 0) {
      if (currentText.length < text.length) {
        timeoutId = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Move to pause phase after typing is complete
        setPhase(1);
      }
    }
    // Phase 1: Pause after typing
    else if (phase === 1) {
      timeoutId = setTimeout(() => {
        setPhase(2); // Move to deleting phase
      }, delayBeforeDeleting);
    }
    // Phase 2: Deleting
    else if (phase === 2) {
      if (currentText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to pause phase after deleting is complete
        setPhase(3);
      }
    }
    // Phase 3: Pause after deleting
    else if (phase === 3) {
      timeoutId = setTimeout(() => {
        resetCycle(); // Reset and start over
      }, delayBeforeRetyping);
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    currentText, 
    phase, 
    text, 
    typingSpeed, 
    deletingSpeed, 
    delayBeforeDeleting, 
    delayBeforeRetyping, 
    resetCycle
  ]);

  return (
    <div className={className}>
      {currentText}
      <span className="text-primary/60 ml-1 animate-pulse">|</span>
    </div>
  );
};

export default TypingEffect;