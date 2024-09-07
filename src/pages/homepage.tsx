import { AdBanner } from "../components/ad-banner/ad-banner";
import { CategoryProducts } from "../components/category-products/category-products";
import { Banner } from "../components/banner/banner";

export const Homepage = () => {
  return (
    <div>
      <AdBanner />
      <CategoryProducts />
      <Banner
        src="https://images.uzum.uz/crbf1cm0t1lqb8aq08v0/main_page_banner.jpg"
        link="/"
      />
      <CategoryProducts />
      <Banner
        src="https://images.uzum.uz/crbf4jm0t1lqb8aq0a1g/main_page_banner.jpg"
        link="/"
      />
      <CategoryProducts />
      <Banner
        src="https://images.uzum.uz/cr68jjniraat934r4j0g/main_page_banner.jpg"
        link="/"
      />
    </div>
  );
};
