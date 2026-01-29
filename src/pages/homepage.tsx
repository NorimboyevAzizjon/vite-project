import { AdBanner } from "../components/ad-banner/ad-banner";
import { CategoryProducts } from "../components/category-products/category-products";
import { Banner } from "../components/banner/banner";
import { useEffect, useState } from "react";
import { fetcher } from "../api/axios";

export const Homepage = () => {
  const [pupularProducts, setPopularProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPopularProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await fetcher("/products?limit=10&offset=10");
      setPopularProducts(data);
    } catch (err) {
      console.error("Mahsulotlarni yuklashda xatolik:", err);
      setError("Internet bilan bog'lanishda xatolik. Iltimos, ulanishingizni tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={fetchPopularProducts}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div>
      <AdBanner />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <Banner
        src="https://images.uzum.uz/crbf1cm0t1lqb8aq08v0/main_page_banner.jpg"
        link="/"
      />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <Banner
        src="https://images.uzum.uz/crbf4jm0t1lqb8aq0a1g/main_page_banner.jpg"
        link="/"
      />
      <CategoryProducts link="/" products={pupularProducts} title="Mashxur" />
      <Banner
        src="https://images.uzum.uz/cr68jjniraat934r4j0g/main_page_banner.jpg"
        link="/"
      />
    </div>
  );
};
