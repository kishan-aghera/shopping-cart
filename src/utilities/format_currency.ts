const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
});

export function formatCurrency(number: number | undefined) {
  if (typeof number !== "undefined") {
    return CURRENCY_FORMATTER.format(number);
  }
  return null;
}
