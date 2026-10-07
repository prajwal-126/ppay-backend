import { Prisma } from "@prisma/client";
import { findTransactionByClientId, saveTransaction } from "./transactions.repository.js";

export async function createTransactionService(data, userId) {
  // Basic validation for now
  try {
    if (!data.amount) {
      throw Object.assign(new Error("Amount is required"), { status: 400 });
    }
    if (!data.merchant) {
      throw Object.assign(new Error("Merchant is required"), { status: 400 });
    }

    const existingTransaction = await findTransactionByClientId(
      userId,
      data.clientTransactionId,
    );

    if (existingTransaction) {
      return {
        transaction: existingTransaction,
        duplicate: true,
      };
    }
    const transaction = await saveTransaction(data, userId);

    return {
      transaction,
      duplicate: false,
    };
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const existingTransaction = await findTransactionByClientId(
        userId,
        data.clientTransactionId,
      );

      return {
        transaction: existingTransaction,
        duplicate: true,
      };
    }

    throw error;
  }
}
