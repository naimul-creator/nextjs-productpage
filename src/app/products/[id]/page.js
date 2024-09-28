"use client";
import React, { useEffect, useState } from "react";
import get from "@/GlobalApi/get";

const SingleProductPage = ({ searchParams }) => {
  const { id } = searchParams;
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [zoomStyle, setZoomStyle] = useState({});

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

    // Calculate percentage of cursor position relative to image
    const xPos = (offsetX / offsetWidth) * 100;
    const yPos = (offsetY / offsetHeight) * 100;

    // Update background position to zoom into the point where cursor is
    setZoomStyle({
      backgroundPosition: `${xPos}% ${yPos}%`,
      backgroundSize: "200%" // Change zoom level here
    });
  };

  const handleMouseLeave = () => {
    // Reset background position and size when cursor leaves
    setZoomStyle({
      backgroundPosition: "center",
      backgroundSize: "cover"
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

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
          <div className="min-w-fit ">
            {/* Zoom effect container */}
            <div
              className="cursor-pointer relative w-[400px] h-[400px] overflow-hidden border rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${selectedImage})`,
                ...zoomStyle // Apply zoom style dynamically
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2">{product.attributes.name}</h1>
          <h2 className="text-xl font-semibold mb-2">
            Price: ₹{product.attributes.price}
          </h2>
          <p className="text-gray-600 mb-4">
            Original Price: ₹{product.attributes.originalPrice}
          </p>
          <p className="text-gray-700 mb-4">
            {product.attributes.description.length > 0
              ? product.attributes.description.join(", ")
              : "No description available."}
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
