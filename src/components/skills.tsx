import {
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
import { Marquee } from "./ui/marquee"

const SKILLS = [
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

export function Skills() {
  return (
    <div className="container relative after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-gradient-to-r after:from-background after:via-transparent after:to-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {SKILLS.map(({ name, logo: Logo, color }, index) => (
          <figure
            key={index}
            className="flex h-full w-36 items-center justify-center"
            title={name}
          >
            <Logo size={48} fill={color} color={color} />
            <figcaption className="sr-only">{name}</figcaption>
          </figure>
        ))}
      </Marquee>
    </div>
  )
}
