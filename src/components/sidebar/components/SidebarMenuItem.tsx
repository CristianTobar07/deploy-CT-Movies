"use client";

import { useAppDispatch } from "@/store";
import { resetCategorieSelected } from "@/store/sidebar/sidebarSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname().slice(0, 17);

  const dispatch = useAppDispatch();

  const handleClicSidebar = () => {
    dispatch(resetCategorieSelected(undefined));
    localStorage.removeItem("category");
  };

  return (
    <Link
      href={path}
      onClick={handleClicSidebar}
      className={`
            w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150
            ${currentPath === path.slice(0, 17) ? "bg-gray-600" : ""}
          `}
      placeholder={path}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-md font-semibold leading-5 text-white">
          {title}
        </span>
        <span className="text-sm  text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
