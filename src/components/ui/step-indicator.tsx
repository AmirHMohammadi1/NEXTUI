// components/ui/step-indicator.tsx
import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  className = ''
}) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`text-sm mt-2 text-center ${
                index <= currentStep
                  ? 'text-primary font-medium'
                  : 'text-gray-500'
              }`}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          {steps[currentStep].title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {steps[currentStep].description}
        </p>
      </div>
    </div>
  );
};