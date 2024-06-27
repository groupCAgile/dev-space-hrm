"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { redirect, usePathname } from "next/navigation";

export default function WalletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="h-screen flex flex-col antialiased">
      <Header />
      <Sidebar user={pathname} />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
