"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NoticeAllClientPage() {

    return (
        <form
            className="self-stretch shadow-lg p-10 rounded-lg bg-grayscale-0 flex flex-col ml-72 mr-40 justify-center my-20 pl-6 box-border gap-[24px] max-w-full lg:pt-5 lg:pb-5 lg:box-border"
        >
            <div className="flex flex-row gap-[16px] pb-10">
                <a>
                    <ArrowBackIcon color="blue.500" boxSize="28px" />
                </a>
                <h1 className="text-2xl font-bold">Add Notice</h1>
            </div>
            <div className="flex flex-col items-start justify-start gap-[40px] max-w-full text-xs pb-10">
                <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
                    <div className="flex-1 flex flex-col min-w-[133px]">
                        <h4 className="text-sm font-regular leading-[40px]">Enter your Notice</h4>
                        <Textarea
                            id="firstName"
                            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
                            variant="filled"
                            required
                            placeholder='Type your message here ...'
                            size='md'
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end gap-[16px] max-w-full pb-10">
                <Button name="reset" id="reset" colorScheme="blue" variant="outline">
                    Reset
                </Button>
                <Button
                    name="save"
                    id="save"
                    colorScheme="blue"
                    variant="solid"
                    type="submit"
                >
                    Publish Notice
                </Button>
            </div>
        </form>
    );
}
