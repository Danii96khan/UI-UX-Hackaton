'use client';

import Image from 'next/image';
import Link from 'next/link';

const AsgaardSofaPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumb Bar */}
      <div className="text-gray-500 text-sm my-4">
        <Link href="/" className="hover:text-black">Home</Link> &gt;
        <Link href="/shop" className="hover:text-black">Shop</Link> &gt;
        <span className="font-semibold">Asgaard Sofa</span>
      </div>

      {/* 1st Section with Three Columns */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Column: Four Images */}
        <div className="flex flex-col gap-4">
          <Image
            src="/image/s2p1c1r1.png"
            alt="Product 1"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/s2p1c1r2.png"
            alt="Product 2"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/s2p1c1r3.png"
            alt="Product 3"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
          <Image
            src="/image/asgaardsofa.jpeg"
            alt="Product 4"
            width={150}
            height={150}
            className="object-contain mx-auto"
          />
        </div>

        {/* Second Column: Large Image */}
        <div>
          <Image
            src="/image/asgaardsofa.jpeg"
            alt="Asgaard Sofa Large Image"
            width={1000}
            height={1000}
            className="object-contain"
          />
        </div>

        {/* Third Column: Product Details */}
        <div className="flex flex-col gap-4">
          {/* Product Name */}
          <h1 className="text-3xl font-bold">Asgaard Sofa</h1>

          {/* Price */}
          <p className="text-xl text-gray-500">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(4)].map((_, index) => (
              <span key={index} className="text-yellow-500">&#9733;</span> // Filled stars
            ))}
            <span className="text-gray-300">&#9733;</span> {/* Half star */}
            <span className="ml-2 text-sm text-gray-500">5 Customer Review</span>
          </div>

          {/* Size Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Size:</span>
            <button className="px-4 py-2 border rounded">XS</button>
            <button className="px-4 py-2 border rounded">L</button>
            <button className="px-4 py-2 border rounded">XL</button>
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-2">
            <span className="font-bold">Color:</span>
            <button className="w-8 h-8 rounded-full border bg-blue-500"></button>
            <button className="w-8 h-8 rounded-full border bg-black"></button>
            <button className="w-8 h-8 rounded-full border bg-beige-500"></button>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded text-center"
            />
            <button className="bg-black text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsgaardSofaPage;
