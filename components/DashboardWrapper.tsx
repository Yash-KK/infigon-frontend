"use client";

import { useState } from "react";
import DashboardContent from "./DashboardContent";
import SideBar from "./ui/SideBar";
import { SidebarItem } from "@/types/types";

const DashboardWrapper = ({ sidebarData }: { sidebarData: SidebarItem[] }) => {
  const [activeId, setActiveId] = useState(sidebarData[0].id);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [activeDescriptionId, setActiveDescriptionId] = useState<string | null>(
    sidebarData[0].id
  );

  const activeItem = sidebarData.find((item) => item.id === activeId)!;

  return (
    <div className="flex">
      <SideBar
        activeId={activeId}
        setActiveId={setActiveId}
        activeChild={activeChild}
        setActiveChild={setActiveChild}
        activeDescriptionId={activeDescriptionId}
        setActiveDescriptionId={setActiveDescriptionId}
      />
      <DashboardContent item={activeItem} activeChild={activeChild} />
    </div>
  );
};

export default DashboardWrapper;
