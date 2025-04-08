"use client";

import Image from "next/image";
import DownloadIcon from "@/icons/Download";
import { colorClassMap, sidebarData } from "@/data/sidebar";
import Button from "./Button";
import { SideBarProps } from "@/types/types";
import Label from "./Label";

const SideBar = ({
  activeId,
  setActiveId,
  activeChild,
  setActiveChild,
  setActiveDescriptionId,
}: SideBarProps) => {
  return (
    <aside className="w-72 p-4 border-r border-[#CACACA] bg-white">
      <div className="flex flex-col gap-6 h-[770px]">
        {sidebarData.map((item) => {
          const color = colorClassMap[item.color];
          const isActive = activeId === item.id;

          return (
            <div key={item.id} className="border-b border-gray-200">
              <div
                onClick={() => {
                  setActiveId(item.id);
                  setActiveChild(null);
                  setActiveDescriptionId(null);
                }}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer shadow-lg border border-gray-200 bg-white transition-all ease-in-out ${
                  isActive ? `border-r-4 ${color.border}` : ""
                }`}
              >
                <Image src={item.icon} alt="icon..." width={50} height={50} />
                <div>
                  <Label className="text-xs text-gray-500" text={item.label} />
                  <Label
                    className={`font-semibold ${color.text}`}
                    text={item.title}
                  />
                </div>
              </div>

              <div
                className={`transition-all duration-500 overflow-hidden pl-10 ${
                  isActive ? "max-h-96 mt-2 pb-2" : "max-h-0"
                }`}
              >
                <div
                  onClick={() => {
                    setActiveDescriptionId(item.id);
                    setActiveChild(null);
                  }}
                  className={`text-sm text-gray-800 p-1 cursor-pointer ${
                    isActive && activeChild === null ? "font-bold" : ""
                  }`}
                >
                  <Label className="text-black" text={item.description} />
                </div>

                <ul className="text-sm text-gray-500 mt-1 flex flex-col gap-1">
                  {item.children.map((child, index) => (
                    <li
                      key={child}
                      onClick={() => {
                        setActiveChild(child);
                        setActiveDescriptionId(null);
                      }}
                      className={`cursor-pointer p-1 transform transition duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2"
                      } ${activeChild === child ? "font-bold text-black" : ""}`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
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
          className="flex justify-center items-center p-4 border-1 cursor-pointer rounded border-[#0047AB]"
          textClassName="text-[#0047AB] font-bold"
          rightChild={<DownloadIcon />}
        />
      </div>
    </aside>
  );
};

export default SideBar;
