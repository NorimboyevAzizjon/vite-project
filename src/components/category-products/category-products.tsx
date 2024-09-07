import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card";

export const CategoryProducts = () => {
  return (
    <div className="mt-4">
      <Link
        to="/category/id"
        className="flex items-center gap-2 text-3xl font-semibold cursor-pointer"
      >
        Mashxur <ChevronRightIcon className="w-8" />
      </Link>

      <div className="mt-3 grid grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
