import React from "react";
import { BsBellFill } from "react-icons/bs";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gray-100 flex fixed justify-between items-center h-14 p-4 shadow w-full z-10">
      {/* Logo and Company Name */}
      <Link href={"/home"}>
        <div className="flex items-center space-x-2">
          <img src="/assets/logo2.png" alt="Logo" className="h-8 w-auto pl-4" />
          <span className="text-gray-700 text-base font-bold">DevSpace</span>
        </div>
      </Link>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-10">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <BsBellFill className="h-5 w-5" />
        </button>
        <Link href={"home/my-info"}>
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-1 rounded-md">
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              size="sm"
            />
            <span className="text-gray-700 text-sm font-semibold">
              Dan Abrahmov
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}
