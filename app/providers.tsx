"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      {children}
      <Toaster
        containerStyle={{
          zIndex: 999999,
        }}
      />
    </ChakraProvider>
  );
}
