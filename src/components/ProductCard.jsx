import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : " ";

  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CARD BODY */}
      <div className="flex flex-col flex-1 p-5 gap-2">
        <h3 className="text-base font-semibold text-slate-800 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed flex-1">
          {product.description}
        </p>
        <span className="text-lg font-bold text-slate-900">
          Rs {product.price}
        </span>
        {/* FOOTER */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 gap-4">
          <Link
            to={`/products/${product.id}`}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-150"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product.id)}
            className="px-4 py-2 rounded bg-indigo-600 text-white text-sm hover:bg-indigo-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
