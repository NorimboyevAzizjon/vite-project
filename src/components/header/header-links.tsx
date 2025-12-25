import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import LoginIcon from "../icons/login-icon";
import { HeaderLink } from "./header-link";
import { useCartContext } from "../../context/cart.context";

export const HeaderLinks = () => {
  const { cart } = useCartContext();
  return (
    <div className="flex gap-2">
            <HeaderLink
              icon={<LoginIcon />}
              link="/login"
              title="Kirish"
            />
      <HeaderLink
        icon={<ShoppingBagIcon className="w-6 h-6" />}
        link="/"
        title="Buyurtmalar"
      />
      <HeaderLink
        icon={<HeartIcon className="w-6 h-6" />}
        link="/favorites"
        title="Saralanganlar"
      />
      <div className="flex items-center">
        <HeaderLink
          icon={<ShoppingCartIcon className="w-6 h-6" />}
          link="/cart"
          title="Savatcha"
        />
        <div className="bg-primary w-8 h-8 grid place-content-center text-white rounded-full">
          {cart.items.length}
        </div>
      </div>
    </div>
  );
};
