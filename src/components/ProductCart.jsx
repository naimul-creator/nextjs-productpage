import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCart = ({ ProductItem: item }) => {
  const calculateDiscountPercentage = (originalPrice, sellingPrice) => {
    const discount = ((originalPrice - sellingPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const discountPercentage = calculateDiscountPercentage(
    item?.attributes?.originalPrice,
    item?.attributes?.price
  );

  return (
    <div
      key={item?.id}
      className="cursor-pointer border rounded-xl shadow-lg p-4 transition-transform transform hover:scale-105"
    >
      <Link
        href={{ pathname: `/products/${item?.id}`, query: { id: item?.id } }}
      >
        <Image
          src={item?.attributes?.thumbnail?.data?.attributes?.url}
          alt={item?.attributes?.name}
          width={400}
          height={200}
          className="rounded-t-xl"
        />
        <h2 className="mt-2 text-lg font-semibold">{item?.attributes?.name}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2">
            <h3 className="text-orange-500 font-bold">
              ₹{item?.attributes?.originalPrice}
            </h3>
            <h3 className='line-through text-gray-500 font-bold'>
              ₹{item?.attributes?.price}
            </h3>
            <p className="text-green-500 font-bold">
              Discount: {discountPercentage}% Off
            </p>
          </div>
        </div>
      </Link>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-2">Add to Cart</button>
    </div>
  );
};

export default ProductCart;
