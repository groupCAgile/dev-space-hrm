"use client";

import Leave from "@/components/leave";
import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function LeaveRequestsClientPage() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-xl mt-20 ml-44 mb-5 w-full bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">On Leave Today</h1>
          </div>
          <Leave />
          <div className="flex justify-between mt-4">
            <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
            <Link href={"/home/add-employee"}>
              <Button colorScheme="blue">All</Button>
            </Link>
          </div>
          <div className="relative mb-4 bg-blue-50 rounded-lg">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <div className="absolute right-2 top-2">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
