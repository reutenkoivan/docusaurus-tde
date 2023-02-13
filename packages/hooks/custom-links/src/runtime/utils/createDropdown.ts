type linksMapTypes = {
  [key: string]: {
    title: string;
    items: Array<{ label: string; href: string }>;
  };
}

type dropdownItem = {
  type: 'dropdown';
  label: string;
  items: Array<{ label: string; href: string }>;
}

export const createDropdown = (linksMap: linksMapTypes): dropdownItem[] => {
  const dropdownSet = []

  for (const { title = '', items = [] } of Object.values(linksMap)) {
    const category = {
      type: 'dropdown',
      label: title,
      items: items,
    }

    dropdownSet.push(category)
  }

  return dropdownSet
}
