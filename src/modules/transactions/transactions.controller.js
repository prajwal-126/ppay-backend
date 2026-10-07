import { createTransactionService } from "./transactions.service.js";

export async function createTransaction(req, res, next) {
    try {
        const transaction = await createTransactionService(req.body, req.user.userId);

        res.status(201).json({
            success: true,
            duplicate: transaction.duplicate,
            transaction
        });
    } catch (error) {
        next(error);
    }
}