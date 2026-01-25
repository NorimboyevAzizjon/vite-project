import { useCartContext } from "../../context/cart.context";
import { IProduct } from "../../utils/interfaces/product.interface";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";

interface IProps {
  product: IProduct;
  quantity: number;
}

export const ProductButtons = ({ product, quantity }: IProps) => {
  const { handleAddToCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="flex items-center  gap-2 mt-4">
      <Button
        className="w-full"
        onClick={handleAddToCart.bind(null, product, quantity)}
      >
        Savatga qo'shish
      </Button>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => navigate("/checkout")}
      >
        1ta klikda xarid qilish
      </Button>
    </div>
  );
};
