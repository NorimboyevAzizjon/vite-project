import { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "../../utils/interfaces/product.interface";

interface FavoritesContextType {
  favorites: IProduct[];
  isFavorite: (product: IProduct) => boolean;
  toggleFavorite: (product: IProduct) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  const isFavorite = (product: IProduct) => favorites.some(p => p.id === product.id);
  const toggleFavorite = (product: IProduct) => {
    setFavorites(prev =>
      prev.some(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
