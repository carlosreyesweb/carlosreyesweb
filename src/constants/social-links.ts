import { profileLinks } from "./profile-links"

export const socialLinks = profileLinks.filter((link) => link.kind === "social")
