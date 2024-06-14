import React from "react";
import UpdatePayrollClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function UpdatePayrollPage() {
    const db = await getDb();

    return <UpdatePayrollClientPage />;
}
