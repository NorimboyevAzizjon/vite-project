import { Link } from "react-router-dom";
import { ProductCardFooter } from "./product-card-footer";
import { ProductRating } from "./product-ration";

export const ProductCard = () => {
  return (
    <Link
      to="/product/id"
      className="max-w-[232px] w-full hover:shadow-lg transition cursor-pointer rounded-xl"
    >
      <img
        src="https://images.uzum.uz/cdb5a4rb3ho5lmur47kg/t_product_540_high.jpg#1725718457665"
        className="rounded-xl hover:rounded-b-none transition"
      />
      <div className="p-2 pt-3">
        <p className="line-clamp-2 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam
          voluptas! Ea inventore quia illum perspiciatis dolores facilis.
          Assumenda, impedit.
        </p>
        <ProductRating />
        <ProductCardFooter />
      </div>
    </Link>
  );
};
