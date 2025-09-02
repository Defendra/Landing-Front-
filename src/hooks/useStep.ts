"use client";

import { useState, useCallback } from 'react';

export const useStep = (initialStep: number, maxSteps: number) => {
  const [step, setStep] = useState(initialStep);

  const next = useCallback(() => {
    setStep((currentStep) => (currentStep < maxSteps ? currentStep + 1 : currentStep));
  }, [maxSteps]);

  const prev = useCallback(() => {
    setStep((currentStep) => (currentStep > 1 ? currentStep - 1 : currentStep));
  }, []);
  
  const goTo = useCallback((stepNumber: number) => {
    if (stepNumber >= 1 && stepNumber <= maxSteps) {
      setStep(stepNumber);
    }
  }, [maxSteps]);

  return { step, next, prev, goTo };
};
