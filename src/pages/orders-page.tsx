import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";
import { ShoppingBagIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Order {
  id: string;
  date: string;
  status: "pending" | "delivered" | "cancelled";
  total: number;
  items: number;
}

export const OrdersPage = () => {
  const { user } = useAuth();

  // Demo buyurtmalar (haqiqiy loyihada API'dan keladi)
  const orders: Order[] = user
    ? [
        {
          id: "ORD-001",
          date: "2026-01-28",
          status: "delivered",
          total: 1250000,
          items: 3,
        },
        {
          id: "ORD-002",
          date: "2026-01-25",
          status: "pending",
          total: 890000,
          items: 2,
        },
        {
          id: "ORD-003",
          date: "2026-01-20",
          status: "cancelled",
          total: 450000,
          items: 1,
        },
      ]
    : [];

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "Yetkazildi";
      case "pending":
        return "Kutilmoqda";
      case "cancelled":
        return "Bekor qilindi";
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <ShoppingBagIcon className="w-20 h-20 text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Buyurtmalarni ko'rish uchun tizimga kiring
        </h2>
        <p className="text-gray-500 mb-6">
          Buyurtmalar tarixini ko'rish uchun hisobingizga kiring
        </p>
        <Link
          to="/login"
          state={{ from: "/orders" }}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Kirish
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold mb-6">Buyurtmalarim</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBagIcon className="w-20 h-20 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Sizda hali buyurtmalar yo'q</p>
          <Link
            to="/"
            className="mt-4 text-primary hover:underline"
          >
            Xarid qilishni boshlash
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg">{order.id}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <ClockIcon className="w-4 h-4" />
                  {new Date(order.date).toLocaleDateString("uz-UZ", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span>{order.items} ta mahsulot</span>
                <span className="font-semibold text-lg text-black">
                  {order.total.toLocaleString()} so'm
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
