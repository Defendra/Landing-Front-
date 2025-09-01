import { cn } from "@/lib/utils";

export function Section({
  title,
  subtitle,
  children,
  className,
  id,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("container py-16 md:py-24", className)}>
      {title && (
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-high">
            {title}
            </h2>
             {subtitle && (
                <p className="mt-4 text-text-mid md:text-xl/relaxed">{subtitle}</p>
            )}
        </div>
      )}
      <div className={cn(title || subtitle ? "mt-12" : "")}>{children}</div>
    </section>
  );
}
