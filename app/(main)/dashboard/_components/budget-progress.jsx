"use client";

import { updateBudget } from "@/actions/budget";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import useFetch from "@/hooks/use-fetch";
import { Check, Pencil, X } from "lucide-react";
import React, { useEffect } from "react";
import { toast } from "sonner";

const BudgetProgress = ({ initialBudget, currentExpenses }) => {
  const [isEnding, setIsEnding] = React.useState(false);
  const [newBudget, setNewBudget] = React.useState(
    initialBudget?.amount?.toString() || ""
  );

  // Using initialBudget.amount since initialBudget is an object
  const percentageUsed = initialBudget?.amount
    ? ((currentExpenses / initialBudget.amount) * 100).toFixed(2)
    : 0;

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid budget amount.");
      return;
    }

    // Pass amount as a direct parameter, not in an object, to match server action
    await updateBudgetFn(amount);
  };

  useEffect(() => {
    if (updatedBudget) {
      console.log("Updated budget response:", updatedBudget);
      if (updatedBudget.success) {
        setIsEnding(false);
        toast.success("Budget updated successfully.");
      } else if (updatedBudget.error) {
        toast.error(updatedBudget.error || "Failed to update budget.");
      }
    }
  }, [updatedBudget]);

  useEffect(() => {
    if (error) {
      console.error("Budget update error:", error);
      toast.error(error.message || "Failed to update budget.");
    }
  }, [error]);

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEnding(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex-1">
          <CardTitle>Monthly Budget Progress (Default Account)</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            {isEnding ? (
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="w-32"
                  placeholder="Enter Amount"
                  autoFocus
                  disabled={isLoading}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleUpdateBudget}
                  disabled={isLoading}
                >
                  <Check className="h-4 w-4 text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ) : (
              <>
                <CardDescription>
                  {initialBudget?.amount
                    ? `$${currentExpenses.toFixed(2)} 
                spent of $${initialBudget.amount.toFixed(2)}`
                    : "No budget set"}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEnding(true)}
                  className="h-6 w-6"
                >
                  <Pencil className="h-3 w-3" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {initialBudget && (
          <div className="space-y-2">
            <Progress
              value={percentageUsed}
              className={
                percentageUsed >= 90
                  ? "bg-primary/20 [&>div]:bg-red-500"
                  : percentageUsed >= 75
                  ? "bg-primary/20 [&>div]:bg-yellow-500"
                  : "bg-primary/20 [&>div]:bg-green-500"
              }
            />
            <p className="text-sm text-muted-foreground text-right">
              {percentageUsed}% Used
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
