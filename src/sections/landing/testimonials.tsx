import { LinkButton } from "@/components/link-button"
import { SectionTitle } from "@/components/section-title"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Paragraph } from "@/components/ui/typography"
import { getUserInitials } from "@/lib/get-user-initials"
import { cn } from "@/lib/utils"
import { useState } from "react"

const testimonials = [
  {
    quote:
      'Carlos is a very committed and dedicated person in his area of work, he has helped me a lot to learn about the world of programming and web development, thanks both to his blog "La Esquina del Código" and personally, because thanks to his tutoring I have been able to advance a lot in my way to become a web developer and understand much better how the world of development works.',
    author: {
      name: "Alexis Clavo",
      title: "Software Development Student",
    },
  },
  {
    quote:
      "I highly recommend Carlos. He was a great asset to my professional development. He is an ethical, professional, and detail-oriented individual who takes great care in his work. He has a strong understanding of the industry and is able to communicate effectively with both clients and colleagues. I would give him a 15/10 rating.",
    author: {
      name: "Jose Cortez",
      title: "Software Developer",
      avatar:
        "https://media.licdn.com/dms/image/D4E03AQHo5YQiojrZdg/profile-displayphoto-shrink_800_800/0/1681485779466?e=1712793600&v=beta&t=0Bbn9mgsFy7jQklzUmLtDP1Fey_qNxQKojcUVnQTF_o",
    },
  },
  {
    quote:
      "Carlos is an exceptional frontend developer. His code is clean and efficient, standing out for his attention to detail and commitment to very good programming practices. In addition to his technical skills, he demonstrates a proactive and collaborative attitude, being a valuable asset to any development team. His ability to translate design concepts into intuitive interfaces has raised the quality of our projects remarkably.",
    author: {
      name: "Kathereen Gonzalez",
      title: "QA Analyst at Rivka Development",
      avatar:
        "https://media.licdn.com/dms/image/D4E03AQGBziaIX3REsQ/profile-displayphoto-shrink_800_800/0/1666814501026?e=1712793600&v=beta&t=hUjWkCwNgnyEtlNOuLPwSjMLW--ZcUpKDw-mvX9lR1o",
    },
  },
  {
    quote:
      "I worked with Carlos on several projects and he impressed me with his expertise in Frontend development. He has a great knowledge of the latest technologies, and is very skilled in web development and user experience optimization. I would recommend Carlos to any team and would love to work with him again.",
    author: {
      name: "Leonardo Cabrera",
      title: "CFO at neuralgeeks",
      avatar:
        "https://media.licdn.com/dms/image/C4E03AQEwkly9pSSmLg/profile-displayphoto-shrink_800_800/0/1598227655291?e=1712793600&v=beta&t=F3_y1AEuusfDwFI4vh_uSWtifQzrq0PPnx6sn4fELY4",
    },
  },
  {
    quote:
      "I am pleased to recommend Carlos as a frontend web developer. I had the pleasure of working with Carlos on several projects, and was continually impressed by his technical expertise, creativity and attention to detail.",
    author: {
      name: "Juan Nuñez",
      title: "Software Engineer at neuralgeeks",
      avatar:
        "https://media.licdn.com/dms/image/C4E03AQHK0iD1t5tdtA/profile-displayphoto-shrink_800_800/0/1579585704292?e=1712793600&v=beta&t=0y5ECY7j8PtmsvinDGXJo8W3dx2CKM-vx3EIG7pF1Tk",
    },
  },
  {
    quote:
      "Carlos is a developer with a passion for details and good quality. He redesigned our website on Academia Web and created multiple posts for our tech blog. His job was pretty amazing and I recommend him for hire to be part of a team looking for a passionate developer.",
    author: {
      name: "Cesar Colina",
      title: "Software Engineer II at ShutterStock",
      avatar:
        "https://media.licdn.com/dms/image/C5603AQFFtxU2OJyR8A/profile-displayphoto-shrink_800_800/0/1556482005241?e=1712793600&v=beta&t=8sZqYwVEmVuqQ-u94qikUWhH6hBLGLstLPGHyh8bIfE",
    },
  },
  {
    quote:
      "I am impressed by Carlos' ability to learn and adapt to different scenarios and projects. He is attentive, a good listener and learns from every second he works. I have no doubt that he is one of the best front-end developers that I have ever seen.",
    author: {
      name: "Gabriel Noya",
      title: "CEO at neuralgeeks",
      avatar:
        "https://media.licdn.com/dms/image/C4E03AQFXe794bJHKyA/profile-displayphoto-shrink_800_800/0/1522879837117?e=1712793600&v=beta&t=I58CPPOt120ybhwUGo2bDWNoC7qedPRZv6tx0GVA0lQ",
    },
  },
]

export function Testimonials() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section className="container space-y-8 py-20">
      <SectionTitle id="testimonials" className="text-center">
        Trusted by Coworkers and Clients
      </SectionTitle>
      <Paragraph className="mx-auto max-w-4xl text-center">
        Trust matters. My dedication and collaborative spirit earn me the
        unwavering support of both colleagues and clients. They value my
        transparency, open communication, and commitment to exceeding
        expectations. Let me bring that same level of trust and reliability to
        your projects.
      </Paragraph>
      <div className="flex justify-center">
        <LinkButton
          href="https://forms.gle/pTskzcMYaG4ew4NX9"
          target="_blank"
          variant="secondary"
        >
          Leave a Testimonial
        </LinkButton>
      </div>
      <div
        className={cn(
          "relative max-h-[500px] overflow-y-hidden after:pointer-events-none after:absolute after:inset-0 after:flex after:items-end after:justify-center after:gap-x-2 after:bg-gradient-to-t after:from-background after:to-transparent",
          showAll && "max-h-full after:hidden",
        )}
      >
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        {showAll || (
          <Button
            type="button"
            variant="outline"
            className="absolute bottom-0 left-1/2 z-10 mx-auto -translate-x-1/2"
            onClick={() => setShowAll(true)}
          >
            Show All Testimonials
          </Button>
        )}
      </div>
    </section>
  )
}

interface TestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    avatar?: string
  }
}
function Testimonial(props: TestimonialProps) {
  const { quote, author } = props
  const initials = getUserInitials(author.name)

  return (
    <figure className="mb-4 break-inside-avoid-column space-y-4 rounded-xl border bg-secondary/30 px-8 py-6">
      <blockquote>{quote}</blockquote>
      <figcaption className="flex items-center gap-x-4">
        <Avatar className="h-[50px] w-[50px]">
          <AvatarImage src={author.avatar} />
          <AvatarFallback className="font-medium">{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="text-lg font-semibold not-italic">
            {author.name}
          </cite>
          <cite className="text-sm not-italic">{author.title}</cite>
        </div>
      </figcaption>
    </figure>
  )
}
