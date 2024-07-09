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
    acc_no: "",
    acc_name: "",
    bank: "",
    branch: "",
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
      const response = await fetch("/api/payroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Successfully added information!");
        router.push("/home/admin/payroll");
      } else {
        toast.error("Could not add information, Try again!");
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
            <h1 className="text-xl font-bold">New Payment Details</h1>
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
                  <label htmlFor="acc_no">Account No</label>
                  <Input
                    id="acc_no"
                    type="text"
                    placeholder="Enter bank account number"
                    required
                    isRequired
                    value={formData.acc_no}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="acc_name">Name on Account</label>
                  <Input
                    id="acc_name"
                    type="text"
                    placeholder="Enter name on your account"
                    required
                    isRequired
                    value={formData.acc_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="bank">Bank</label>
                  <Select
                    id="bank"
                    placeholder="Select the bank"
                    required
                    isRequired
                    value={formData.bank}
                    onChange={handleChange}
                  >
                    <option value="Sampath">Sampath</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Bank Of Ceylon">Bank Of Ceylon</option>
                  </Select>
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="branch">Branch</label>
                  <Input
                    id="branch"
                    type="text"
                    placeholder="Enter account branch"
                    required
                    isRequired
                    value={formData.branch}
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
                  Save Details
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
