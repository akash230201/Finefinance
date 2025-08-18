import { db } from "../prisma";
import { inngest } from "./client";
import { startOfMonth, endOfMonth } from "date-fns";

export const checkBudgetAlert = inngest.createFunction(
  { name: "Check Budget Alert" },
  { cron: "0 */6 * * *" }, // Every 6 hours
  async ({ step }) => {
    const budgets = await step.run("fetch-budget", async () => {
      return await db.budget.findMany({
        include: {
          user: {
            include: {
              accounts: {
                where: {
                  isDefault: true,
                },
              },
            },
          },
        },
      });
    });

    for (const budget of budgets) {
      const defaultAccount = budget.user.accounts[0];
      if (!defaultAccount) continue; // Skip if no default account

      await step.run(`check-budget-${budget.id}`, async () => {
        // Define the current month's start and end dates
        const currentDate = new Date();
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(currentDate);

        const expenses = await db.transaction.aggregate({
          where: {
            userId: budget.user.id,
            accountId: defaultAccount.id,
            type: "EXPENSE",
            date: {
              gte: monthStart,
              lte: monthEnd,
            },
          },
          _sum: {
            amount: true,
          },
        });

        const totalExpenses = expenses._sum.amount?.toNumber() || 0;
        // Convert budget.amount to a number if it's a Decimal
        const budgetLimit =
          typeof budget.amount === "object" && budget.amount.toNumber
            ? budget.amount.toNumber()
            : Number(budget.amount);

        // Calculate percentage used correctly with proper conversion
        const percentageUsed = (totalExpenses / budgetLimit) * 100;

        console.log(
          `Total expenses: ${totalExpenses}, Budget limit: ${budgetLimit}, Percentage used: ${percentageUsed}%`
        );

        if (
          percentageUsed >= 80 &&
          (!budget.lastAlertSent ||
            isNewMonth(new Date(budget.lastAlertSent), new Date()))
        ) {
          //send alert to Email
          console.log(
            `Alert threshold reached! ${percentageUsed}% of budget used. Last alert sent: ${budget.lastAlertSent}`
          );

          try {
            //Update lastAlertSent
            const updatedBudget = await db.budget.update({
              where: { id: budget.id },
              data: {
                lastAlertSent: new Date(),
              },
            });
            console.log(
              `Successfully updated lastAlertSent for budget ${budget.id}:`,
              updatedBudget.lastAlertSent
            );
          } catch (error) {
            console.error(
              `Failed to update lastAlertSent for budget ${budget.id}:`,
              error
            );
          }
        }
      });
    }
  }
);

function isNewMonth(lastAlertDate, currentDate) {
  return (
    lastAlertDate.getMonth() !== currentDate.getMonth() ||
    lastAlertDate.getFullYear() !== currentDate.getFullYear()
  );
}
