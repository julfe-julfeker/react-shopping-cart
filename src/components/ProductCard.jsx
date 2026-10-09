import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="price">৳{product.price.toLocaleString()}</p>

        <button onClick={() => dispatch(addToCart(product))}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;