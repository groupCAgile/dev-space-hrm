import React from "react";
import UpdatePayrollClientPage from "./client-page";
import { getDb } from "@/lib/database";
import { getPayrollInfo } from "@/lib/actions/user";

export default async function UpdatePayrollPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const user = await getPayrollInfo(searchParams.id);

  return <UpdatePayrollClientPage user={user} />;
}
