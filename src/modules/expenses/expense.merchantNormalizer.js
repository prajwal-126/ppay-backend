const merchantAliases = {
  swiggy: "Swiggy",
  zomato: "Zomato",
  uber: "Uber",
  ola: "Ola",
  amazon: "Amazon",
  blinkit: "Blinkit",
  flipkart: "Flipkart",
};

export function normalizeMerchant(merchant) {
  const value = merchant.toLowerCase().trim();

  for (const key in merchantAliases) {
    if (value.includes(key)) {
      return merchantAliases[key];
    }
  }

  return merchant.trim();
}
