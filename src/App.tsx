import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/homepage";
import { ProductPage } from "./pages/product-page";
import { CartPage } from "./pages/cart-page";
import { FavoritesPage } from "./pages/favorites-page";
import AdminPage from "./pages/admin/admin-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
