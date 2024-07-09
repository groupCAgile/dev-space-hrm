import { Button, Avatar, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function TimeTracking() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between items-center mb-10">
        <Text as="b" fontSize="xl">
          Time Tracking (This Week)
        </Text>
        <Link href={"/home/admin/view-employee"}>
          <Button colorScheme="blue">View All</Button>
        </Link>
      </div>
      <div>
        <Image objectFit="cover" src="/assets/time.png" alt="Dan Abramov" />
      </div>
    </div>
  );
}
