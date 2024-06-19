"use client";

import { Spinner, Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";

export default function PayrollClientPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    loadEmployees();
  }, []);

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
        setEmployees(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-xl mt-20 ml-44 mb-5 w-full bg-white shadow-lg rounded-lg">
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">
              Employee Allowances
            </h1>
            <Link href={"/home/allowances/add-claim"}>
              <Button colorScheme="blue">+ Add Claim</Button>
            </Link>
          </div>
          <div className="relative mb-4 bg-blue-50 rounded-lg">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <div className="absolute right-2 top-2">
              <SearchIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <div className="overflow-y-auto">
              {employees.map((employee) => (
                <Link
                  key={employee.employee_id}
                  href={{
                    pathname: `payroll/update-payroll`,
                    query: { id: employee.employee_id },
                  }}
                >
                  <div
                    key={employee._id}
                    className="emp-entry flex items-center justify-between p-2 mb-2 bg-blue-50 rounded-lg"
                  >
                    <div className="flex">
                      <img
                        src={employee.imgSrc}
                        alt={employee.first_name + " " + employee.last_name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="ml-3">
                        <h2 className="text-sm font-semibold">
                          {employee.first_name + " " + employee.last_name}
                        </h2>
                        <p className="text-xs text-gray-600">
                          Educational Allowance
                        </p>
                      </div>
                    </div>
                    <div className="mr-2">
                      <h2 className="text-sm font-semibold">
                        +$60
                      </h2>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
