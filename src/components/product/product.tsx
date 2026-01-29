import { IProduct } from "../../utils/interfaces/product.interface";
import { ProductDetails } from "./product-details";
import { ProductImages } from "./product-images";

interface IProps {
  product: IProduct | null;
  loading?: boolean;
}

export const Product = ({ product, loading = false }: IProps) => {
  if (loading || !product) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <ProductImages product={product} />
      <ProductDetails product={product} />
    </div>
  );
};
