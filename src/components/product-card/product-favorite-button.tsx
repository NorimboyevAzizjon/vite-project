
import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProductCardFooter } from "./product-card-footer";
import { ProductRating } from "./product-ration";
import { IProduct } from "../../utils/interfaces/product.interface";
import { useFavorites } from "../context/favorites.context";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  let productImage = product.images[0];
  const isImageUrl = productImage.startsWith("https");

  if (!isImageUrl) {
    productImage = productImage.slice(2, -2);
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="max-w-[232px] w-full hover:shadow-lg transition cursor-pointer rounded-xl"
    >
      <div className="relative">
        <img
          src={productImage}
          className="rounded-xl hover:rounded-b-none transition"
        />
        <div className="absolute top-2 right-2 z-10">
          <ProductFavoriteButton product={product} />
        </div>
      </div>
      <div className="p-2 pt-3">
        <p className="line-clamp-2 text-sm mt-2">{product.description}</p>
        <ProductRating />
        <ProductCardFooter product={product} />
      </div>
    </Link>
  );
};

export const ProductFavoriteButton = ({ product }: IProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(product);

  return (
    <button
      type="button"
      className={`w-10 h-10 rounded-full border flex items-center justify-center transition hover:bg-gray-100 ${favorite ? 'text-red-500' : 'text-gray-500'}`}
      onClick={e => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(product);
      }}
      aria-label="Saralash"
    >
      <HeartIcon className="w-6 h-6" fill={favorite ? 'currentColor' : 'none'} />
    </button>
  );
};
