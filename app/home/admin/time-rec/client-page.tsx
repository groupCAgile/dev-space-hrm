"use client";

import {
  Spinner,
  Alert,
  AlertIcon,
  Button,
  Tag,
  TagLabel,
  Stack,
  Badge,
  Divider
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function TimeRecPage() {
  const [leaves, setLeaves] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadLeaves = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leave-request", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setLeaves(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleApproved = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leave-request", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId: id }),
      });

      const data = await res.json();

      if (data.success) {
        loadLeaves();
        toast.success("Successfully Approved!");
      } else {
        toast.success("Failed Try Again!");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRejected = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/leave-request", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId: id }),
      });

      const data = await res.json();

      if (data.success) {
        loadLeaves();
        toast.success("Successfully Rejected!");
      } else {
        toast.success("Failed Try Again!");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeaves();
  }, []);

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-xl mt-20 ml-52 mb-5 w-full bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Time Records</h1>
            {/* <div className="relative mb-10 bg-blue-50 rounded-lg">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="absolute right-2 top-2">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div> */}
          </div>
          <div className="p-5 mb-2 bg-blue-50 rounded-lg">
            <div className="flex">
                <h1 className="mr-4">
                    Your Shift for Today Started at 9.05AM | 20/06/2024
                </h1>
                <Stack direction='row'>
                    <Badge colorScheme='green'>Ongoing</Badge>
                </Stack>
            </div>
            <div className="mt-3">
                <Button colorScheme="blue">End Shift</Button>
            </div>
          </div>

          <Divider />

          <div className="flex items-center columns-4 p-2 mt-3 mb-2">
            <h2 className="w-full">Date</h2>
            <h2 className="w-full">Name</h2>
            <h2 className="w-full">Started At</h2>
            <h2 className="w-full">Ended At</h2>
          </div>

          <div className="overflow-y-auto">
            {leaves.map((leave) => (
              <div
                key={leave._id}
                className="emp-entry flex items-center columns-4 p-2 mb-2 bg-blue-50 rounded-lg justify-between"
              >
                <div className="w-full flex items-center">
                  <h2 className="text-sm font-regular">{leave.start_date}</h2>
                </div>
                <h2 className="text-sm font-regular w-full">
                    {leave.name}
                </h2>
                
            
                <h2 className="text-sm font-regular w-full">9.00AM</h2>
                <h2 className="text-sm font-regular w-full">6.00PM</h2>
                
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
