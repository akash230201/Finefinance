import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-4">
      <h1 className="text-6xl font-bold gradient-title">Dashboard</h1>

      {/* dashboard content */}
      <Suspense fallback={<BarLoader />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
