export interface ActionType{
  fragments: Link[];
  activeLink: Link;
}

export interface Link{
  name: string;
  url: string;
}
