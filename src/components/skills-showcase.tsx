import {
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  MysqlPlain,
  NestjsPlain,
  NextjsLine,
  NodejsOriginal,
  ReactOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react"
import { Small } from "./ui/typography"

const skills = [
  {
    name: "Next.js",
    icon: NextjsLine,
  },
  {
    name: "React",
    icon: ReactOriginal,
  },
  {
    name: "Tailwind",
    icon: TailwindcssPlain,
  },
  {
    name: "Nest.js",
    icon: NestjsPlain,
  },
  {
    name: "MySQL",
    icon: MysqlPlain,
  },
  {
    name: "Node.js",
    icon: NodejsOriginal,
  },
  {
    name: "TypeScript",
    icon: TypescriptOriginal,
  },
  {
    name: "JavaScript",
    icon: JavascriptOriginal,
  },
  {
    name: "HTML5",
    icon: Html5Original,
  },
  {
    name: "CSS3",
    icon: Css3Original,
  },
]
const dupedSkills = skills.concat(skills).concat(skills).concat(skills)

export function SkillsShowcase() {
  return (
    <div className="container flex w-full flex-col items-center space-y-6">
      <Small className="text-center">
        Currently working with <strong>these technologies:</strong>
      </Small>
      <div className="relative w-full overflow-hidden">
        <div
          role="presentation"
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/2 bg-gradient-to-r from-background to-transparent"
        />
        <ul className="flex animate-slide space-x-10">
          {dupedSkills.map(({ name, icon: Icon }, key) => (
            <li
              key={key}
              title={name}
              className="flex flex-col items-center gap-y-2"
            >
              <Icon size="45" color="white" />
              <span className="text-sm font-medium">{name}</span>
            </li>
          ))}
        </ul>
        <div
          role="presentation"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/2 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </div>
  )
}
