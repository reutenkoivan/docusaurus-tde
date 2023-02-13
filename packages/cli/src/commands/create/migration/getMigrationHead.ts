export const getMigrationHead = (title?: string): string => {
  if (title) {
    return `---\ntitle: ${title}\n---`
  }

  return '---\ntitle: X.X.X ➡ X.X.X\n---'
}
