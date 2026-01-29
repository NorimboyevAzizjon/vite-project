import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher } from "../api/axios";
import { IProduct, ICategory } from "../utils/interfaces/product.interface";
import { ProductCard } from "../components/product-card/product-card";

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch category info
      const categoryResponse = await fetcher(`/categories/${categoryId}`);
      setCategory(categoryResponse.data);

      // Fetch products by category
      const productsResponse = await fetcher(
        `/categories/${categoryId}/products`
      );
      setProducts(productsResponse.data);
    } catch (err) {
      console.error("Xatolik:", err);
      setError("Ma'lumotlarni yuklab bo'lmadi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={fetchCategoryProducts}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold mb-6">
        {category?.name || "Kategoriya"}
      </h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-gray-500 text-lg">
            Bu kategoriyada mahsulotlar topilmadi
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
