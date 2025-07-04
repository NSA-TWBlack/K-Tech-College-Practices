import React from "react";
import styles from "./Product.module.css";

interface IDeletingProductProps {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  onDelete: (id: number) => void;
}

const ProductItem = ({
  id,
  imageUrl,
  title,
  price,
  onDelete,
}: IDeletingProductProps) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} className={styles.productImg} />
      <div className={styles.productContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <button className={styles.deleteBtn} onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
};

export default ProductItem;
