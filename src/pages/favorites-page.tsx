import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../components/context/favorites.context";
import { ProductCard } from "../components/product-card/product-card";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Saralanganlar</h1>
      {favorites.length === 0 ? (
        <p>Sizda saralangan mahsulotlar yo'q.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
