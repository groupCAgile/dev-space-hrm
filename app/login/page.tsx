import React from "react";
import LoginClientPage from "./client-page";
import { getDb } from "@/lib/database";

export default async function LoginPage() {
  const db = await getDb();

  return <LoginClientPage />;
}
