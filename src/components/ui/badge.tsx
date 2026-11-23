import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "verified" | "preview" | "heritage" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";

  const variantStyles = {
    default: "bg-stone-100 text-stone-800 border border-stone-200",
    verified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    preview: "bg-amber-50 text-amber-800 border border-amber-200",
    heritage: "bg-orange-50 text-orange-800 border border-orange-200",
    accent: "bg-teal-50 text-teal-800 border border-teal-200",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
