/*
Build a product filtering component that allows users to filter products by categories, price range, and ratings.

Skills tested: Filtering logic, state management, event handling
Difficulty: Medium

Tasks:
Implement the product filter UI.
Add functionality to filter products based on selected criteria.
Update the product list dynamically.

Hints:
Use React state to manage the selected filter criteria.
Implement filtering logic based on the selected criteria.
 */

import { useEffect, useState } from "react";

const API = "https://dummyjson.com/products";

export const Filter = () => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const res = await fetch(API);
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products);
      } else throw Error("Server error");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <main
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        {products &&
          products.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <img src={prod.images[0]} className="aspect-square" />
              <span className="text-sm">{prod.rating}</span>
              <h1 className="text-xl font-bold">{prod.title.substring(0,15)}...</h1>
              <span className="text-sm">Stock: {prod.stock}</span>
            </div>
          ))}
      </main>
    </>
  );
};
