"use client";

import { Avatar, AvatarBadge, Button, Input, Select } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function AddPayrollPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    emp_id: "",
    allo_type: "",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/allowances", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Successfully added information!");
        router.push("/home/admin/allowances");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Could not add information, Try again!");
      console.error("Error adding information", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center mt-4">
      <div className="w-2/5 h-auto shadow-2xl p-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-[16px] pb-10">
            <a className="cursor-pointer" onClick={() => router.back()}>
              <ArrowBackIcon color="blue.500" boxSize="28px" />
            </a>
            <h1 className="text-xl font-bold">New Claim</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="emp_id">Employee Id</label>
                  <Input
                    id="emp_id"
                    type="text"
                    placeholder="Employee Id"
                    required
                    isRequired
                    value={formData.emp_id}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 block">
                  <label htmlFor="allowance-type">Allowance Type</label>
                  <Select
                    id="allo_type"
                    placeholder="Select the type"
                    required
                    isRequired
                    value={formData.allo_type}
                    onChange={handleChange}
                  >
                    <option value="Educational">Educational Allowance</option>
                    <option value="Maternity">Maternity Allowance</option>
                    <option value="Health">Health Bonus</option>
                    <option value="Lieu-Leave">Lieu Leave Conversion</option>
                    <option value="Entertainment">
                      Entertainment Allowance
                    </option>
                  </Select>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="amount">Amount</label>
                  <Input
                    id="amount"
                    type="text"
                    placeholder="Enter allowance amount in $"
                    required
                    isRequired
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pt-8">
                <Button
                  colorScheme="blue"
                  variant="solid"
                  className="w-2/3"
                  type="submit"
                >
                  Add claim
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
