import React from "react";
import { Plus, Minus } from "lucide-react";
import type { Product } from "../../types/Product";
import { useCart } from "./CartContext";

const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN") + " ₫";
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleIncrease = () => {
    if (quantity === 0) {
      addToCart(product);
    } else {
      updateQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="w-full h-48 mb-3 overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
        {product.name}
      </h3>
      <p className="text-lg font-bold text-green-600 mb-4">
        {formatPrice(product.price)}
      </p>

      <div className="flex items-center justify-center">
        {quantity === 0 ? (
          <button
            onClick={handleIncrease}
            className="w-full bg-white text-green-600 border border-green-600 py-2 px-4 rounded-lg transition-colors font-medium"
          >
            Thêm vào giỏ hàng
          </button>
        ) : (
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-green-600 font-medium text-lg">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
