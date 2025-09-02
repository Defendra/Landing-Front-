"use client";

import { useStep } from "@/hooks/useStep";
import { Stepper, StepperItem, StepperLabel } from "@/components/ui/stepper";
import { Button } from "../ui/button";

const steps = [
    "Identidad",
    "Contacto",
    "Formación",
    "Documentos",
    "Confirmación",
    "Finalización"
];

export function RegisterWizard() {
    const { step, next, prev, goTo } = useStep(1, steps.length);

    return (
        <div className="min-h-dvh bg-background hero-gradient flex flex-col items-center p-4 sm:p-8">
            <div className="w-full max-w-4xl mx-auto space-y-8">
                 <div className="text-center">
                    <h1 className="text-3xl font-bold text-text-high">Regístrate como Guardia</h1>
                    <p className="text-text-mid">Completa tu perfil para validar tu información y habilitar tu acceso.</p>
                </div>

                <div className="sticky top-4 z-10 bg-card/50 backdrop-blur-lg p-4 rounded-xl border border-border/20">
                     <Stepper>
                        {steps.map((label, index) => (
                        <StepperItem key={label} active={step === index + 1} completed={step > index + 1}>
                             <StepperLabel>{label}</StepperLabel>
                        </StepperItem>
                        ))}
                    </Stepper>
                </div>

                <div className="bg-card/70 border border-border/20 rounded-2xl p-8 min-h-[400px]">
                    <h2 className="text-xl font-semibold mb-4">{steps[step - 1]}</h2>
                    <p>Contenido del paso {step} irá aquí.</p>
                    {/* Aquí irían los componentes de cada paso: <Step1Component />, <Step2Component />, etc. */}
                </div>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={prev} disabled={step === 1}>
                        Anterior
                    </Button>
                    {step < steps.length ? (
                        <Button onClick={next}>Siguiente</Button>
                    ) : (
                        <Button>Finalizar Registro</Button>
                    )}
                </div>
            </div>
        </div>
    );
}
