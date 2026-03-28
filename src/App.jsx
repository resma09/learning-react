import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Checkout from "./Pages/Checkout";
import Navbar from "./components/Navbar";
import ProductDetails from "./Pages/ProductDetails";

import "./App.css";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <div className="app flex min-h-screen flex-col bg-slate-50 font-sans">
          <Navbar />
          <main className="flex-1 p-6 sm:p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
