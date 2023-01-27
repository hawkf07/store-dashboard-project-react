export const currencyFormatter = (num: number) =>
  new Intl.NumberFormat("id", { currency: "IDR", style: "currency" }).format(
    num
  );
