import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import SearchFilter from './SearchFilter';

function ProductList({ token }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, [token]);

  const handleSearch = (query) => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.fields.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
