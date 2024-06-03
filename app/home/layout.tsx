import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";

export default async function WalletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex flex-col antialiased">
      <Header />
      <Sidebar />
      <div className="h-full w-full">{children}</div>
    </div>
  )
}