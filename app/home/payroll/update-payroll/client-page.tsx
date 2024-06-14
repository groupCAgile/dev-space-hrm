"use client";

import { Avatar, AvatarBadge, Button, Input, Select } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdatePayrollPage({ user }: any) {


    return (
        <div className="w-full h-full flex items-center justify-center mt-4">
            <div className="w-2/5 h-auto shadow-2xl p-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-[16px] pb-10">
                        <a className="cursor-pointer">
                            <ArrowBackIcon color="blue.500" boxSize="28px" />
                        </a>
                        <h1 className="text-xl font-bold">Payment Details</h1>
                    </div>
                    <FaRegTrashAlt className="mb-8" size={20} color="red" cursor="pointer" />
                </div>
                <div className="flex justify-between">
                    <div>
                        <form className="flex flex-col space-y-3">
                            <div>
                                <div className="mb-2 block">
                                    <label htmlFor="emp_id">Employee Id</label>
                                    <Input
                                        id="emp_id"
                                        type="text"
                                        placeholder="Employee Id"
                                        required
                                        isRequired
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
                                    />
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
                                    Update Details
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
