import { redirect } from "next/navigation";

export default async function WalletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
