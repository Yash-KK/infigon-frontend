import { StaticImageData } from "next/image";

export type ColorKey = "blue" | "green" | "orange" | "pink" | "light-blue";

export type ColorClass = {
  text: string;
  border: string;
  hover: string;
};

export type SidebarItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  children: string[];
  color: ColorKey;
  icon: StaticImageData;
};

export type SideBarProps = {
  activeId: string;
  setActiveId: (id: string) => void;
  activeChild: string | null;
  setActiveChild: (child: string | null) => void;
  activeDescriptionId: string | null;
  setActiveDescriptionId: (id: string | null) => void;
};
