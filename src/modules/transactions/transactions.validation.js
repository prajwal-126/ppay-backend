import { z } from "zod";

export const createTransactionSchema = z.object({
  clientTransactionId: z.string().min(1),

  amount: z.number().positive(),

  merchant: z.string().min(1).max(200),

  type: z.enum(["DEBIT", "CREDIT"]),

  source: z.enum(["BANK_NOTIFICATION"]),

  transactionTime: z.string().datetime(),
});
