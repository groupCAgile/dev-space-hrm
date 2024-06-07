"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NoticeAllClientPage() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/notice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          message: message,
          date: new Date().toDateString(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Successfully added notice!");
        setTitle("");
        setMessage("");
      } else {
        toast.error("Could not add, Try again!");
      }
    } catch (error) {
      toast.error("Could not add, Try again!");
      console.error("Error adding notice", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch shadow-lg p-10 rounded-lg bg-grayscale-0 flex flex-col ml-72 mr-40 justify-center my-20 pl-6 box-border gap-[24px] max-w-full lg:pt-5 lg:pb-5 lg:box-border"
    >
      <div className="flex flex-row gap-[16px] pb-10">
        <a>
          <ArrowBackIcon color="blue.500" boxSize="28px" />
        </a>
        <h1 className="text-2xl font-bold">Add Notice</h1>
      </div>
      <div className="flex flex-col items-start justify-start gap-[40px] max-w-full text-xs pb-10">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start min-w-full">
          <h4 className="text-sm font-regular leading-[28px]">Notice Title</h4>
          <Input
            id="title"
            className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
            variant="filled"
            required
            placeholder="Enter notice title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap gap-[40px]">
          <div className="flex-1 flex flex-col min-w-[133px]">
            <h4 className="text-sm font-regular leading-[40px]">Message</h4>
            <Textarea
              id="message"
              className="flex-1 font-inter text-sm min-w-[133px] py-2.5 px-[15px]"
              variant="filled"
              required
              placeholder="Type your message here ..."
              size="md"
              onChange={(e) => setMessage(e.target.value)}
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
