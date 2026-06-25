import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero */}
        <div className="about-hero">
          <div>
            <div className="about-hero__label">Our Story</div>
            <h1 className="about-hero__title">
              We believe in <em>quality</em> without compromise
            </h1>
            <p className="about-hero__text">
              ShopWave was founded in 2020 with a single mission: make it easier for people to find products they'll actually love. We carefully curate every item in our store, testing for quality, value, and longevity.
            </p>
            <br />
            <p className="about-hero__text">
              We're not just another online store. We're a team of passionate individuals who believe shopping should feel exciting, not overwhelming. Every product earns its place on our platform.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-visual__block">🌊<span>Our Wave</span></div>
            <div className="about-visual__block">⭐<span>Top Rated</span></div>
            <div className="about-visual__block">🌍<span>Global Reach</span></div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-card__number">50K+</div>
            <div className="stat-card__label">Happy Customers</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">200+</div>
            <div className="stat-card__label">Curated Products</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">4.8★</div>
            <div className="stat-card__label">Average Rating</div>
          </div>
        </div>

        {/* Values */}
        <div className="section-header" style={{ marginTop: '4rem' }}>
          <div className="section-eyebrow">Our Values</div>
          <h2 className="section-title">What We Stand For</h2>
        </div>

        <div className="about-values">
          <div className="value-card">
            <div className="value-card__icon">🎯</div>
            <div className="value-card__title">Intentional Curation</div>
            <p className="value-card__text">
              Every product is hand-selected by our team. We review hundreds of options and only list the best, so you don't have to.
            </p>
          </div>
          <div className="value-card">
            <div className="value-card__icon">🤝</div>
            <div className="value-card__title">Customer First</div>
            <p className="value-card__text">
              We measure success by your satisfaction. Our support team is always ready to help, and our return policy is hassle-free.
            </p>
          </div>
          <div className="value-card">
            <div className="value-card__icon">🌱</div>
            <div className="value-card__title">Sustainable Practice</div>
            <p className="value-card__text">
              We prioritize eco-friendly packaging and partner with suppliers who share our commitment to a healthier planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
