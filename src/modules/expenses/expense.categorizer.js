import { normalizeMerchant } from "./expense.merchantNormalizer.js";

const merchantRules = {
  Swiggy: "Food",
  Zomato: "Food",
  Blinkit: "Shopping",
  Amazon: "Shopping",
  Flipkart: "Shopping",
  Uber: "Travel",
  Ola: "Travel",
};

export function categorizeTransaction(transaction) {
  const merchant = normalizeMerchant(transaction.merchant);

  const category = merchantRules[merchant];

  if (category) {
    return {
      category,
      source: "RULE",
      confidence: 1.0,
    };
  }

  return {
    category: "Others",
    source: "RULE",
    confidence: 0.2,
  };
}
