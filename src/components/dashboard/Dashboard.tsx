"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { RoyalChat } from "@/components/dashboard/RoyalChat";
import { RoyalHeader } from "@/components/dashboard/RoyalHeader";
import { TreasureRoom } from "@/components/dashboard/treasure-room";

export function Dashboard() {
  const [activeNav, setActiveNav] = useState("Chest Battle");
  const [activeCategory, setActiveCategory] = useState("Royal");

  return (
    <main className="dashboard-page flex h-dvh w-full overflow-hidden bg-bg-primary">
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-bg-primary">
        <RoyalHeader
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[190px_minmax(0,1fr)_250px]">
          <DashboardSidebar activeNav={activeNav} onNavChange={setActiveNav} />
          <TreasureRoom />
          <RoyalChat />
        </div>
      </div>
    </main>
  );
}
