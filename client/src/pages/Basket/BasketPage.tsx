import { Product } from "../Home/Home"
import { useEffect, useState } from "react";
import BasketCard from "./BasketCard";
import axios from "axios";

export default function BasketPage() {

    const [basket, setBasket] = useState<Product[]>([]);

    useEffect(() => {
        const fetchBasket = async () => {
            try {
                const response = await fetch("http://localhost:3005/basket");
                const data = await response.json();
                setBasket(data);
            } catch (error) {
                console.error("Error fetching basket:", error);
            }
        }

        fetchBasket();
    }, []);

    const removeFromCart = async (id: number) => {
        try {
            await axios.delete(`http://localhost:3005/basket/${id}`);
            setBasket(basket.filter((product) => product.id !== id));
        } catch (error) {
            console.error("Error removing product from cart:", error);
        }
    }

    return (
        <div className='size-full overflow-scroll'>
            <h1 className="w-full text-3xl font-bold text-center">Basket</h1>
            <div className="p-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {basket?.map((product) => <BasketCard key={product.id} {...product} removeFromCart={removeFromCart} />)}
            </div>
        </div>
    )
}
