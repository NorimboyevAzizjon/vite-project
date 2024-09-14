import { IProduct } from "./interfaces/product.interface";

export const currencyExchanger = (price: IProduct["price"]) => {
  const exchangedPrice = price * 12722;

  return exchangedPrice.toLocaleString();
};
