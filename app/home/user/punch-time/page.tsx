import React from "react";
import PunchTimePage from "./client-page";
import { getDb } from "@/lib/database";

export default async function PunchTime() {
    const db = await getDb();

    return <PunchTimePage />;
}
