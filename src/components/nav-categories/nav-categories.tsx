import { useEffect, useState } from "react";
import { fetcher } from "../../api/axios";
import { NavCategory } from "./nav-category";
import { ICategory } from "../../utils/interfaces/product.interface";

export const NavCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setError(null);
      const { data } = await fetcher("/categories?limit=100");
      setCategories(data);
    } catch (err) {
      console.error("Kategoriyalarni yuklashda xatolik:", err);
      setError("Kategoriyalarni yuklab bo'lmadi");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500 py-2">
        {error} - <button onClick={fetchCategories} className="text-purple-600 underline">Qayta urinish</button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
      {categories.map((category) => (
        <NavCategory key={category.id} category={category} />
      ))}
    </div>
  );
};
