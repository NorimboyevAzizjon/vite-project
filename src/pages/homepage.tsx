import { AdBanner } from "../components/ad-banner/ad-banner";
import { CategoryProducts } from "../components/category-products/category-products";
import { Banner } from "../components/banner/banner";
import { useEffect, useState } from "react";
import { fetcher } from "../api/axios";

export const Homepage = () => {
  const [pupularProducts, setPopularProducts] = useState([]);

  const fetchPopularProducts = async () => {
    const { data } = await fetcher("/products?limit=10&offset=10");

    setPopularProducts(data);
  };

  useEffect(() => {
    fetchPopularProducts();
  }, []);
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
