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
        </div>
      </div>
    </div>
  );
}
