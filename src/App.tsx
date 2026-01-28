import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { ProductPage } from "./pages/product-page";
import { CartPage } from "./pages/cart-page";
import { FavoritesPage } from "./pages/favorites-page";
import AdminPage from "./pages/admin/admin-page";
import { LoginPage } from "./pages/login-page";
import { SuccessPage } from "./pages/success-page";
import { ProtectedRoute } from "./components/protected-route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <SuccessPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
