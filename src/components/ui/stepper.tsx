
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between w-full max-w-2xl mx-auto",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Stepper.displayName = "Stepper";

interface StepperItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  completed?: boolean;
}

const StepperItem = React.forwardRef<HTMLDivElement, StepperItemProps>(
  ({ className, children, active, completed, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const label = childArray.find(child => (child as React.ReactElement).type === StepperLabel);

    return (
      <div ref={ref} className={cn("flex flex-col items-center relative", className)} {...props}>
        <div className="flex items-center">
            <div className={cn(
                "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
                "bg-secondary text-secondary-foreground",
                {
                "border-primary": active,
                "bg-primary text-primary-foreground": completed,
                "border-border": !active && !completed,
                }
            )}>
                {completed ? <Check className="w-5 h-5" /> : null}
            </div>
        </div>
        {label}
      </div>
    );
  }
);
StepperItem.displayName = "StepperItem";


const StepperLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => (
      <span
        ref={ref}
        className={cn(
          "text-xs text-center mt-2 absolute top-full w-24 text-muted-foreground",
          className
        )}
        {...props}
      />
    )
);
StepperLabel.displayName = "StepperLabel";


export { Stepper, StepperItem, StepperLabel };
