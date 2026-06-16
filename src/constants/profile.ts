import me from "@/assets/me.png"

export const PROFILE = Object.freeze({
  name: "Carlos Reyes",
  nickname: "carlosreyesdev",
  title: "Full Stack Software Engineer",
  bio: "Hi, I'm Carlos Reyes, a Full Stack Software Engineer specialized in building fast, scalable, AI-driven and user-focused software experiences.",
  photo: me,
  gender: "Male",
  birthDate: "2000-06-17",
  country: "Venezuela",
  email: "contact@carlosreyes.me",
  phone: "+58 (412) 938-0768",
  handles: {
    github: "carlosreyesdev",
    linkedin: "carlosreyesdev",
    instagram: "carlosreyesdev",
    twitter: "carlosreyesdev_",
  },
  website: import.meta.env.SITE,
  languages: [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
  ],
})
