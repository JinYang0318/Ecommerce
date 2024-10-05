import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    productId: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/product/all')
      .then(response => {
        setProducts(response.data); 
        setLoading(false);
      })
      .catch(err => {
        setError(err.message); 
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul className = "test">
        {products.map((product) => (
            <div key={product.productId}>
                {product.productId}
                {product.productName}
                {product.productPrice}
                {product.productQuantity}
            </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
