"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "@/styles/constants";
import { SideBarItem } from "@/styles/types";

const MenuItem = ({ item }: { item: SideBarItem }) => {
  const pathname = usePathname();

  return (
    <div className="">
      <Link
        href={item.path}
        className={`block w-full p-2 rounded-lg hover:bg-zinc-100 ${
          item.path === pathname
            ? "bg-white text-black"
            : item.title === "Logout"
            ? "bg-blue-500 text-white"
            : "text-white hover:text-black"
        }`}
      >
        <div className="flex flex-row items-center ">
          <span
            className={`h-5 w-5 ${
              item.path === pathname ? "text-blue-500" : ""
            }`}
          >
            {item.icon}
          </span>
          <span className="font-semibold text-base flex ml-2">
            {item.title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="md:w-60 bg-blue-900 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex mt-10">
      <div className="flex flex-col w-full pt-10">
        <div className="flex flex-col space-y-2 md:px-6">
          {SIDEBAR_ITEMS.filter((item) => item.title !== "Logout").map(
            (item, idx) => (
              <MenuItem key={idx} item={item} />
            )
          )}
        </div>
        <div className="flex flex-col space-y-2 md:px-6 mt-auto pb-32">
          {SIDEBAR_ITEMS.filter((item) => item.title === "Logout").map(
            (item, idx) => (
              <MenuItem key={idx} item={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
