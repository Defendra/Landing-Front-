
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stepper, StepperItem, StepperLabel } from '@/components/ui/stepper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, FileUp, CheckCircle } from 'lucide-react';

const steps = [
  "Información Personal",
  "Verificación de Identidad",
  "Datos de Contacto",
  "Habilidades y Licencias",
  "Equipamiento Propio",
  "Dotación y Tallas",
  "Información de Nómina",
  "Revisión y Consentimiento"
];

export default function GuardOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-card flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-background">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Registro de Guardia</CardTitle>
          <CardDescription className="text-muted-foreground">Crea tu perfil en pocos pasos y empieza a trabajar con nosotros.</CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep < steps.length ? (
            <>
              <Stepper className="mb-8">
                {steps.map((label, index) => (
                  <StepperItem key={label} active={index === currentStep} completed={index < currentStep}>
                    <StepperLabel>{label}</StepperLabel>
                  </StepperItem>
                ))}
              </Stepper>

              <div className="mt-8">
                {currentStep === 0 && <Step1 />}
                {currentStep === 1 && <Step2 />}
                {currentStep === 2 && <Step3 />}
                {currentStep === 3 && <Step4 />}
                {currentStep === 4 && <Step5 />}
                {currentStep === 5 && <Step6 />}
                {currentStep === 6 && <Step7 />}
                {currentStep === 7 && <Step8 />}
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>Anterior</Button>
                <Button onClick={nextStep} className="bg-accent hover:bg-destructive text-accent-foreground">
                  {currentStep === steps.length - 1 ? "Finalizar Registro" : "Siguiente"}
                </Button>
              </div>
            </>
          ) : (
            <ConfirmationStep />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

const Step1 = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Información Personal</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">Nombres</Label>
        <Input id="firstName" placeholder="Tus nombres" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Apellidos</Label>
        <Input id="lastName" placeholder="Tus apellidos" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="docType">Tipo de Documento</Label>
        <Select>
          <SelectTrigger><SelectValue placeholder="Selecciona un tipo" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="cc">Cédula de Ciudadanía</SelectItem>
            <SelectItem value="ce">Cédula de Extranjería</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="docNumber">Número de Documento</Label>
        <Input id="docNumber" placeholder="Tu número de documento" />
      </div>
    </div>
  </div>
);

const Step2 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Verificación de Identidad</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center gap-4">
                <p className="font-medium text-center">Captura de Selfie</p>
                <Avatar className="w-40 h-40 border-dashed border-2">
                    <AvatarImage src="https://placehold.co/160x160.png" data-ai-hint="person selfie" />
                    <AvatarFallback><Camera className="w-10 h-10 text-muted-foreground" /></AvatarFallback>
                </Avatar>
                <Button variant="outline"><Camera className="mr-2" /> Tomar Foto</Button>
            </div>
            <div className="flex flex-col items-center gap-4">
                 <p className="font-medium text-center">Documento de Identidad</p>
                <div className="space-y-4 w-full">
                    <Button variant="outline" className="w-full justify-start gap-2"><FileUp />Subir Anverso</Button>
                    <Button variant="outline" className="w-full justify-start gap-2"><FileUp />Subir Reverso</Button>
                </div>
            </div>
        </div>
    </div>
);

const Step3 = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4">Datos de Contacto</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="tu@email.com" />
      </div>
       <div className="space-y-2">
        <Label htmlFor="emailConfirm">Confirmar Email</Label>
        <Input id="emailConfirm" type="email" placeholder="confirma tu@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Dirección</Label>
        <Input id="address" placeholder="Tu dirección de residencia" />
      </div>
    </div>
  </div>
);

const Step4 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Habilidades y Licencias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-2">
                <Label htmlFor="course">Curso de Vigilancia</Label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Selecciona un curso" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fundamentacion">Fundamentación</SelectItem>
                        <SelectItem value="reentrenamiento">Reentrenamiento</SelectItem>
                        <SelectItem value="supervisor">Supervisor</SelectItem>
                        <SelectItem value="operador_medios">Op. Medios Tecnológicos</SelectItem>
                    </SelectContent>
                </Select>
                 <Button variant="outline" className="w-full justify-start gap-2 mt-2"><FileUp />Adjuntar Soporte</Button>
            </div>
            <div className="space-y-2">
                <Label htmlFor="license">Licencia de Conducción</Label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Selecciona una licencia" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="a2">A2 (Moto)</SelectItem>
                        <SelectItem value="b1">B1 (Carro)</SelectItem>
                         <SelectItem value="c1">C1 (Público)</SelectItem>
                        <SelectItem value="no">No tengo</SelectItem>
                    </SelectContent>
                </Select>
                 <Button variant="outline" className="w-full justify-start gap-2 mt-2"><FileUp />Adjuntar Soporte</Button>
            </div>
        </div>
    </div>
);

const Step5 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Equipamiento Propio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="space-y-3">
                <Label>Vehículo Propio</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox id="moto" />
                    <Label htmlFor="moto">Moto</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="carro" />
                    <Label htmlFor="carro">Carro</Label>
                </div>
            </div>
             <div className="space-y-3">
                <Label>Arma Propia</Label>
                <div className="flex items-center space-x-2">
                    <Checkbox id="arma" />
                    <Label htmlFor="arma">Tengo arma propia con permiso</Label>
                </div>
                 <Button variant="outline" className="w-full justify-start gap-2 mt-2"><FileUp />Adjuntar Permiso</Button>
            </div>
        </div>
    </div>
);

const Step6 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Dotación y Tallas</h3>
        <p className="text-muted-foreground mb-4 text-sm">Ingresa tus tallas para el uniforme y equipamiento.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="space-y-2">
                <Label htmlFor="shirt">Camisa</Label>
                <Input id="shirt" placeholder="Ej: M" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="pants">Pantalón</Label>
                <Input id="pants" placeholder="Ej: 32" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="boots">Botas</Label>
                <Input id="boots" placeholder="Ej: 41" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="vest">Chaleco</Label>
                <Input id="vest" placeholder="Ej: L" />
            </div>
        </div>
    </div>
);

const Step7 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Información de Nómina</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="bank">Banco</Label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Selecciona tu banco" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="bancolombia">Bancolombia</SelectItem>
                        <SelectItem value="davivienda">Davivienda</SelectItem>
                        <SelectItem value="bbva">BBVA</SelectItem>
                        <SelectItem value="banco_bogota">Banco de Bogotá</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label htmlFor="accountType">Tipo de Cuenta</Label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Selecciona el tipo" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ahorros">Ahorros</SelectItem>
                        <SelectItem value="corriente">Corriente</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2 md:col-span-2">
                <Label htmlFor="accountNumber">Número de Cuenta</Label>
                <Input id="accountNumber" placeholder="Tu número de cuenta bancaria" />
            </div>
        </div>
    </div>
);

const Step8 = () => (
    <div>
        <h3 className="font-semibold text-lg mb-4">Revisión y Consentimiento</h3>
        <p className="text-muted-foreground mb-4">Por favor, revisa que toda tu información sea correcta antes de finalizar.</p>
        <div className="max-h-60 overflow-y-auto border rounded-md p-4 bg-card space-y-2">
            <p><strong>Nombres:</strong> John Doe</p>
            <p><strong>Documento:</strong> CC 123456789</p>
            <p><strong>Email:</strong> john.doe@email.com</p>
            <p><strong>Curso:</strong> Reentrenamiento</p>
            <p>...</p>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
                Acepto los <a href="#" className="underline">términos y condiciones</a> y la <a href="#" className="underline">política de tratamiento de datos</a>.
            </Label>
        </div>
    </div>
);

const ConfirmationStep = () => (
    <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">¡Gracias! Tu perfil ha sido enviado.</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
            Nuestro equipo lo revisará y validará la información pronto. Te notificaremos por correo electrónico cuando tu cuenta esté activa y puedas iniciar sesión.
        </p>
    </div>
);
