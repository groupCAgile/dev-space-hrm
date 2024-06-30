"use client";

import { Button, Input, Select, Textarea, Alert, AlertIcon, } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ArrowBackIcon, InfoIcon } from "@chakra-ui/icons";

export default function ApplyLeaveClientPage() {
  return (
    <div className="w-full h-full flex items-center justify-center mt-4">
      <div className="w-2/5 h-auto shadow-2xl p-10">
        <div className=" justify-between items-center">
          <div className="flex flex-row gap-[16px] mb-8">
            <a className="cursor-pointer" href={"/home/user/leave-requests"}>
              <ArrowBackIcon color="blue.500" boxSize="28px" />
            </a>
            <h1 className="text-xl font-bold">Apply Leave</h1>
          </div>
          <Alert status='info' className="border-0 rounded-lg mb-8 text-sky-900">
            <AlertIcon />
            You have 7 days of leave remaining!
          </Alert>
        </div>
        <div className="flex justify-between">
          <div>
            <form className="flex flex-col space-y-3">
              <div>
                <div className="mb-2 block">
                  <label htmlFor="leave-type">Leave Type</label>
                  <Select
                    id="leave_type"
                    placeholder="Select the type"
                    required
                    isRequired
                  >
                    <option value="Casual">Casual Leave</option>
                    <option value="Medical">Medical Leave</option>
                    <option value="Maternity">Maternity Leave</option>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between space-x-8">
                <div className="mb-2 block">
                  <label htmlFor="from">From Date</label>
                  <Input
                    id="from"
                    type="date"
                    required
                    isRequired
                  />
                </div>
                <div className="mb-2 block">
                  <label htmlFor="to-date">To Date</label>
                  <Input
                    id="to_date"
                    type="date"
                    required
                    isRequired
                  />
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <label htmlFor="comment">Comment</label>
                  <Textarea
                    id="comment"
                    className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
                    required
                    placeholder="Type your message here ..."
                    size="md"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-end gap-[16px] max-w-full pt-10">
                <Button name="cancel" id="cancel" colorScheme="blue" variant="outline">
                  Cancel
                </Button>
                <Button
                  name="apply"
                  id="apply"
                  colorScheme="blue"
                  variant="solid"
                  type="submit"
                >
                  Apply Leave
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
