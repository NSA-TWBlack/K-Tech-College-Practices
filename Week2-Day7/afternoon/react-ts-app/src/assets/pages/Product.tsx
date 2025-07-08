import React, { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import Sidebar from "./Sidebar";

type Product = {
  id: number;
  images: string[];
  title: string;
  price: number;
};

const limit = 4;

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const fetchAllProductsCount = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setTotalProducts(data.length);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        if (selectedCategories.length === 0) {
          const offset = (currentPage - 1) * limit;
          const response = await fetch(
            `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
          );
          const data = await response.json();
          setProducts(data);

          if (totalProducts === 0) {
            await fetchAllProductsCount();
          }
        } else {
          const categoryRequests = selectedCategories.map((id) =>
            fetch(
              `https://api.escuelajs.co/api/v1/categories/${id}/products`
            ).then((res) => res.json())
          );
          const results = await Promise.all(categoryRequests);
          const merged = results.flat();
          setTotalProducts(merged.length);

          const offset = (currentPage - 1) * limit;
          const paginated = merged.slice(offset, offset + limit);
          setProducts(paginated);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "Đã xảy ra lỗi");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, currentPage]);

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="p-4 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="hidden md:block">
        <Sidebar
          onCategoryChange={(ids) => {
            setSelectedCategories(ids);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="col-span-3">
        <h3 className="font-bold text-base mb-3">Danh sách sản phẩm</h3>

        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="text-gray-500">Đang tải sản phẩm...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="text-red-500">Lỗi: {error}</span>
          </div>
        ) : products.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <span className="text-gray-500">Không có sản phẩm nào</span>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {products.map((product) => {
                const imageUrl = Array.isArray(product.images)
                  ? product.images[0]
                  : product.images;

                return (
                  <div className={styles.productCard} key={product.id}>
                    <div className={styles.productImgContainer}>
                      <img
                        className={styles.productImg}
                        src={imageUrl}
                        alt={product.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/300x200?text=No+Image";
                        }}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <p className={styles.productTitle}>{product.title}</p>
                      <div className={styles.productPrice}>
                        <span className={styles.productPriceNew}>
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex justify-center items-center space-x-1 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200"
                : "text-black border-gray-300"
            }`}
          >
            Prev
          </button>

          {(() => {
            const pages = [];
            const maxPagesToShow = 7;
            let startPage = Math.max(
              currentPage - Math.floor(maxPagesToShow / 2),
              1
            );
            let endPage = startPage + maxPagesToShow - 1;

            if (endPage > totalPages) {
              endPage = totalPages;
              startPage = Math.max(endPage - maxPagesToShow + 1, 1);
            }

            for (let i = startPage; i <= endPage; i++) {
              pages.push(
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`px-3 py-1 border rounded ${
                    i === currentPage
                      ? "bg-orange-500 text-white"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {i}
                </button>
              );
            }
            return pages;
          })()}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200"
                : "text-black border-gray-300"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
