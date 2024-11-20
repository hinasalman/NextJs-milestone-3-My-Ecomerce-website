// src/app/products/[id]/page.js 

'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = window.location.pathname.split('/')[2];

    const productData = {
      1: { id: 1, name: 'Basic T-shirt', description: 'Comfortable cotton t-shirt for everyday wear.', price: 20.99, image: '/images/basic-tshirt.jpg' },
      2: { id: 2, name: 'Cute Baby Dress', description: 'Soft cotton baby dress with cute design.', price: 15.99, image: '/images/cute-baby-dress.jpg' },
      3: { id: 3, name: 'Graphic T-shirt', description: 'Stylish graphic t-shirt for casual outings.', price: 25.99, image: '/images/graphic-tshirt.jpg' },
    };

    setProduct(productData[productId]);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => alert('Added to cart')}>Add to Cart</button>
      <button onClick={() => router.push('/cart')}>Go to Cart</button>
    </div>
  );
};

export default ProductDetailPage;