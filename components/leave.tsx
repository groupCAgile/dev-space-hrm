import { Avatar, Button, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Leave() {
  const [notices, setNotices] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadNotices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/notice", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setNotices(data.data);
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
    loadNotices();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner size="lg" color="blue" />;
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <Text as="b" fontSize="xl">
          Employees on Leave Today
        </Text>
        <Link href={"/home/view-employee"}>
          <Button colorScheme="blue">View All Employees</Button>
        </Link>
      </div>
      <div className="flex flex-col w-auto h-4/5 space-y-2">
        <div className="bg-[#F4F7FF] p-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <div>
                <Text as="b">Jaden Jansz</Text>
                <Text fontSize="xs" color="gray">
                  Software Engineer
                </Text>
              </div>
            </div>
            <div className="bg-red-500 p-1 rounded-md">
              <Text as="b" color="white">
                FULL DAY
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
