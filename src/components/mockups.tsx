import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface MockupProps {
  screenshot: string | StaticImageData
  alt: string
  className?: string
}

interface LaptopMockupProps extends MockupProps {}
export function LaptopMockup(props: LaptopMockupProps) {
  const { screenshot, alt, className } = props

  return (
    <div className={cn("w-full", className)}>
      <div className="relative mx-auto aspect-video w-5/6 border-[8px] border-secondary bg-secondary">
        <div className="h-full w-full overflow-hidden bg-secondary">
          <Image
            src={screenshot}
            className="h-full w-full object-cover object-[top_center]"
            alt={alt}
          />
        </div>
      </div>
      <div
        className="relative mx-auto h-[17px] w-full rounded-b-md bg-secondary/60 md:h-[21px]"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b bg-secondary md:h-[8px] md:w-[96px]" />
      </div>
    </div>
  )
}
