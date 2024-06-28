"use client";

import {
  Spinner,
  Alert,
  AlertIcon,
  Button,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LeaveClientPage() {
  return (
    <div className="p-8 bg-white-600 min-h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-20 ml-64 mr-8 max-w-full"> 
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">My Leaves</h1> 
        <Link href={"/home/user/add-leave"}>
          <Button size="sm" colorScheme="blue">+ Apply Leave</Button> 
        </Link> 
      </div>
      
      <div className="flex space-x-2 mb-4"> 
        <div className="p-2 bg-blue-100 rounded-lg shadow-md flex-1 text-center">
          <div className="text-xl font-bold text-left">21</div> 
          <div className="text-gray-600 text-left">Available Casual Leaves</div>
        </div>
        <div className="p-2 bg-blue-100 rounded-lg shadow-md flex-1 text-center">
          <div className="text-xl font-bold text-left">05</div> 
          <div className="text-gray-600 text-left">Available Medical Leaves</div>
        </div>
        <div className="p-2 bg-red-100 rounded-lg shadow-md flex-1 text-center">
          <div className="text-xl font-bold text-left">11</div> 
          <div className="text-gray-600 text-left">Casual Leaves Taken</div>
        </div>
        <div className="p-2 bg-red-100 rounded-lg shadow-md flex-1 text-center">
          <div className="text-xl font-bold text-left">03</div> 
          <div className="text-gray-600 text-left">Medical Leaves Taken</div>
        </div>
      </div>

      <div className="flex justify-between mt-4 mb-4">
        <h1 className="text-x1 font-semibold">Leave Records</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apply Date</th> 
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Type</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Date</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Date</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Days</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Balance</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-2 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leave Reason</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {/* {leaveData.map((leaveRequest) => (
              <tr key="E126">
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.Date}</td>
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.leave_Type}</td>
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.start_date}</td>
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.end_Date}</td>
                <td className="px-2 py-2 whitespace-nowrap">1</td>
                <td className="px-2 py-2 whitespace-nowrap">8</td>
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.status}</td>
                <td className="px-2 py-2 whitespace-nowrap">{leaveRequest.reason}</td>
              </tr>
            ))} */}

          </tbody>
        </table>
      </div>
    </div>
  );
}
