
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(({ className, children, ...props }, ref) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      ref={ref}
      className={cn("flex items-start w-full relative", className)}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
             <div className="flex-1 h-px bg-border mt-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});
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
        <div className={cn(
            "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
            "bg-secondary text-secondary-foreground",
            {
              "border-primary ring-2 ring-primary/30 text-primary": active,
              "bg-primary border-primary text-primary-foreground": completed,
              "border-border": !active && !completed,
            }
        )}>
            {completed ? <Check className="w-5 h-5" /> : null}
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
          "text-xs text-center mt-2 absolute top-full w-24 text-muted-foreground font-medium",
          className
        )}
        {...props}
      />
    )
);
StepperLabel.displayName = "StepperLabel";


export { Stepper, StepperItem, StepperLabel };
