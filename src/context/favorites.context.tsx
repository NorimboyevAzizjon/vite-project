import { createContext, ReactNode, useContext } from "react";
import { IProduct } from "../utils/interfaces/product.interface";
import { useLocalStorage } from "react-use";
import { toast } from "react-toastify";

interface IFavoritesContext {
  favorites: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  toggleFavorite: (product: IProduct) => void;
}

const FavoritesContext = createContext<IFavoritesContext | null>(null);

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context)
    throw new Error("FavoritesContext must be used in Provider");

  return context;
};

interface IProps {
  children: ReactNode;
}

export const FavoritesContextProvider = ({ children }: IProps) => {
  const [favorites, setFavorites] = useLocalStorage<IProduct[]>(
    "favorites",
    []
  );

  const addToFavorites = (product: IProduct) => {
    if (favorites) {
      const isAlreadyFavorite = favorites.some((p: IProduct) => p.id === product.id);

      if (isAlreadyFavorite) {
        toast.info("Mahsulot allaqachon saralanganlarda");
        return;
      }

      setFavorites([...favorites, product]);
      toast.success("Mahsulot saralanganlarga qo'shildi");
    }
  };

  const removeFromFavorites = (productId: number) => {
    if (favorites) {
      const updatedFavorites = favorites.filter((p: IProduct) => p.id !== productId);
      setFavorites(updatedFavorites);
      toast.success("Mahsulot saralanganlardan o'chirildi");
    }
  };

  const isFavorite = (productId: number) => {
    return favorites?.some((p: IProduct) => p.id === productId) || false;
  };

  const toggleFavorite = (product: IProduct) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites: favorites || [],
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
