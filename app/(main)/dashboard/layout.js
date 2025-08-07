import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const DashboardLayout = () => {
  return (
    <div className="px-4">
      <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl pb-4 font-bold tracking-tight leading-tight">
        <span className="relative">
          <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-bold tracking-tight">
            Dashboard
          </span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary/30 to-secondary/30 -z-0 transform -rotate-1"></span>
        </span>
      </h1>
      <Suspense fallback={<BarLoader />}>
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
