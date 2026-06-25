import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(data => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grain" />
        <div className="hero__content container">
          <div className="hero__text">
            <div className="hero__eyebrow">New Collection 2025</div>
            <h1 className="hero__title">
              Style that <em>moves</em> with you
            </h1>
            <p className="hero__subtitle">
              Discover curated products that blend quality craftsmanship with modern design. Every item, thoughtfully selected for the life you want to live.
            </p>
            <div className="hero__cta-group">
              <Link to="/products" className="btn-primary">
                Shop Now →
              </Link>
              <Link to="/about" className="btn-ghost">
                Our Story
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__img-card">🛍️</div>
            <div className="hero__img-card">👔</div>
            <div className="hero__img-card">💎</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="features__grid">
            <div className="feature-item">
              <div className="feature-item__icon">🚚</div>
              <div className="feature-item__title">Free Shipping</div>
              <p className="feature-item__desc">On all orders over $50. Fast, reliable delivery to your door.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon">🔒</div>
              <div className="feature-item__title">Secure Payments</div>
              <p className="feature-item__desc">Your financial data is encrypted and always protected.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon">↩️</div>
              <div className="feature-item__title">Easy Returns</div>
              <p className="feature-item__desc">30-day hassle-free return policy, no questions asked.</p>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon">⭐</div>
              <div className="feature-item__title">Curated Quality</div>
              <p className="feature-item__desc">Every product hand-picked and reviewed by our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '5rem 0 7rem' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Featured</div>
            <h2 className="section-title">Handpicked for You</h2>
            <p className="section-desc">
              A curated selection of our most popular and highly-rated products across all categories.
            </p>
          </div>

          {loading ? (
            <div className="loading-screen">
              <div className="spinner" />
              <span className="loading-text">Loading products…</span>
            </div>
          ) : (
            <div className="product-grid">
              {featured.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn-primary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'var(--ink)',
        padding: '5rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,73,10,0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
            Limited Time
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            color: 'var(--warm-white)',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Up to 40% off this week
          </h2>
          <p style={{ color: 'rgba(255,253,249,0.55)', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Don't miss out on exclusive deals across all our categories.
          </p>
          <Link to="/products" className="btn-primary">
            Shop the Sale →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
