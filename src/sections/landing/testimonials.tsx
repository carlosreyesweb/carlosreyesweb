import { LinkButton } from "@/components/link-button"
import { SectionTitle } from "@/components/section-title"
import Image, { StaticImageData } from "next/image"

const testimonials = [
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
  return (
    <section className="container space-y-8 py-20">
      <SectionTitle id="testimonials" className="text-center">
        Trusted by Coworkers and Clients
      </SectionTitle>
      <div className="flex items-center justify-center gap-x-2">
        <LinkButton
          href="https://forms.gle/pTskzcMYaG4ew4NX9"
          target="_blank"
          variant="secondary"
        >
          Leave a Testimonial
        </LinkButton>
      </div>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

interface TestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    avatar: string | StaticImageData
  }
}
function Testimonial(props: TestimonialProps) {
  const { quote, author } = props

  return (
    <figure className="mb-4 break-inside-avoid-column space-y-4 rounded-xl border bg-secondary/30 px-8 py-6">
      <blockquote>{quote}</blockquote>
      <figcaption className="flex items-center gap-x-4">
        <Image
          src={author.avatar}
          alt={author.name}
          className="rounded-full object-cover object-center"
          width={50}
          height={50}
          aria-hidden
        />
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
