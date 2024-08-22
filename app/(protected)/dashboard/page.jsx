import React from "react";
import TaskLayout from "@/layouts/TaskLayout";

async function DashboardPage() {
  return (
    <main className="flex justify-center w-full h-screen">
      <TaskLayout />
    </main>
  );
}

export default DashboardPage;
