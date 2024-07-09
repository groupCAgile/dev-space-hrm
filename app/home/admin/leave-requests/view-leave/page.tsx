import React from "react";
import ViewLeaveClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function ViewLeavePage() {
    const db = await getDb();

    return <ViewLeaveClientPage />;
}
