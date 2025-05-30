import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps } from "react";

interface AnchorProps extends ComponentProps<"a"> {
  asChild?: boolean;
}
export function Anchor({ className, asChild, ...props }: AnchorProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(
        "text-primary font-medium underline underline-offset-4",
        className
      )}
      {...props}
    />
  );
}
