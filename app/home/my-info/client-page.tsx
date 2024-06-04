"use client";

import { Avatar, AvatarBadge, Button, Input } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function MyInfoClientPage({ user }) {
  const router = useRouter();

  const formatDate = (date: Date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const [formData, setFormData] = useState({
    first_name: user.first_name || "",
    nic: user.nic || "",
    date_of_birth: user.date_of_birth ? formatDate(user.date_of_birth) : "",
    address: user.address || "",
    position: user.position || "",
    role: user.role || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/employee", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: user.employee_id,
          data: formData,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        toast.success("Successfully updated details!");
      } else {
        toast.error("Could not update, Try again!");
      }
    } catch (error) {
      toast.error("Could not update, Try again!");
      console.error("Error updating employee", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center mt-14">
      <div className="w-2/5 h-auto shadow-2xl p-10">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl mb-4">Personal Info</h1>
          <FaRegTrashAlt size={20} color="red" cursor="pointer" />
        </div>
        <div className="flex justify-between">
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div>
                <div className="mb-2 block">
                  <label htmlFor="first_name">Full Name</label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="nic">National ID</label>
                  <Input
                    id="nic"
                    type="text"
                    placeholder="National ID number"
                    required
                    value={formData.nic}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="date_of_birth">Date of Birth</label>
                  <Input
                    id="date_of_birth"
                    type="date"
                    placeholder="DD/MM/YY"
                    required
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="address">Address</label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="position">Position</label>
                  <Input
                    id="position"
                    type="text"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="role">Role</label>
                  <Input
                    id="role"
                    type="text"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
              </div>
              <Button
                colorScheme="blue"
                variant="solid"
                className="w-2/3"
                type="submit"
              >
                Update
              </Button>
            </form>
          </div>
          <div>
            <Avatar
              size="2xl"
              name="Segun Adebayo"
              src="https://bit.ly/dan-abramov"
            >
              <AvatarBadge boxSize="0.75em" bg="green.500" />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
