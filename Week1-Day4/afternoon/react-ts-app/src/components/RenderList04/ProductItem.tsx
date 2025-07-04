import styles from "./Product.module.css";

interface ProductProps {
  imageUrl: string;
  title: string;
  priceNew: string;
  priceOld?: string;
  discount?: string;
}

const ProductItem = ({
  imageUrl,
  title,
  priceNew,
  priceOld,
  discount,
}: ProductProps) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgContainer}>
        <img className={styles.productImg} src={imageUrl} alt="" />
        <span className={styles.discountPercent}>{discount}</span>
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{title}</p>
        <div className={styles.productPrice}>
          <span className={styles.productPriceNew}>{priceNew}</span>
          <span className={styles.productPriceOld}>{priceOld}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
