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

export interface StepCircleProps {
  num?: number;
  color?: string;
}

export interface DisplayTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: any;
}

export interface PointProps {
  idx: number;
  item: {
    text: string;
    border: string;
    bg: string;
  };
}

export interface EmotionalCircleProps {
  number: number;
  label: string;
  color: string;
}

export interface EmotionalPointCircleProps {
  number: number;
  label: string;
  score: number;
  total: number;
  color?: string;
}

export interface HoverCardProps {
  color: string;
  title: string;
  description: string;
  icon: StaticImageData;
}

