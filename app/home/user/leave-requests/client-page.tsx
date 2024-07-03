"use client";

import {
  Button,
  Tag,
  TagLabel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stat,
  StatNumber,
  StatHelpText,
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
      const res = await fetch("/api/leave-request?employeeId=E126", {
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

  useEffect(() => {
    loadLeaves();
  }, []);

  return (
    <div className="p-8 bg-white-600 min-h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-20 ml-64 mr-8 max-w-full">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">My Leaves</h1>
        <Link href={"/home/user/leave-requests/add-leave"}>
          <Button size="sm" colorScheme="blue">
            + Apply Leave
          </Button>
        </Link>
      </div>

      <div className="flex space-x-2 mb-4">
        <Stat className="px-4 py-2 bg-blue-100 rounded-xl">
          <StatNumber>21</StatNumber>
          <StatHelpText>Available Casual Leaves</StatHelpText>
        </Stat>
        <Stat className="px-4 py-2 bg-blue-100 rounded-xl">
          <StatNumber>05</StatNumber>
          <StatHelpText>Available Medical Leaves</StatHelpText>
        </Stat>
        <Stat className="px-4 py-2 bg-rose-100 rounded-xl">
          <StatNumber>11</StatNumber>
          <StatHelpText>Casual Leaves Taken</StatHelpText>
        </Stat>
        <Stat className="px-4 py-2 bg-rose-100 rounded-xl">
          <StatNumber>03</StatNumber>
          <StatHelpText>Medical Leaves Taken</StatHelpText>
        </Stat>
      </div>

      <div className="flex justify-between mt-12 mb-6">
        <h1 className="text-xl font-semibold">Leave Records</h1>
      </div>

      <div className="overflow-x-auto">
        <TableContainer>
          <Table variant="simple">
            <Thead className="text-xs font-medium text-gray-100">
              <Tr>
                <Th>Apply Date</Th>
                <Th>Leave Type</Th>
                <Th>From Date</Th>
                <Th>To Date</Th>
                <Th>No of Days</Th>
                <Th>Leave Balance</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {leaves.map((leave) => (
                <Tr key={leave._id}>
                  <Td>{leave.start_date}</Td>
                  <Td>{leave.leave_type}</Td>
                  <Td>{leave.start_date}</Td>
                  <Td>{leave.end_date}</Td>
                  <Td>{leave.no_days}</Td>
                  <Td>{leave.leave_balance}</Td>
                  <Td>
                    <Tag
                      size="md"
                      key="md"
                      variant="subtle"
                      colorScheme={
                        leave.status === "Approved" ? "green" : "yellow"
                      }
                    >
                      <TagLabel>{leave.status}</TagLabel>
                    </Tag>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
