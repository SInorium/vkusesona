export interface NavigationItemProps {
  name: string;
  path: string;
}

export interface ProductNavigationProps {
  category: NavigationItemProps[];
}

export interface NavigationCategoryProps {
  category: {
    name: string;
    path: string;
  };
}
