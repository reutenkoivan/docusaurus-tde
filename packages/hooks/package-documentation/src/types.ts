export type categoryLinkType = {
  label: string;
  to: string;
}

export type categoryType = {
  type: 'dropdown';
  label: string;
  items: Array<categoryLinkType>;
}
