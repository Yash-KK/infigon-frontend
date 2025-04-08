import { DisplayTabsProps } from "@/types/types";

const DisplayTabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: DisplayTabsProps) => {
  return (
    <div className="flex flex-wrap mt-6 gap-6 border-b text-gray-500 text-sm font-medium">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`pb-2 cursor-pointer border-b-2 ${
            activeTab === tab
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-blue-600"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default DisplayTabs;
