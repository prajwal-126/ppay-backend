import { prisma } from "../../config/db.js";

export async function findExpenseByTransactionId(transactionId) {
  return prisma.expense.findUnique({
    where: {
      transactionId,
    },
  });
}

export async function createExpense(data) {
  return prisma.expense.create({
    data: {
      userId: data.userId,
      transactionId: data.transactionId,
      category: data.category,
      categorySource: data.categorySource,
      confidence: data.confidence,
      note: data.note,
    },
  });
}
