import express from "express";
import { createTransaction } from "./transactions.controller.js";
import { authenticate } from "../../middlewares/authMiddleware.js";
import { validate } from "../../middlewares/validate.js";
import { createTransactionSchema } from "./transactions.validation.js";

const router = express.Router();

router.post("/", authenticate, validate(createTransactionSchema), createTransaction);

export default router;
