import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  AngularOriginal,
  Css3Original,
  DigitaloceanOriginal,
  DockerOriginal,
  Html5Original,
  JavascriptOriginal,
  LinuxOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsPlain,
  NodejsOriginal,
  PrismaOriginal,
  PythonOriginal,
  ReactOriginal,
  TypescriptOriginal,
  VercelOriginal,
  VitejsOriginal,
} from "devicons-react"
import AutoPlay from "embla-carousel-autoplay"

const TOOLS = [
  {
    name: "Next.js",
    logo: NextjsPlain,
    color: "white",
  },
  {
    name: "React.js",
    logo: ReactOriginal,
  },
  {
    name: "Vite",
    logo: VitejsOriginal,
  },
  {
    name: "Angular",
    logo: AngularOriginal,
  },
  {
    name: "HTML",
    logo: Html5Original,
  },
  {
    name: "CSS",
    logo: Css3Original,
  },
  {
    name: "TypeScript",
    logo: TypescriptOriginal,
  },
  {
    name: "JavaScript",
    logo: JavascriptOriginal,
  },
  {
    name: "Python",
    logo: PythonOriginal,
  },
  {
    name: "Nest.js",
    logo: NestjsOriginal,
  },
  {
    name: "Node.js",
    logo: NodejsOriginal,
  },
  {
    name: "Prisma ORM",
    logo: PrismaOriginal,
  },
  {
    name: "MySQL",
    logo: MysqlOriginal,
  },
  {
    name: "MongoDB",
    logo: MongodbOriginal,
  },
  {
    name: "Docker",
    logo: DockerOriginal,
  },
  {
    name: "DigitalOcean",
    logo: DigitaloceanOriginal,
  },
  {
    name: "Vercel",
    logo: VercelOriginal,
    color: "white",
  },
  {
    name: "Linux",
    logo: LinuxOriginal,
  },
]

export function ToolsSlider() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        dragFree: true,
      }}
      plugins={[AutoPlay({ delay: 1000, stopOnInteraction: false })]}
      className="w-full py-4 after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle,_transparent_40%,_#0a0a0a)]"
    >
      <CarouselContent>
        {TOOLS.map(({ name, logo: Logo, color }, index) => (
          <CarouselItem
            key={index}
            className="basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/12"
          >
            <figure
              className="flex h-full items-center justify-center"
              title={name}
            >
              <Logo size={48} fill={color} color={color} />
              <figcaption className="sr-only">{name}</figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
