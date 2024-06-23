"use client";

import {
  Avatar,
  AvatarBadge,
  Button,
  Input,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegTrashAlt, FaChevronLeft } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateEmployeePage({ user }: any) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const formatDate = (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    const year = d.getFullYear();
    return [year, month, day].join("-");
  };

  const getQueryParams = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return {
        id: params.get("id"),
        fname: params.get("fname"),
        lname: params.get("lname"),
        nic: params.get("nic"),
        date_of_birth: params.get("dob"),
        address: params.get("address"),
        position: params.get("pos"),
        role: params.get("role"),
        img: params.get("img"),
      };
    }
    return {};
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    nic: "",
    date_of_birth: "",
    address: "",
    position: "",
    role: "",
    img: "",
  });

  useEffect(() => {
    const queryParams = getQueryParams();
    setFormData({
      first_name: queryParams.fname || "",
      last_name: queryParams.lname || "",
      nic: queryParams.nic || "",
      date_of_birth: queryParams.date_of_birth
        ? formatDate(queryParams.date_of_birth)
        : "",
      address: queryParams.address || "",
      position: queryParams.position || "",
      role: queryParams.role || "",
      img: queryParams.img || "",
    });
  }, []);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    const queryParams = getQueryParams();
    e.preventDefault();
    try {
      const response = await fetch("/api/employee", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: queryParams.id,
          data: formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/home/view-employee");
        toast.success("Successfully updated details!");
      } else {
        toast.error("Could not update, Try again!");
      }
    } catch (error) {
      toast.error("Could not update, Try again!");
      console.error("Error updating employee", error);
    }
  };

  const handleDelete = async () => {
    const queryParams = getQueryParams();
    try {
      const response = await fetch("/api/employee", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeId: queryParams.id,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/home/view-employee");
        toast.success("Successfully deleted!");
      } else {
        toast.error("Could not delete, Try again!");
      }
    } catch (error) {
      toast.error("Could not delete, Try again!");
      console.error("Error deleting employee", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center mt-14">
      <div className="w-2/5 h-auto shadow-2xl p-10">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link href={"./view-employee"}>
              <FaChevronLeft
                className=""
                size={20}
                color="black"
                cursor="pointer"
              />
            </Link>
            <h1 className="ms-5 font-semibold text-xl mb-4">Employee</h1>
          </div>
          <FaRegTrashAlt
            size={20}
            color="red"
            cursor="pointer"
            onClick={onOpen}
          />
        </div>
        <div className="mt-5 flex justify-between">
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
                  <Select
                    id="role"
                    placeholder="Select option"
                    value={formData.role}
                    onChange={handleChange}
                    isRequired
                    required
                  >
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="User">User</option>
                  </Select>
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
            <Avatar size="2xl" name="Segun Adebayo" src={formData.img}>
              <AvatarBadge boxSize="0.75em" bg="green.500" />
            </Avatar>
          </div>
        </div>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirmation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete {formData.first_name}{" "}
              {formData.last_name} ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  handleDelete();
                }}
                ml={3}
              >
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}
