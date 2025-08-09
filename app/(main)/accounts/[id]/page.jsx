import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import TransactionTable from "../_components/transaction-table";

const AccountPage = async ({ params }) => {
  const accountData = await getAccountWithTransactions(params.id);

  if (!accountData) {
    notFound();
  }

  const { ...account } = accountData;

  return (
    <div className="space-y-8 px-5 ">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold capitalize">
            {account.name}
          </h1>
          <p className="text-muted-foreground text-sm">
            {account.type.charAt(0) + account.type.slice(1).toLowerCase()}{" "}
            Account
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-2xl sm:text-3xl font-bold">
            ${parseFloat(account.balance).toFixed(2)}
          </div>
          <p className="text-sm sm:text-md text-muted-foreground">
            {account._count.transactions} Transactions
          </p>
        </div>
      </div>
      {/* chart section can be added here */}
      {/* transactions section can be added here */}
      <Suspense fallback={<BarLoader />}>
        <TransactionTable transactions={account.transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;
