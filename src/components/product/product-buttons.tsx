import { useCartContext } from "../../context/cart.context";
import { useAuth } from "../../context/auth.context";
import { IProduct } from "../../utils/interfaces/product.interface";
import { Button } from "../button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IProps {
  product: IProduct;
  quantity: number;
}

export const ProductButtons = ({ product, quantity }: IProps) => {
  const { handleAddToCart } = useCartContext();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleQuickBuy = () => {
    handleAddToCart(product, quantity);
    
    if (!user) {
      toast.info("Xarid qilish uchun tizimga kiring");
      navigate("/login", { state: { from: "/success" } });
    } else {
      navigate("/success");
    }
  };

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
        onClick={handleQuickBuy}
      >
        1ta klikda xarid qilish
      </Button>
    </div>
  );
};
