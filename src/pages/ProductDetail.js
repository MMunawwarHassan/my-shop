import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function renderStars(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="loading-screen">
            <div className="spinner" />
            <span className="loading-text">Loading product…</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="no-results">
            <div className="no-results__icon">⚠️</div>
            <h3 className="no-results__title">Product not found</h3>
            <p>{error}</p>
            <button className="btn-primary" onClick={() => navigate('/products')} style={{ marginTop: '1.5rem', border: 'none' }}>
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="container">
        <button className="product-detail__back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="product-detail__layout">
          {/* Image */}
          <div className="product-detail__img-wrap">
            <img
              src={product.image}
              alt={product.title}
              className="product-detail__img"
            />
          </div>

          {/* Info */}
          <div className="product-detail__info">
            <span className="product-detail__category">{product.category}</span>
            <h1 className="product-detail__title">{product.title}</h1>

            <div className="product-detail__rating-row">
              <span className="product-detail__stars">
                {renderStars(product.rating?.rate || 0)}
              </span>
              <span className="product-detail__rating-count">
                {product.rating?.rate?.toFixed(1)} ({product.rating?.count} reviews)
              </span>
            </div>

            <div className="product-detail__divider" />

            <div className="product-detail__price">${product.price.toFixed(2)}</div>

            <div>
              <div className="product-detail__desc-label">Description</div>
              <p className="product-detail__desc">{product.description}</p>
            </div>

            <div className="product-detail__badge-row">
              <span className="badge">✓ In Stock</span>
              <span className="badge">🚚 Free Shipping</span>
              <span className="badge">↩️ 30-Day Returns</span>
            </div>

            <div className="product-detail__cta-group">
              <button className="btn-add-cart" onClick={handleAddToCart}>
                {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>
              <button className="btn-wishlist" aria-label="Add to wishlist">♡</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
