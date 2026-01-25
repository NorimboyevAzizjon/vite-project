import { useFavoritesContext } from "../context/favorites.context";
import { ProductCard } from "../components/product-card/product-card";
import { HeartIcon } from "@heroicons/react/24/outline";

export const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold mb-6">Saralanganlar</h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <HeartIcon className="w-20 h-20 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">
            Saralangan mahsulotlar yo'q
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Yoqtirgan mahsulotlaringizni ❤️ belgisi orqali saqlang
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
