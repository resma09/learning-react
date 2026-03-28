import { getProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
    const products = getProducts()
    return (
        <div className="flex flex-col min-h-[50vh] pt-8 sm:pt-12 px-6 md:px-12">
             {/* PAGE HEADER */}
            <div className="items-center justify-start">
                <h1 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Welcome to BeautyHub
                </h1>
                <p className="text-sm text-center text-slate-400 mt-6 italic">Discover amazing services at your convinence.</p>
            </div>

            {/* SERVICES SECTION */}

            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    Our Services
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>

        </div>
    )
}
