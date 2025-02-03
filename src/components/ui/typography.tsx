import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef, forwardRef } from "react"

interface H1Props extends ComponentPropsWithoutRef<"h1"> {}
const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ children, className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 font-mono text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
)
H1.displayName = "H1"

interface H2Props extends ComponentPropsWithoutRef<"h2"> {}
const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ children, className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "scroll-m-20 text-3xl font-bold first:mt-0 md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
)
H2.displayName = "H2"

interface H3Props extends ComponentPropsWithoutRef<"h3"> {}
const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ children, className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("scroll-m-20 text-2xl font-bold md:text-3xl", className)}
      {...props}
    >
      {children}
    </h3>
  ),
)
H3.displayName = "H3"

interface H4Props extends ComponentPropsWithoutRef<"h4"> {}
const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ children, className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn("scroll-m-20 text-xl font-bold md:text-2xl", className)}
      {...props}
    >
      {children}
    </h4>
  ),
)
H4.displayName = "H4"

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {}
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-lg leading-7 md:text-xl [&:not(:first-child)]:mt-6",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  ),
)
Paragraph.displayName = "Paragraph"

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {}
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
)
Anchor.displayName = "Anchor"

interface BlockquoteProps extends ComponentPropsWithoutRef<"blockquote"> {}
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ children, className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        "mt-6 border-l-2 pl-6 text-lg italic md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
)
Blockquote.displayName = "Blockquote"

interface UlProps extends ComponentPropsWithoutRef<"ul"> {}
const Ul = forwardRef<HTMLUListElement, UlProps>(
  ({ children, className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        "my-6 ml-6 list-disc space-y-4 text-lg md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  ),
)
Ul.displayName = "Ul"

interface OlProps extends ComponentPropsWithoutRef<"ol"> {}
const Ol = forwardRef<HTMLOListElement, OlProps>(
  ({ children, className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "my-6 ml-6 list-decimal space-y-4 text-lg md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </ol>
  ),
)
Ol.displayName = "Ol"

interface CodeProps extends ComponentPropsWithoutRef<"code"> {}
const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-lg font-semibold md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
)
Code.displayName = "Code"

interface SmallProps extends ComponentPropsWithoutRef<"small"> {}
const Small = forwardRef<HTMLSpanElement, SmallProps>(
  ({ children, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("font-medium leading-none", className)}
      {...props}
    >
      {children}
    </span>
  ),
)
Small.displayName = "Small"

export { Anchor, Blockquote, Code, H1, H2, H3, H4, Ol, Paragraph, Small, Ul }
