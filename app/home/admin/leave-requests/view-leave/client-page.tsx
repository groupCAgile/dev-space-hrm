"use client";

import { Avatar, AvatarBadge, Button, Input, Select, Tag, TagLabel } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function ViewLeaveClientPage() {

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-2/5 h-auto shadow-2xl p-10">
                <div className="flex justify-between items-center pb-10">
                    <div className="flex flex-row gap-[16px]">
                        <a className="cursor-pointer">
                            <ArrowBackIcon color="blue.500" boxSize="28px" />
                        </a>
                        <h1 className="text-xl font-bold">Leave Request</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></div>
                        <h1 className="font-regular text-md">Pending</h1>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <form className="flex flex-col space-y-3">
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="emp_id" className="font-regular text-gray-400 text-m mb-4">Employee ID</label>
                                    <h1 className="font-semibold text-lg mb-4">12345</h1>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="full_name" className="font-regular text-gray-400 text-m mb-4">Full Name</label>
                                    <h1 className="font-semibold text-lg mb-4">James Anderson</h1>
                                </div>
                            </div>
                            <div className="flex w-[520px] justify-start items-center">
                                <div className="mb-2 block mr-12">
                                    <label htmlFor="start_date" className="font-regular text-gray-400 text-m mb-4">From</label>
                                    <h1 className="font-semibold text-lg mb-4">19 June 2024</h1>
                                </div>
                                <div className="mb-2 block mr-12">
                                    <label htmlFor="end_date" className="font-regular text-gray-400 text-m mb-4">To</label>
                                    <h1 className="font-semibold text-lg mb-4">21 June 2024</h1>
                                </div>
                                <div className="mb-2 block mr-12">
                                    <Tag size="lg" key="lg" variant='subtle' colorScheme='red'>
                                        <TagLabel>Full Day</TagLabel>
                                    </Tag>
                                </div>
                            </div>
                            <div className="flex w-[520px] justify-start items-center">
                                <div className="mb-2 block mr-12">
                                    <label htmlFor="leaves_available" className="font-regular text-gray-400 text-m mb-4">Leaves Available</label>
                                    <h1 className="font-semibold text-lg mb-4">12</h1>
                                </div>
                                <div className="mb-2 block mr-12">
                                    <label htmlFor="type" className="font-regular text-gray-400 text-m mb-4">Leave Type</label>
                                    <h1 className="font-semibold text-lg mb-4">Medical Leave</h1>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[16px] pt-4">
                                <Button
                                    name="reject"
                                    id="reject"
                                    colorScheme="red"
                                    variant="solid"
                                    type="submit"
                                    size="lg"
                                    fontWeight="500"
                                >
                                    Reject
                                </Button>
                                <Button
                                    name="approve"
                                    id="approve"
                                    colorScheme="green"
                                    variant="solid"
                                    type="submit"
                                    size="lg"
                                    fontWeight="500"
                                >
                                    Approve
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
