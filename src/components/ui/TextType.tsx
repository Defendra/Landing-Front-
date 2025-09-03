"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = ""
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const textElement = textRef.current;
    const cursorElement = cursorRef.current;
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    // Set up cursor blinking animation
    if (showCursor && cursorElement) {
      gsap.to(cursorElement, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    const typeText = () => {
      const currentText = text[currentTextIndex];
      
      if (!isDeleting) {
        // Typing forward
        textElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentText.length) {
          // Finished typing current text, pause before deleting
          setTimeout(() => {
            isDeleting = true;
            setTimeout(typeText, typingSpeed);
          }, pauseDuration);
          return;
        }
      } else {
        // Deleting backward
        textElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          // Finished deleting, move to next text
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % text.length;
        }
      }
      
      // Continue typing/deleting
      setTimeout(typeText, typingSpeed);
    };

    // Start the typing animation
    typeText();

    // Cleanup function
    return () => {
      if (cursorElement) {
        gsap.killTweensOf(cursorElement);
      }
    };
  }, [text, typingSpeed, pauseDuration, showCursor]);

  return (
    <span className={className}>
      <span ref={textRef}></span>
      {showCursor && (
        <span 
          ref={cursorRef}
          className="inline-block ml-1"
          aria-hidden="true"
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;