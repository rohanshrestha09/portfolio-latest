export const calculateExperience = (startYear: number, startMonth: number) => {
  const now = new Date()
  let years = now.getFullYear() - startYear
  let months = now.getMonth() + 1 - startMonth
  if (months < 0) {
    years -= 1
    months += 12
  }
  return `${years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : ''}${
    months > 0 ? ` ${months} ${months > 1 ? 'months' : 'month'}` : ''
  }`
}

export const formatResponsibility = (responsibility: string) => {
  const safe = responsibility
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return safe.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a class="underline underline-offset-4 hover:text-white transition-colors" href="$2" target="_blank" rel="noreferrer">$1</a>',
  )
}
