"use client";
import Image from 'next/image';
import { useState } from 'react';

const ProductZoom = () => {
  const [selectedImage, setSelectedImage] = useState(
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727505916/medium_wedds_1_of_1_3rr_7d35b24837.jpg'
  );
  const [zoom, setZoom] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const images = [
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727505916/medium_wedds_1_of_1_3rr_7d35b24837.jpg',
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727261513/ed6a1778_7ee5_4b9f_820d_3241ee758b03_7741ab6550.webp',
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727261440/large_632d0ccc_0475_4760_802e_ba6baa574531_742a3c2a7b.webp',
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727261440/medium_7b99c1a1_be8c_4d9c_9988_529d0a4da314_8dae0277b2.webp',
    'https://res.cloudinary.com/nextjs-ecommarce/image/upload/v1727261323/be070666_90a9_4246_b758_041e30810d28_e748d5349d.webp',
  ];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setCursorPos({ x, y });
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  return (
    <div className="flex space-x-4">
      {/* Sidebar Images */}
      <div className="w-1/5 space-y-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Product ${index + 1}`}
            className="cursor-pointer object-cover rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main Image with Zoom Effect */}
      <div className="w-4/5 relative">
        <div
          className={`overflow-hidden rounded-lg shadow-md relative ${
            zoom ? 'scale-110' : 'scale-100'
          } transition-transform duration-500 ease-in-out`}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: zoom ? '200%' : '100%',
            backgroundPosition: `${cursorPos.x}% ${cursorPos.y}%`,
          }}
        >
          <Image
            src={selectedImage}
            alt="Selected Product"
            width={600}
            height={600}
            className="opacity-0" // We use the background image instead for zoom effect
          />
        </div>
      </div>
    </div>
  );
};

export default ProductZoom;
