"use client";
import React, { useEffect, useState } from "react";
import get from "@/GlobalApi/get";

const SingleProductPage = ({ searchParams }) => {
  const { id } = searchParams;
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomStyle, setZoomStyle] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      get.getFilteredProducts(id).then((data) => {
        setProduct(data);
        const thumbnailUrl = data.attributes.thumbnail.data.attributes.url;
        setSelectedImage(thumbnailUrl);
      });
    }
  }, [id]);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPos = (offsetX / offsetWidth) * 100;
    const yPos = (offsetY / offsetHeight) * 100;

    setZoomStyle({
      backgroundPosition: `${xPos}% ${yPos}%`,
      backgroundSize: "200%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      backgroundPosition: "center",
      backgroundSize: "cover",
    });
  };

  const incrementQuantity = () => {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const calculateDiscountPercentage = (originalPrice, sellingPrice) => {
    const discount = ((originalPrice - sellingPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const totalPrice = product.attributes.originalPrice * quantity;
  const discountPercentage = calculateDiscountPercentage(
    product.attributes.price,
    product.attributes.originalPrice
  );

  return (
    <div className="p-1 h-[100vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex gap-4">
          <div>
            {product.attributes.mustiple_image.data.map((image, index) => (
              <div key={index} className="grid grid-cols">
                <img
                  src={image?.attributes?.url}
                  alt={`Product Image ${index + 1}`}
                  height={100}
                  width={100}
                  className="cursor-pointer rounded-lg shadow-md mb-2 hover:opacity-75 h-20 w-20"
                  onClick={() => setSelectedImage(image?.attributes?.url)}
                />
              </div>
            ))}
          </div>
          <div className="min-w-fit">
            <div
              className="cursor-pointer relative w-[400px] h-[400px] overflow-hidden border rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${selectedImage})`,
                ...zoomStyle,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{product.attributes.name}</h1>
          <h2 className="text-xl font-semibold mb-2">
            Selling Price: ₹{product.attributes.originalPrice}
          </h2>
          <p className="text-gray-600 mb-4 line-through">
            Price: ₹{product.attributes.price}
          </p>
          <p className="text-green-500 font-bold mb-2 ">
            Discount: {discountPercentage}% Off
          </p>
          <p className="text-gray-700 mb-4">
            {product.attributes.description.length > 0
              ? product.attributes.description.join(", ")
              : "No description available."}
          </p>
          <div className="flex items-center mb-4">
            <button
              onClick={decrementQuantity}
              className="bg-gray-200 px-2 py-1 rounded-l"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-gray-200 px-2 py-1 rounded-r"
            >
              +
            </button>
          </div>
          <h3 className="text-lg font-bold mb-2">Total Price: ₹{totalPrice}</h3>
          <div className="flex gap-4">
           
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
