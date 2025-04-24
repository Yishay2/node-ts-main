import { Product } from "../Home/Home"

interface BasketCardProps extends Product {
    action: (product: Product) => void;
}

const BasketCard = ({ action, ...product }: BasketCardProps) => {

    const page = window.location.pathname.split("/")[1];
    
    return (
        <div className="rounded-lg shadow-lg bg-slate-200 p-4 flex flex-col justify-between gap-2 hover:shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-black text-center">{product.title}</h2>
            <div className="flex justify-between items-center">
                <p className="font-bold">{product.price}$</p>
                <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded-lg" />
            </div>
            <p className="text-right">{product.description}</p>
            <div className="w-full flex items-center justify-center">
                <button className="px-6 bottom-8 py-3 rounded-xl bg-slate-500 text-yellow-50 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => action(product)}>{page === "home" || page === "" ? "Add to cart" : "Remove from cart"}</button>
            </div>
        </div>
    )
}

export default BasketCard