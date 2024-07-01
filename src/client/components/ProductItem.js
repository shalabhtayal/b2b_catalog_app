import React from 'react';

function ProductItem({ product }) {
  return (
    <div>
      <h3>{product.category}</h3>
      <p>Record count: {product.record_count}</p>
      <p>Fields: {product.fields}</p>
    </div>
  );
}

export default ProductItem;
