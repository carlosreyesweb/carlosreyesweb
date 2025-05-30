import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 font-mono text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl",
      h2: "scroll-m-20 text-3xl font-bold md:text-4xl lg:text-5xl",
      h3: "scroll-m-20 text-2xl font-bold md:text-3xl lg:text-4xl",
      h4: "scroll-m-20 text-xl font-bold md:text-2xl lg:text-3xl",
      p: "text-lg leading-7 md:text-xl",
      blockquote: "mt-6 border-l-2 pl-6 text-lg italic md:text-xl",
      ul: "my-6 ml-6 list-disc space-y-4 text-lg md:text-xl",
      ol: "my-6 ml-6 list-decimal space-y-4 text-lg md:text-xl",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-semibold md:text-xl",
      small: "font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  inlineCode: "code",
  ul: "ul",
  ol: "ol",
  small: "small",
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

export function Typography({
  className,
  variant,
  as,
  asChild,
  ...props
}: TypographyProps) {
  const Comp = asChild
    ? Slot
    : as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}
