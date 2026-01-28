import { IProduct } from "../../utils/interfaces/product.interface";
import { currencyExchanger } from "../../utils/utils";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface IProps {
  product: IProduct;
}

export const ProductCardFooter = ({ product }: IProps) => {
  return (
    <div className="flex items-center justify-between mt-2 cursor-pointer">
      <p className="font-semibold text-primary">{currencyExchanger(product.price)} so'm</p>
      <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white transition">
        <ShoppingCartIcon className="w-5 h-5" />
      </div>
    </div>
  );
};
