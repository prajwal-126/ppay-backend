import { prisma } from "../../config/db.js";
import { eventBus } from "../../events/eventBus.js";
import { EVENTS } from "../../events/eventNames.js";

export async function findTransactionByClientId(userId, clientTransactionId) {
  return prisma.transaction.findUnique({
    where: {
      userId_clientTransactionId: {
        userId,
        clientTransactionId,
      },
    },
  });
}

export async function saveTransaction(data, userId) {
  const transaction = await prisma.transaction.create({
    data: {
      userId,

      amount: data.amount,

      merchant: data.merchant,

      type: data.type,

      source: data.source,

      transactionTime: new Date(data.transactionTime),

      clientTransactionId: data.clientTransactionId,
    },
  });

  console.log("new transaction saved to db");

  eventBus.emit(EVENTS.TRANSACTION_CREATED, transaction);

  console.log("below this");

  return transaction;
}
