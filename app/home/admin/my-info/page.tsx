import React from "react";
import MyInfoClientPage from "./client-page";
import { getUserInfo } from "@/lib/actions/user";

export default async function MyInfoPage() {
  const user = await getUserInfo();

  return <MyInfoClientPage user={user.data} />;
}
