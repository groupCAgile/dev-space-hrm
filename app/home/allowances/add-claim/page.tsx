import React from "react";
import AddPayrollClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function AddPayrollPage() {
    const db = await getDb();

    return <AddPayrollClientPage />;
}
