import { Product } from "../Home/Home"

interface ProductCardProps extends Product {
    removeFromCart: (id: number) => void;
}

const ProductCard = ({removeFromCart, ...product}: ProductCardProps) => {

    const page = window.location.pathname.split("/")[1];

    const addToCart = async (product: Product) => {
        try {
            const response = await fetch("http://localhost:3005/basket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });
            
            console.log("response", response);
        } catch (error) {
            console.error("Error adding product to cart:", error);
        }
    }

    return (
        <div className="rounded-lg shadow-lg bg-slate-200 p-4 flex flex-col justify-between gap-2 hover:shadow-xl transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-black text-center">{product.title}</h2>
            <p className="font-bold">{product.price}$</p>
            <p className="text-right">{product.description}</p>
            <div className="w-full flex items-center justify-center">
                <button className="px-6 bottom-8 py-3 rounded-xl bg-slate-500 text-yellow-50 hover:scale-105 transition-all duration-300 ease-in-out" onClick={() => page === "home" || page === "" ? addToCart(product) : removeFromCart(product.id)}>{page === "home" || page === "" ? "Add to cart" : "Remove from cart"}</button>
            </div>
        </div>
    )
}

export default ProductCard