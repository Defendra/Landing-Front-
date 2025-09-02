import GuardLoginForm from "@/components/guard/GuardLoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GuardLoginPage() {
    return (
        <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-background hero-gradient p-4">
            <Card className="w-full max-w-md bg-card/70 backdrop-blur-sm border-border/20">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold font-headline text-text-high">Bienvenido, Guardia</CardTitle>
                    <CardDescription>Inicia sesión para continuar con tus turnos, minutas y relevos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <GuardLoginForm />
                </CardContent>
            </Card>
        </div>
    );
}
