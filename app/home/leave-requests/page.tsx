import React from "react";
import LeaveClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function LeavePage() {
    const db = await getDb();

    return <LeaveClientPage />;
}
