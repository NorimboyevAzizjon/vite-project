import { useCartContext } from "../../context/cart.context";
import { IProduct } from "../../utils/interfaces/product.interface";
import { Button } from "../button";

interface IProps {
  product: IProduct;
  quantity: number;
}

export const ProductButtons = ({ product, quantity }: IProps) => {
  const { handleAddToCart } = useCartContext();

  const handleClick = () => {
    handleAddToCart(product, quantity);
    window.location.href = "/cart";
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button className="w-full" onClick={handleClick}>
        Savatga qo'shish
      </Button>
    </div>
  );
};
