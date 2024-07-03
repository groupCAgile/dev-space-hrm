import React from "react";
import TimeRecPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function TimeRec() {
    const db = await getDb();

    return <TimeRecPage />;
}
