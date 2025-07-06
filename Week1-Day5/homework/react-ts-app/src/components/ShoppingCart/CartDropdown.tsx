import React from "react";
import { X } from "lucide-react";
import { useCart } from "./cartContext";

const formatPrice = (price: number): string => {
  return price.toLocaleString("vi-VN") + " ₫";
};

const CartDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Shopping Cart</h3>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 border-b border-gray-100 flex items-center space-x-3"
              >
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {formatPrice(item.price)} × {item.quantity}
                  </p>
                  <p className="text-sm font-semibold text-green-600">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-shrink-0 p-1 text-red-500 hover:text-red-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-800">
                  Tổng cộng:
                </span>
                <span className="text-lg font-bold text-green-600">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                Xem giỏ hàng
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
