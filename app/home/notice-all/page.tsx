import React from "react";
import NoticeAllClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function NoticeAll() {
    const db = await getDb();

    return <NoticeAllClientPage />;
}
