import React from "react";
import UpdateEmployeePage from "./client-page";
import { getUserInfo } from "@/lib/actions/user";

export default async function EmployeePage() {
  const user = await getUserInfo();

  return <UpdateEmployeePage user={user.data} />;
}
