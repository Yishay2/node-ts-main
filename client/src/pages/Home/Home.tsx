import { useEffect, useState } from "react";
import BasketCard from "../Basket";

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string
}

export default function HomePage() {

  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);


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
    <div className='size-full p-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 overflow-scroll'>
      {products?.map((product) => <BasketCard key={product.id} {...product} action={() => addToCart(product)}/>)}
    </div>
  );
}
