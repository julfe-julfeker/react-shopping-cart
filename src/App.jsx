import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { products } from "./data/products";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <main className="container">
        <div className="hero">
          <h1>Discover Amazing Products</h1>
          <p>Shop your favorite products at great prices.</p>
        </div>

        <div className="product-toolbar">
          <h2>Our Products</h2>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>

      {isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}

      <footer className="footer">
        © 2026 ShopEasy. All rights reserved.
      </footer>
    </>
  );
}

export default App;