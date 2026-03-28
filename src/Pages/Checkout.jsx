import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  function placeOrder() {
    alert("Successful Order!");
    clearCart();
  }
  return (
    <div className="flex flex-col min-h-[50vh] pt-8 sm:pt-12 px-6 md:px-12">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Checkout
        </h1>
      </div>

      {/* CHECKOUT CONTAINER */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* ORDER SUMMARY */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Order Summary
          </h2>

          {/* CART ITEMS */}
          {cartItems.length === 0 ? (
            <p className="text-sm text-slate-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
              >
                {/* IMAGE */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    Rs. {item.product.price} each
                  </p>
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold text-slate-800 min-w-[20px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* ITEM TOTAL */}
                <p className="text-sm font-bold text-slate-900 min-w-[80px] text-right">
                  Rs. {(item.product.price * item.quantity).toFixed(2)}
                </p>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-400 hover:text-red-600 font-medium transition"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* ORDER TOTAL CARD */}
        <div className="w-full lg:w-1/3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            Total
          </h2>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm text-slate-500">Sub total</span>
            <span className="text-md text-slate-900">Rs. {total}</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="text-sm text-slate-500">Order total</span>
            <span className="text-lg font-bold text-slate-900">
              Rs. {total}
            </span>
          </div>
          <button
            onClick={placeOrder}
            className="w-full rounded-xl bg-indigo-600 text-white text-sm font-semibold py-2.5 hover:bg-indigo-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
