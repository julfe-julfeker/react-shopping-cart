import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import { X, Trash2 } from "lucide-react";

function Cart({ onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Shopping Cart ({totalItems})</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>৳{item.price.toLocaleString()}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  aria-label="Remove item"
                >
                  <Trash2 size={19} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total</strong>
            <strong>৳{totalPrice.toLocaleString()}</strong>
          </div>

          <button className="checkout-btn" disabled={!items.length}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;