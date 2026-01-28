import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HeaderLink } from "./header-link";
import { useCartContext } from "../../context/cart.context";
import { useFavoritesContext } from "../../context/favorites.context";
import { useAuth } from "../../context/auth.context";
import { Link } from "react-router-dom";

export const HeaderLinks = () => {
  const { cart } = useCartContext();
  const { favorites } = useFavoritesContext();
  const { user, signOut } = useAuth();
  
  const favoritesCount = favorites?.length ?? 0;
  const cartItemsCount = cart?.items?.length ?? 0;
  
  return (
    <div className="flex gap-2 items-center">
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
        {favoritesCount > 0 && (
          <div className="bg-red-500 w-6 h-6 grid place-content-center text-white rounded-full text-xs -ml-2">
            {favoritesCount}
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
          {cartItemsCount}
        </div>
      </div>
      
      {/* Auth Section */}
      {user ? (
        <div className="flex items-center gap-2 ml-2">
          <Link
            to="/admin"
            className="flex items-center gap-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
          >
            <UserIcon className="w-5 h-5" />
            Admin
          </Link>
          <button
            onClick={signOut}
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Chiqish
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex items-center gap-1 px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm ml-2"
        >
          <UserIcon className="w-5 h-5" />
          Kirish
        </Link>
      )}
    </div>
  );
};
