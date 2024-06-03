"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddEmployeeClientPage() {

  return (
    <div className="self-stretch shadow-lg p-10 rounded-lg bg-grayscale-0 flex flex-col ml-72 mr-40 justify-center my-20 pl-6 box-border gap-[24px] max-w-full lg:pt-5 lg:pb-5 lg:box-border">
      <div className="flex flex-row gap-[16px] pb-10">
        <a><ArrowBackIcon color="blue.500" boxSize="28px" /></a>
        <h1 className="text-2xl font-bold">Add Employee</h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-[40px] max-w-full text-xs pb-10">
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">First Name</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">Last Name</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter Last Name"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[28px]">Preferred Name</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter Preferred Name"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">NIC</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Ex: 000000000V"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Nationality</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter Nationality"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Date of Birth</h4>
          <Input
            className="self-stretch max-w-full flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            type="dateTime-local"
            placeholder="Enter Date of Birth"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Gender</h4>
            <Select
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Gender"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Martial Status</h4>
            <Select
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Martial Status"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Address</h4>
          <Input
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            placeholder="Enter Employee Address"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Phone</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Ex: +94 079 000 0000"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Email</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Ex: johndoe@xyz.mail"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Emergency Contact Person</h4>
          <Input
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            placeholder="Enter Contact Person Name"
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Relationship</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter Contact Person Relationship"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Contact Person Phone</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Ex: +94 079 000 0000"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Position</h4>
            <Input
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              placeholder="Enter Employee Position"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Department</h4>
            <Select
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Department"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Date Joined</h4>
            <Input
              className="self-stretch max-w-full flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              type="dateTime-local"
              placeholder="Enter Date of Birth"
            />
          </div>
          <div className="flex-1 flex flex-col min-w-[181px]">
            <h4 className="text-sm font-regular leading-[28px]">Status</h4>
            <Select
              className="flex-1 font-inter text-sm min-w-[133px] px-[15px]"
              variant="filled"
              placeholder="Select Current Status"
            />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Manager ID</h4>
          <Input
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            placeholder="Enter Manager Id"
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-[16px] max-w-full pb-10">
        <Button name="cancel" id="cancel" colorScheme="blue" variant="outline">
          Cancel
        </Button>
        <Button name="save" id="save" colorScheme="blue" variant="solid">
          Save Details
        </Button>
      </div>
    </div>
  );
}
