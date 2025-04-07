import Image from "next/image";
import DownloadIcon from "@/icons/Download";
import { colorClassMap, sidebarData } from "@/data/sidebar";
import Button from "./Button";

type Props = {
  activeId: string;
  setActiveId: (id: string) => void;
  activeChild: string | null;
  setActiveChild: (child: string | null) => void;
  activeDescriptionId: string | null;
  setActiveDescriptionId: (id: string | null) => void;
};

const SideBar = ({
  activeId,
  setActiveId,
  activeChild,
  setActiveChild,
  setActiveDescriptionId,
}: Props) => {
  return (
    <aside className="w-72 p-4 border-r border-[#CACACA] bg-white">
      <div className="flex flex-col gap-6 h-[770px]">
        {sidebarData.map((item) => {
          const color = colorClassMap[item.color];

          return (
            <div key={item.id} className="border-b border-gray-200">
              <div
                onClick={() => {
                  setActiveId(item.id);
                  setActiveChild(null);
                  setActiveDescriptionId(null);
                }}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer shadow-lg 
      border border-gray-200 bg-white ${
        activeId === item.id ? `border-r-4 ${color.border}` : ""
      }`}
              >
                <Image src={item.icon} alt="My Image" width={50} height={50} />
                <div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className={`font-semibold ${color.text}`}>
                    {item.title}
                  </div>
                </div>
              </div>

              {activeId === item.id && (
                <div className="pl-10 mt-2 pb-2">
                  <div
                    onClick={() => {
                      setActiveDescriptionId(item.id);
                      setActiveChild(null);
                    }}
                    className={`text-sm text-gray-800 p-1 cursor-pointer ${
                      activeId === item.id && activeChild === null
                        ? "font-bold"
                        : ""
                    }`}
                  >
                    {item.description}
                  </div>
                  <ul className="text-sm text-gray-500 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li
                        key={child}
                        onClick={() => {
                          setActiveChild(child);
                          setActiveDescriptionId(null);
                        }}
                        className={`cursor-pointer p-1 ${
                          activeChild === child ? "font-bold text-black" : ""
                        }`}
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
