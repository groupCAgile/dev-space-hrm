import React from "react";
import AddEmployeeClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function AddEmployee() {
  const db = await getDb();

  return <AddEmployeeClientPage />;
}
