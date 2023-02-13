import type { categoryType } from '../../types'

type linkType = {
  label: string;
  route: string;
  location: string;
}

export const defaultDropdownBuilder = (links: linkType[], { categoryLabel = 'Пакеты' }): categoryType[] => {
  const buttons = links.map(({ label, route }) => {
    return { label, to: route }
  })

  return [{
    type: 'dropdown',
    label: categoryLabel,
    items: buttons,
  }]
}
