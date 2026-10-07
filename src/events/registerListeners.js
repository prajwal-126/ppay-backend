import { eventBus } from "./eventBus.js";

import { EVENTS } from "./eventNames.js";

import { processTransaction } from "../modules/expenses/expense.service.js";

eventBus.on(EVENTS.TRANSACTION_CREATED, async (transaction) => {
  try {
    console.log("Processing transaction:", transaction.id);

    const expense = await processTransaction(transaction);

    console.log("Expense created:", expense.id);
  } catch (error) {
    console.error("Failed to process transaction:", error);
  }
});
