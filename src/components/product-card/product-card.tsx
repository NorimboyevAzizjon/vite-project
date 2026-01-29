import { Link } from "react-router-dom";
import { ProductCardFooter } from "./product-card-footer";
import { ProductRating } from "./product-ration";
import { IProduct } from "../../utils/interfaces/product.interface";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useFavoritesContext } from "../../context/favorites.context";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const isProductFavorite = isFavorite(product.id);

  let productImage = product.images[0];
  const isImageUrl = productImage.startsWith("https");

  if (!isImageUrl) {
    productImage = productImage.slice(2, -2);
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="max-w-[232px] w-full hover:shadow-lg transition cursor-pointer rounded-xl relative"
    >
      <button
        onClick={handleFavoriteClick}
        className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition"
      >
        {isProductFavorite ? (
          <HeartIconSolid className="w-5 h-5 text-red-500" />
        ) : (
          <HeartIcon className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <img
        src={productImage}
        alt={product.title}
        className="rounded-xl hover:rounded-b-none transition w-full h-[200px] object-cover"
        loading="lazy"
      />
      <div className="p-2 pt-3">
        <p className="line-clamp-2 text-sm mt-2">{product.description}</p>
        <ProductRating />
        <ProductCardFooter product={product} />
      </div>
    </Link>
  );
};
