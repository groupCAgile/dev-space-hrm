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
      <div className="max-w-[1160px] mt-20 ml-52 mb-5 w-full bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Leaves</h1>
            <div className="relative mb-10 bg-blue-50 rounded-lg">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="absolute right-2 top-2">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            {leaves.map((leave) => (
              <div
                key={leave._id}
                className="emp-entry flex items-center p-2 mb-2 bg-blue-50 rounded-lg justify-between"
              >
                <div className="flex items-center">
                  <h2 className="text-sm font-regular ml-4 w-32">
                    {leave.name}
                  </h2>
                </div>
                <h2 className="text-sm font-regular">{leave.start_date} (1)</h2>
                <Tag
                  size="lg"
                  key="lg"
                  variant="subtle"
                  colorScheme={leave.day === "Full" ? "red" : "yellow"}
                >
                  <TagLabel>{leave.day} Day</TagLabel>
                </Tag>
                <h2 className="text-sm font-regular">{leave.leave_type}</h2>
                <div className="flex items-center">
                  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
                  <h1 className="font-regular text-sm">Pending</h1>
                </div>
                <div className="flex flex-row gap-[16px]">
                  <Button
                    name="reject"
                    id="reject"
                    colorScheme="red"
                    variant="solid"
                    type="submit"
                    size="sm"
                    fontWeight="500"
                    onClick={() => handleRejected(leave.employee_id)}
                  >
                    Reject
                  </Button>
                  <Button
                    name="approve"
                    id="approve"
                    colorScheme="green"
                    variant="solid"
                    type="submit"
                    size="sm"
                    fontWeight="500"
                    onClick={() => handleApproved(leave.employee_id)}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
