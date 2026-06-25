import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <div className="product-grid">
        <div className="no-results">
          <div className="no-results__icon">🔍</div>
          <h3 className="no-results__title">No products found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
