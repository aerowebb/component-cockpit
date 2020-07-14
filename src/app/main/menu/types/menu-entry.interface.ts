export interface MenuEntry {
  isBusinessView: boolean;
  isLeaf: boolean;
  key: string;
  submenus: MenuEntry[];
}
