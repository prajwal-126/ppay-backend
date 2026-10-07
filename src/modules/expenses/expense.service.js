import {
  findExpenseByTransactionId,
  createExpense,
} from "./expense.repository.js";

import { categorizeTransaction } from "./expense.categorizer.js";

export async function processTransaction(transaction) {
  const existingExpense = await findExpenseByTransactionId(transaction.id);

  if (existingExpense) {
    return existingExpense;
  }

  const result = categorizeTransaction(transaction);

  const expense = await createExpense({
    userId: transaction.userId,

    transactionId: transaction.id,

    category: result.category,

    categorySource: result.source,

    confidence: result.confidence,
  });

  return expense;
}
