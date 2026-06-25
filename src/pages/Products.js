import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

const ALL = 'all';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categories = [ALL, ...Array.from(new Set(products.map(p => p.category)))];

  const filtered = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === ALL || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <div className="section-eyebrow">Our Collection</div>
          <h1 className="section-title">All Products</h1>
          {!loading && (
            <p className="section-desc" style={{ marginLeft: 0, marginRight: 0, textAlign: 'left' }}>
              Showing {filtered.length} of {products.length} products
            </p>
          )}
        </div>

        <div className="products-controls">
          <SearchBar value={search} onChange={setSearch} />
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-filter__btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === ALL ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading-screen">
            <div className="spinner" />
            <span className="loading-text">Loading products…</span>
          </div>
        ) : error ? (
          <div className="no-results">
            <div className="no-results__icon">⚠️</div>
            <h3 className="no-results__title">Something went wrong</h3>
            <p>{error}</p>
          </div>
        ) : (
          <ProductList products={filtered} />
        )}
      </div>
    </div>
  );
}

export default Products;
