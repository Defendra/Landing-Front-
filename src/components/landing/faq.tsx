import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo se integra Defendra con mi infraestructura actual?",
    answer: "Nuestra plataforma está diseñada para una integración perfecta. Es compatible con los principales proveedores de nube (AWS, Azure, Google Cloud) y sistemas on-premise. Nuestro equipo de onboarding le guiará en cada paso del proceso.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos diferentes niveles de soporte según su plan. Todos los clientes tienen acceso a nuestro portal de documentación y soporte comunitario. Los planes Profesional y Enterprise incluyen soporte prioritario por email y teléfono, así como un manager de cuenta dedicado para clientes Enterprise.",
  },
  {
    question: "¿El precio es por usuario o por empresa?",
    answer: "Nuestros planes están basados en el número de 'activos' que desea monitorear (servidores, endpoints, aplicaciones, etc.) y en el nivel de servicio. Esto nos permite ofrecer precios flexibles que se escalan con su crecimiento.",
  },
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer: "La implementación básica se puede completar en menos de una hora. Para entornos más complejos, una implementación completa suele tardar entre 1 y 5 días hábiles. Nuestro objetivo es que obtenga valor de Defendra lo más rápido posible.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 dark:bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más comunes sobre Defendra.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
