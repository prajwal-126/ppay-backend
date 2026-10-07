/*
  Warnings:

  - A unique constraint covering the columns `[userId,clientTransactionId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Transaction_userId_clientTransactionId_key" ON "Transaction"("userId", "clientTransactionId");
