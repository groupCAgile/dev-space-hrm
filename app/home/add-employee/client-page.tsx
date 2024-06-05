"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddEmployeeClientPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    preferredName: "",
    nic: "",
    nationality: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: "",
    phone: "",
    email: "",
    emergencyContactPerson: "",
    relationship: "",
    contactPersonPhone: "",
    position: "",
    department: "",
    dateJoined: "",
    status: "",
    managerId: "",
  });

  const handleChange = (e: any) => {
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Successfully added employee!");
        router.push("/home");
      } else {
        toast.error("Could not add employee, Try again!");
        setError(data.message);
      }
    } catch (error) {
      toast.error("Could not add employee, Try again!");
      console.error("Error adding employee", error);
    }
  };

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Invalid Credentials</AlertTitle>
      </Alert>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch shadow-lg p-10 rounded-lg bg-grayscale-0 flex flex-col ml-72 mr-40 justify-center my-20 pl-6 box-border gap-[24px] max-w-full lg:pt-5 lg:pb-5 lg:box-border"
    >
      <div className="flex flex-row gap-[16px] pb-10">
        <a>
          <ArrowBackIcon color="blue.500" boxSize="28px" />
        </a>
        <h1 className="text-2xl font-bold">Add Employee</h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-[40px] max-w-full text-xs pb-10">
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">First Name</h4>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">Last Name</h4>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">
              Preferred Name
            </h4>
            <Input
              id="preferredName"
              value={formData.preferredName}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter Preferred Name"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">NIC</h4>
            <Input
              id="nic"
              value={formData.nic}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Ex: 000000000V"
              type="text"
              pattern="^\d{10}$|^\d{9}V$"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Nationality</h4>
            <Input
              id="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter Nationality"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Date of Birth</h4>
          <Input
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            className="self-stretch max-w-full flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            type="date"
            required
            placeholder="Enter Date of Birth"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Gender</h4>
            <Select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Gender"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">
              Marital Status
            </h4>
            <Select
              id="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Marital Status"
              required
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
            </Select>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Address</h4>
          <Input
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            required
            placeholder="Enter Employee Address"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Phone</h4>
            <Input
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Ex: +94 079 000 0000"
              type="number"
              pattern="[0-9+ ]*"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Email</h4>
            <Input
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Ex: johndoe@xyz.mail"
              type="email"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">
            Emergency Contact Person
          </h4>
          <Input
            id="emergencyContactPerson"
            value={formData.emergencyContactPerson}
            onChange={handleChange}
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            required
            placeholder="Enter Contact Person Name"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">
              Relationship
            </h4>
            <Input
              id="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter Contact Person Relationship"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">
              Contact Person Phone
            </h4>
            <Input
              id="contactPersonPhone"
              value={formData.contactPersonPhone}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Ex: +94 079 000 0000"
              type="number"
              pattern="[0-9+ ]*"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Position</h4>
            <Input
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Enter Employee Position"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Department</h4>
            <Select
              id="department"
              value={formData.department}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Department"
              required
            >
              <option value="HR">HR</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
            </Select>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Date Joined</h4>
            <Input
              id="dateJoined"
              value={formData.dateJoined}
              onChange={handleChange}
              className="self-stretch max-w-full flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              type="date"
              required
              placeholder="Enter Date Joined"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Status</h4>
            <Select
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Current Status"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Manager ID</h4>
          <Input
            id="managerId"
            value={formData.managerId}
            onChange={handleChange}
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            required
            placeholder="Enter Manager Id"
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-[16px] max-w-full pb-10">
        <Button name="cancel" id="cancel" colorScheme="blue" variant="outline">
          Cancel
        </Button>
        <Button
          name="save"
          id="save"
          colorScheme="blue"
          variant="solid"
          type="submit"
        >
          Save Details
        </Button>
      </div>
    </form>
  );
}
