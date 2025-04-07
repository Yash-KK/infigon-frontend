import PersonalityImage from "../public/personality.png";
import InterestImage from "../public/interest.png";
import CareerImage from "../public/career.png";
import BrainImage from "../public/brain.png";
import LearningImage from "../public/learning.png";
import { ColorClass, ColorKey, SidebarItem } from "@/types/sidebar";

export const colorClassMap: Record<ColorKey, ColorClass> = {
  blue: {
    text: "text-blue-700",
    border: "peer-checked:border-blue-700",
    hover: "hover:text-blue-500",
  },
  green: {
    text: "text-green-700",
    border: "peer-checked:border-green-700",
    hover: "hover:text-green-500",
  },
  orange: {
    text: "text-orange-500",
    border: "peer-checked:border-orange-500",
    hover: "hover:text-orange-500",
  },
  pink: {
    text: "text-pink-700",
    border: "peer-checked:border-pink-700",
    hover: "hover:text-pink-500",
  },
  "light-blue": {
    text: "text-sky-700",
    border: "peer-checked:border-sky-700",
    hover: "hover:text-sky-500",
  },
};

export const sidebarData: SidebarItem[] = [
  {
    id: "test1",
    label: "TEST 1",
    title: "Personality Explorer",
    description: "Understanding Personality Explorer",
    children: ["Personality Types", "Your Result"],
    color: "blue",
    icon: PersonalityImage,
  },
  {
    id: "test2",
    label: "TEST 2",
    title: "Interest Explorer",
    description: "Understanding Interests",
    children: ["Interest Types", "Suggested Fields"],
    color: "green",
    icon: InterestImage,
  },
  {
    id: "test3",
    label: "TEST 3",
    title: "Career Motivators",
    description: "Understanding Career Motivators",
    children: ["10 Career Motivators", "Your Result"],
    color: "orange",
    icon: CareerImage,
  },
  {
    id: "test4",
    label: "TEST 4",
    title: "Emotional Intelligence",
    description: "Understanding Emotional Intelligence",
    children: ["Daniel Goleman Emotional Intelligence Test", "Your Result"],
    color: "light-blue",
    icon: BrainImage,
  },
  {
    id: "test5",
    label: "TEST 5",
    title: "Learning Styles",
    description: "Understanding Learning Styles",
    children: ["Your Result"],
    color: "pink",
    icon: LearningImage,
  },
];
