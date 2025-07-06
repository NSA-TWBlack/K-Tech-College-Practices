import React, { useState } from "react";
import { CartProvider } from "./components/ShoppingCart/cartContext";
import CartIcon from "./components/ShoppingCart/CartIcon";
import CartDropdown from "./components/ShoppingCart/CartDropdown";
import ProductGrid from "./components/ShoppingCart/ProductGrid";

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-green-600">Big Market</h1>
                <nav className="hidden md:flex space-x-4">
                  <span className="text-sm text-gray-600">
                    Danh mục sản phẩm
                  </span>
                </nav>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <CartIcon onClick={() => setIsCartOpen(!isCartOpen)} />
                  <CartDropdown
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Thực phẩm khô
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Gia vị",
                "Gạo, bún, phở, miến",
                "Đồ hộp, thực phẩm sơ chế đông gói",
                "Bột các loại",
                "Bánh đa nem, rám",
                "Hạt các loại",
                "Mộc nhĩ, măng, nấm khô",
              ].map((category) => (
                <button
                  key={category}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <ProductGrid />
        </main>

        {/* Overlay for cart dropdown */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-opacity-25 z-40"
            onClick={() => setIsCartOpen(false)}
          />
        )}
      </div>
    </CartProvider>
  );
};

export default App;
