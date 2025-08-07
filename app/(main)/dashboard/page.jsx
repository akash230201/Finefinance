import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="px-4">
      {/* budgetProgress */}

      {/* Overview */}

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        <CreateAccountDrawer>
          <Card
            className={
              "cursor-pointer hover:shadow-lg transition-shadow duration-200 ease-in-out"
            }
          >
            <CardContent
              className={
                "flex flex-col items-center justify-center h-full text-center space-y-2 text-muted-foreground"
              }
            >
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>
      </div>
    </div>
  );
};

export default DashboardPage;
