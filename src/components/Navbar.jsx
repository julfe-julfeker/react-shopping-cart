import { useSelector } from "react-redux";
import { ShoppingBag } from "lucide-react";

function Navbar({ onCartClick }) {
  const items = useSelector((state) => state.cart.items);

  const totalCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <h2>ShopEasy</h2>

      <button className="cart-icon" onClick={onCartClick}>
        <ShoppingBag size={24} />
        <span>{totalCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;