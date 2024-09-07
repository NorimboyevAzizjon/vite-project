import { ProductDetails } from "./product-details";
import { ProductImages } from "./product-images";

export const Product = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <ProductImages />
      <ProductDetails />
    </div>
  );
};
