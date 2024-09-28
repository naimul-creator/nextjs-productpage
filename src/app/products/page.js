import React from "react";
import get from "@/GlobalApi/get";
import ProductCart from "@/components/ProductCart"; // ProductCart কে সঠিকভাবে ইম্পোর্ট করো

const HomePage = async () => {
  const Products = await get.getProducts();
  console.log(Products); // প্রোডাক্টগুলি কনসোলে দেখতে

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Products.map((item) => (
          <div key={item.id}>
            <ProductCart ProductItem={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
