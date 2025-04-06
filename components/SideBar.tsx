import Image, { StaticImageData } from "next/image";
import PersonalityImage from "../public/personality.png";
import InterestImage from "../public/interest.png";
import CareerImage from "../public/career.png";
import BrainImage from "../public/brain.png";
import LearningImage from "../public/learning.png";
import Button from "./ui/Button";
import DownloadIcon from "@/icons/Download";
type ColorKey = "blue" | "green" | "orange" | "pink" | "light-blue";

type ColorClass = {
  text: string;
  border: string;
  hover: string;
};

type SidebarItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  children: string[];
  color: ColorKey;
  icon: StaticImageData;
};
const colorClassMap: Record<ColorKey, ColorClass> = {
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

const sidebarData: SidebarItem[] = [
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

const SideBar = () => {
  return (
    <aside className="w-72 p-4 border-r border-[#CACACA] bg-white">
      <div className="flex flex-col gap-6  h-[750px]">
        {sidebarData.map((item, index) => {
          const color = colorClassMap[item.color];

          return (
            <div key={item.id} className="border-b border-gray-200">
              <input
                type="radio"
                name="accordion"
                id={item.id}
                className="peer hidden"
                defaultChecked={index === 0}
              />
              <label
                htmlFor={item.id}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer shadow-lg 
                    border border-gray-200 bg-white peer-checked:border-r-4 
                    ${color?.border}`}
              >
                <Image src={item.icon} alt="My Image" width={50} height={50} />
                <div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className={`font-semibold ${color?.text}`}>
                    {item.title}
                  </div>
                </div>
              </label>

              <div className="pl-10 mt-2 hidden peer-checked:block pb-2">
                <div className="text-sm text-gray-800 p-1 peer-checked:font-semibold">
                  {item.description}
                </div>
                <ul className="text-sm text-gray-500 mt-1 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <li
                      key={child}
                      className="cursor-pointer p-1 peer-checked:font-semibold"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <Button
          text="Download Report Card"
          className="flex justify-center items-center p-4 border-1  rounded border-[#0047AB]"
          textClassName="text-[#0047AB] font-bold"
          rightChild={<DownloadIcon />}
        />
      </div>
    </aside>
  );
};

export default SideBar;
