import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric/50 disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-electric text-white hover:bg-brand-glow/90",
        secondary: "bg-white/10 text-ink-900 hover:bg-white/15",
        ghost: "bg-transparent text-ink-800 hover:text-white",
        outline: "border border-white/20 text-ink-900 hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & { href?: string };

export function Button({ className, variant, size, href, ...props }: Props) {
  const cls = cn(styles({ variant, size }), className);
  if (href) return (
    <Link href={href ?? ''} className={cls}>
      {props.children}
    </Link>
  );
  return <button className={cls} {...props} />;
}
