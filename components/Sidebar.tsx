"use client"

import { useMemo } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
import Library from "./Library";
import { Song } from "@/types";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
      {
        icon: IoLibrary,
        label: "Liked Songs",
        active: pathname === "/liked",
        href: "/liked",
      }
    ],
    [pathname]
  );

  return (
    <div className="h-full flex">
      <div
        className="
        hidden
        md:flex
        flex-col
        gap-y-2
        h-full
        bg-[#170f23]
        w-[300px]
        p-2
        "
      >
        <Box>
          <div
            className="
            flex
            flex-col
            py-4
            px-5
            gap-y-4
            "
          >
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full overflow-y-auto">
          <Library songs={songs}/>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
