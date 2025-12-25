
import { IProduct } from "../../utils/interfaces/product.interface";
import { currencyExchanger } from "../../utils/utils";
import { ProductFavoriteButton } from "./product-favorite-button";

interface IProps {
  product: IProduct;
}

export const ProductCardFooter = ({ product }: IProps) => {
  return (
    <div className="flex items-center justify-between mt-2 cursor-pointer gap-2">
      <p>{currencyExchanger(product.price)} so'm</p>
      <div className="w-10 h-10 rounded-full border flex items-center justify-center">
        <img
          src="/icons/add-to-cart.svg"
          alt="add-to-cart-icon"
          className="w-7"
        />
      </div>
    </div>
  );
};
