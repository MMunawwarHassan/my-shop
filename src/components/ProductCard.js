import React from 'react';
import { useNavigate } from 'react-router-dom';

function renderStars(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <article className="product-card" onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label={`View ${product.title}`}
    >
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-card__img"
          loading="lazy"
        />
        {product.rating?.rate >= 4.5 && (
          <span className="product-card__badge">Top Rated</span>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__rating">
          <span className="product-card__stars">{renderStars(product.rating?.rate || 0)}</span>
          <span>({product.rating?.count || 0})</span>
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <span className="product-card__action" aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
