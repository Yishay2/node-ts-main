import { useEffect, useState } from "react";
import ProductCard from "../Basket";

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string
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

  return (
    <div className='size-full p-6 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 overflow-scroll'>
      {products?.map((product) => <ProductCard key={product.id} {...product} />)}
    </div>
  );
}
