import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart.context";
import { useAuth } from "../../context/auth.context";
import { Button } from "../button";

export const CartSummary = () => {
  const { cart } = useCartContext();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/success" } });
    } else {
      navigate("/success");
    }
  };

  const cartItems = cart?.items || [];
  const totalPrice = cart?.totalPrice || 0;

  return (
    <div className="col-span-3 border p-4 rounded-lg ">
      <h2 className="text-2xl font-semibold">Buyurtmangiz</h2>
      <div className="flex items-center justify-between mt-4">
        <p> Mahsulotlar soni:</p>
        <p>{cartItems.length} ta</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p>Jami:</p>
        <p className="text-xl font-semibold">{totalPrice.toLocaleString()} so'm</p>
      </div>
      <Button className="w-full mt-4" onClick={handleCheckout} disabled={cartItems.length === 0}>
        Sotib olish
      </Button>
    </div>
  );
};
