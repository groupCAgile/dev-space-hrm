"use client";

import { Avatar, AvatarBadge, Button, Input } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";

export default function MyInfoClientPage({ user }) {
  const formatDate = (date: Date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const [formData, setFormData] = useState({
    fullName: user.first_name || "",
    nationalId: user.nic || "",
    dob: user.date_of_birth ? formatDate(user.date_of_birth) : "",
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

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-2/5 h-auto shadow-2xl p-10">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl mb-4">Personal Info</h1>
          <FaRegTrashAlt size={20} color="red" cursor="pointer" />
        </div>
        <div className="flex justify-between">
          <div>
            <form className="flex flex-col space-y-3">
              <div>
                <div className="mb-2 block">
                  <label htmlFor="fullName">Full Name</label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="nationalId">National ID</label>
                  <Input
                    id="nationalId"
                    type="text"
                    placeholder="National ID number"
                    required
                    value={formData.nationalId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="dob">Date of Birth</label>
                  <Input
                    id="dob"
                    type="date"
                    placeholder="DD/MM/YY"
                    required
                    value={formData.dob}
                    onChange={handleChange}
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
                  />
                </div>
              </div>
              <Button colorScheme="blue" variant="solid" className="w-2/3">
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
