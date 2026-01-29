import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth.context";
import { addProduct, getProducts, deleteProduct, SupabaseProduct } from "../../api/products";
import { toast } from "react-toastify";
import { TrashIcon } from "@heroicons/react/24/outline";

const AdminPage: React.FC = () => {
  const { user, signOut } = useAuth();
  const [products, setProducts] = useState<SupabaseProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image_url: "",
    description: "",
  });

  const fetchProducts = async () => {
    try {
      setFetchLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Mahsulotlarni yuklashda xatolik:", err);
      toast.error("Mahsulotlarni yuklab bo'lmadi");
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProduct = await addProduct({
        title: formData.title,
        price: parseFloat(formData.price),
        image_url: formData.image_url,
        description: formData.description,
      });

      if (newProduct) {
        toast.success("Mahsulot muvaffaqiyatli qo'shildi!");
        setFormData({ title: "", price: "", image_url: "", description: "" });
        fetchProducts();
      } else {
        toast.error("Mahsulot qo'shishda xatolik yuz berdi");
      }
    } catch {
      toast.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Bu mahsulotni o'chirishni xohlaysizmi?")) {
      const success = await deleteProduct(id);
      if (success) {
        toast.success("Mahsulot o'chirildi");
        fetchProducts();
      } else {
        toast.error("Mahsulotni o'chirishda xatolik");
      }
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{user?.email}</span>
          <button
            onClick={signOut}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Chiqish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Product Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Yangi mahsulot qo'shish</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mahsulot nomi
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Mahsulot nomi"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Narxi (so'm)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="100000"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rasm URL
              </label>
              <input
                type="url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tavsifi
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                placeholder="Mahsulot tavsifi..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Yuklanmoqda..." : "Mahsulot qo'shish"}
            </button>
          </form>
        </div>

        {/* Products List */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Mahsulotlar ro'yxati ({products.length})
          </h2>
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {products.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Hozircha mahsulotlar yo'q
              </p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-3 border rounded-lg hover:bg-gray-50"
                >
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-primary font-semibold">
                      {product.price.toLocaleString()} so'm
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
