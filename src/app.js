import express from "express";
import transactionRouter from "./modules/transactions/transactions.route.js";
import authRouter from "./modules/auth/auth.route.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    health: "ok",
  });
});

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/transaction", transactionRouter);

export default app;
