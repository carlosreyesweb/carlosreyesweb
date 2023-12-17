import {
  Css3Original,
  DigitaloceanOriginal,
  DockerOriginal,
  ExpressOriginal,
  FlaskOriginalWordmark,
  Html5Original,
  JavascriptOriginal,
  JiraOriginal,
  LinuxOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NestjsOriginal,
  NextjsPlain,
  NodejsOriginal,
  PostgresqlOriginal,
  PrismaOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TrelloOriginal,
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
    name: "Tailwind CSS",
    logo: TailwindcssOriginal,
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
    name: "Flask",
    logo: FlaskOriginalWordmark,
    color: "white",
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
    name: "Express.js",
    logo: ExpressOriginal,
    color: "white",
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
  { name: "PostgreSQL", logo: PostgresqlOriginal },
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
  {
    name: "Jira",
    logo: JiraOriginal,
  },
  {
    name: "Trello",
    logo: TrelloOriginal,
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
