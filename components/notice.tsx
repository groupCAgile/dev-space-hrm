import { Button, Spinner, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Notice() {
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
          Notices for Employees
        </Text>
        <Link href={"/home/admin/notices"}>
          <Button colorScheme="blue">Add Notice</Button>
        </Link>
      </div>
      <div className="flex flex-col w-auto h-4/5 overflow-y-scroll space-y-2">
        {notices.map((notice: any) => (
          <div key={notice._id} className="bg-[#F4F7FF] p-2">
            <Text as="b">{notice.title}</Text>
            <Text fontSize="xs" color="gray">
              {notice.date}
            </Text>
            <br />
            <span>{notice.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
