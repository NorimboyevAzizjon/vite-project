import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HeaderLink } from "./header-link";
import { useCartContext } from "../../context/cart.context";
import { useFavoritesContext } from "../../context/favorites.context";

export const HeaderLinks = () => {
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();
  return (
    <div className="flex gap-2">
      <HeaderLink
        icon={<ShoppingBagIcon className="w-6 h-6" />}
        link="/"
        title="Buyurtmalar"
      />
      <div className="flex items-center">
        <HeaderLink
          icon={<HeartIcon className="w-6 h-6" />}
          link="/favorites"
          title="Saralanganlar"
        />
        {favorites.length > 0 && (
          <div className="bg-red-500 w-6 h-6 grid place-content-center text-white rounded-full text-xs -ml-2">
            {favorites.length}
          </div>
        )}
      </div>
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
