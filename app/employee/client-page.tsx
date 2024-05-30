"use client";

// import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
    Table
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EmployeeClientPage() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const loadEmployees = async () => {
    try {
      const res = await fetch("/api/employee", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        router.push("/employee");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
        All Employees
    </div>
  );
}
