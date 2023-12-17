import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import Link, { LinkProps } from "next/link"
import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Button, buttonVariants } from "./ui/button"

interface LinkButtonProps
  extends VariantProps<typeof buttonVariants>,
    LinkProps,
    Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> {
  href: string
  className?: string
  children?: ReactNode
}
export function LinkButton({
  className,
  children,
  variant,
  size,
  ...props
}: LinkButtonProps) {
  return (
    <Button asChild className={cn("", className)} variant={variant} size={size}>
      <Link {...props}>{children}</Link>
    </Button>
  )
}
