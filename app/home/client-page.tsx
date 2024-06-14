"use client";

import Leave from "@/components/leave";
import Notice from "@/components/notice";
import TimeTracking from "@/components/time-tracking";
import { Button, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function HomeClientPage() {
  return (
    <div className="h-full flex flex-wrap ml-72 mt-16 mb-10 gap-5">
      <div className="lg:w-[450px] xl:w-[550px] 2xl:w-[750px] h-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-6 rounded-xl">
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
