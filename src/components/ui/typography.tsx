import { cn } from "@/lib/utils";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

interface H1Props extends ComponentPropsWithoutRef<"h1"> {}
const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
        robotoMono.className,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
);
H1.displayName = "H1";

interface H2Props extends ComponentPropsWithoutRef<"h2"> {}
const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ children, className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-black tracking-tight transition-colors first:mt-0",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
);
H2.displayName = "H2";

interface H3Props extends ComponentPropsWithoutRef<"h3"> {}
const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ children, className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "scroll-m-20 text-2xl font-black tracking-tight",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
);
H3.displayName = "H3";

interface H4Props extends ComponentPropsWithoutRef<"h4"> {}
const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ children, className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "scroll-m-20 text-xl font-black tracking-tight",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
);
H4.displayName = "H4";

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {}
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
);
Paragraph.displayName = "Paragraph";

interface BlockquoteProps extends ComponentPropsWithoutRef<"blockquote"> {}
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ children, className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", roboto.className, className)}
      {...props}
    >
      {children}
    </blockquote>
  )
);
Blockquote.displayName = "Blockquote";

interface UlProps extends ComponentPropsWithoutRef<"ul"> {}
const Ul = forwardRef<HTMLUListElement, UlProps>(
  ({ children, className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "my-6 ml-6 list-disc [&>li]:mt-2",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
);
Ul.displayName = "Ul";

interface OlProps extends ComponentPropsWithoutRef<"ol"> {}
const Ol = forwardRef<HTMLOListElement, OlProps>(
  ({ children, className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "my-6 ml-6 list-decimal [&>li]:mt-2",
        roboto.className,
        className
      )}
      {...props}
    >
      {children}
    </ol>
  )
);
Ol.displayName = "Ol";

interface CodeProps extends ComponentPropsWithoutRef<"code"> {}
const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] text-sm font-medium",
        robotoMono.className,
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
);
Code.displayName = "Code";

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Blockquote,
  Ul,
  Ol,
  Code,
};
