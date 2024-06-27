import React from "react";
import PayrollClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function PayrollPage() {
    const db = await getDb();

    return <PayrollClientPage />;
}
