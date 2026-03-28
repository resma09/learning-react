import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductsById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div className="flex flex-col min-h-[50vh] pt-8 sm:pt-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded object-cover aspect-[4/3]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {product.name}
          </h1>
          <p className="text-4xl font-semibold text-slate-700">
            Rs. {product.price}
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            {product.description}
          </p>
          <button className="w-full rounded bg-indigo-600 text-white text-sm font-semibold py-2.5 hover:bg-indigo-700 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
            Add to Cart
          </button>

          {/* <p className="text-sm text-slate-500 leading-relaxed">
            {product.detailedDescription}
          </p> */}
        </div>
      </div>
    </div>
  );
}
