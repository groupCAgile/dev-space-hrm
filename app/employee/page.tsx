import React from "react";
import EmployeeClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function EmployeePage() {
  const db = await getDb();

  return <EmployeeClientPage />;
}
