# 🌊 ShopWave — React E-Commerce App

A modern, fully-featured e-commerce product listing website built with React.js.

---

## 📦 Tech Stack

- **React 18** — Functional components with hooks
- **React Router v6** — Client-side routing
- **FakeStore API** — Product data source
- **Vanilla CSS** — Custom design system with CSS variables

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm installed

### Installation

```bash
# 1. Navigate into the project
cd shopwave

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.js         # Fixed top navigation with mobile hamburger menu
│   ├── Footer.js         # Site footer with links
│   ├── ProductCard.js    # Individual product card
│   ├── ProductList.js    # Grid of product cards
│   └── SearchBar.js      # Controlled search input
├── pages/
│   ├── Home.js           # Hero banner + featured products
│   ├── Products.js       # Full product listing with search & filter
│   ├── ProductDetail.js  # Single product detail view
│   ├── About.js          # Brand story page
│   └── Contact.js        # Contact form
├── App.js                # Root component with Router & Routes
├── index.js              # React DOM entry point
└── styles.css            # Global design system
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏠 Home Page | Hero banner, features strip, featured products, CTA section |
| 🛍️ Products Page | Fetches all 20 products from FakeStore API |
| 🔍 Search | Real-time filter by product title |
| 🏷️ Category Filter | Filter by electronics, jewelry, men's, women's clothing |
| 📄 Product Detail | Full product info with add-to-cart interaction |
| 📱 Responsive | Works on mobile, tablet, and desktop |
| ⏳ Loading States | Spinner while fetching from API |
| ❌ Error Handling | Graceful error messages on fetch failure |

---

## 🎨 Design System

The design uses CSS custom properties for a consistent look:

```css
--cream: #FAF7F2;       /* Page background */
--ink: #1A1612;          /* Primary text */
--accent: #C8490A;       /* Brand orange-red */
--gold: #D4A853;         /* Star ratings, accents */
--font-display: 'Playfair Display'; /* Headings */
--font-body: 'DM Sans';             /* Body text */
```

---

## 📡 API

Products are fetched from [FakeStore API](https://fakestoreapi.com):

- `GET /products` — All products (Products page)
- `GET /products?limit=4` — Featured products (Home page)
- `GET /products/:id` — Single product (Detail page)

---

## 🛠️ Build for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to deploy on Netlify, Vercel, or any static host.
