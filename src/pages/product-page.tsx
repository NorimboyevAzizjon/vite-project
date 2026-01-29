import { useEffect, useState } from "react";
import { CategoryProducts } from "../components/category-products/category-products";
import { Product } from "../components/product/product";
import { IProduct } from "../utils/interfaces/product.interface";
import { fetcher } from "../api/axios";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stringfyLastViewedProducts = localStorage.getItem(
    "last-viewed-products"
  );

  const lastViewedProducts: IProduct[] =
    typeof stringfyLastViewedProducts === "string"
      ? JSON.parse(stringfyLastViewedProducts)
      : [];

  const { productId } = useParams();

  const filteredLastViewedProduct = lastViewedProducts.filter(
    (product) => product.id !== parseInt(productId as string)
  );

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await fetcher(`/products/${productId}`);
      setProduct(data);
      saveProduct(data as IProduct);
    } catch (err) {
      console.error("Mahsulotni yuklashda xatolik:", err);
      setError("Mahsulotni yuklab bo'lmadi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  const saveProduct = (product: IProduct) => {
    const productIndex = lastViewedProducts.findIndex(
      (product) => product.id === parseInt(productId as string)
    );

    const copyOfProducts = lastViewedProducts;

    if (productIndex !== -1) {
      const [removedElement] = copyOfProducts?.splice(
        productIndex,
        1
      ) as IProduct[];
      copyOfProducts?.unshift(removedElement);

      localStorage.setItem(
        "last-viewed-products",
        JSON.stringify([...copyOfProducts])
      );
      return;
    }

    localStorage.setItem(
      "last-viewed-products",
      JSON.stringify([product, ...copyOfProducts])
    );
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={fetchProduct}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <>
      <Product product={product} loading={loading} />
      <CategoryProducts
        products={filteredLastViewedProduct || []}
        title="Oxirgi ko'rilgan mahsulotlar"
      />
    </>
  );
};
