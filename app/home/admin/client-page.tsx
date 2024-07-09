"use client";

import Leave from "@/components/leave";
import Notice from "@/components/notice";
import TimeTracking from "@/components/time-tracking";
import { Button, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function HomeClientPage() {
  return (
    <div className="h-full flex flex-wrap ml-72 mt-16 mb-10 gap-5">
      <div className="lg:w-[450px] xl:w-[550px] 2xl:w-[750px] h-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <Text as="b" fontSize="xl">
            Employees on Leave Today
          </Text>
          <Link href={"/home/admin/view-employee"}>
            <Button colorScheme="blue">View All Employees</Button>
          </Link>
        </div>
        <Leave />
      </div>
      <div className="lg:w-[450px] xl:w-[550px] 2xl:w-[750px] h-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-xl">
        <Notice />
      </div>
      <div className="lg:w-[450px] xl:w-[550px] 2xl:w-[750px] h-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-xl">
        <TimeTracking />
      </div>
    </div>
  );
}
