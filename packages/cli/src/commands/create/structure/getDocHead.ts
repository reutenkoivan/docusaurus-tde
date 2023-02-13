export const getDocHead = (name?: string): string => {
  const title = [
    'sidebar_position: 1',
    'slug: /',
  ]

  if (name) {
    title.push(`title: "${name}"`, 'sidebar_label: Описание')
  }

  return `---\n${title.join('\n')}\n---`
}
