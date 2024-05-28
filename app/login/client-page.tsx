"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginClientPage() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const handleClick = () => setShow(!show);

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/home");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/2 h-full flex items-center">
        <Image src="/assets/Login.png" height={1000} width={1000} alt="login" />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="flex flex-col w-2/3 justify-start">
          <Image
            src="/assets/Logo.png"
            className="mb-6"
            height={56}
            width={470}
            alt="login"
          />
          <h1 className="text-3xl font-semibold">Welcome Back ! </h1>
          <p className="text-lg">Welcome to DevSpace HRM System. </p>
          <p className="text-lg">
            Please enter your login details below to start.
          </p>
          <div className="mt-8 space-y-6">
            {error && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Invalid Credentials</AlertTitle>
              </Alert>
            )}
            <Input
              variant="filled"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputGroup size="md">
              <Input
                variant="filled"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <div className="flex justify-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <span className="text-blue-700 cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <Button
              colorScheme="blue"
              variant="solid"
              className="w-full"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
