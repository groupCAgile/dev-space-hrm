import { Avatar, Button, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Leave() {
  const [leaves, setLeaves] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadLeaves = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leave", {
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

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner size="lg" color="blue" />;
      </div>
    );
  }

  if (leaves.length === 0) {
    return (
      <>
        <h1>No Leaves today</h1>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col w-auto h-4/5 space-y-2">
        {leaves.map((leave) => (
          <div key={leave._id} className="bg-[#F4F7FF] p-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <div>
                  <Text as="b">{leave.employee_name}</Text>
                  <Text fontSize="xs" color="gray">
                    {leave.position}
                  </Text>
                </div>
              </div>
              <div className="bg-red-500 p-1 rounded-md">
                <Text as="b" color="white">
                  {leave.range}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
