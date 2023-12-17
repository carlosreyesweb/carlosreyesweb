export function getUserInitials(name: string) {
  const initials = name
    .split(/\s/)
    .reduce((response, word) => (response += word[0]), "")
  if (initials.length > 2) return initials[0] + initials[initials.length - 1]

  return initials
}
