import me from "@/assets/me.png"

export const PROFILE = Object.freeze({
  name: "Carlos Reyes",
  nickname: "carlosreyesweb",
  title: "Full Stack Software Engineer",
  bio: "Hi, I'm Carlos Reyes, a Full Stack Software Engineer specialized in building fast, scalable, AI-driven and user-focused software experiences.",
  photo: me,
  gender: "Male",
  birthDate: "2000-06-17",
  country: "Venezuela",
  email: "contact@carlosreyesweb.com",
  phone: "+58 (412) 938-0768",
  handles: {
    github: "carlosreyesweb",
    linkedin: "carlosreyesweb",
    instagram: "carlosreyesweb",
    twitter: "carlosreyesweb",
  },
  website: import.meta.env.SITE,
  languages: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
})
