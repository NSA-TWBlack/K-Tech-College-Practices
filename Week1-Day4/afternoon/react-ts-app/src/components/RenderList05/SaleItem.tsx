import styles from "./Sale.module.css";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

interface SaleProps {
  imageUrl: string;
  title: string;
  priceNew: string;
  priceOld?: string;
  discount?: string;
  sold: string;
  rating: number;
}

const SaleItem = ({
  imageUrl,
  title,
  priceNew,
  priceOld,
  discount,
  sold,
  rating,
}: SaleProps) => {
  return (
    <div className={styles.saleCard}>
      <div className={styles.saleImgContainer}>
        <img className={styles.saleImg} src={imageUrl} alt="" />
        <span className={styles.discountPercent}>{discount}</span>
      </div>
      <span style={{ fontSize: "10px" }}>YOUNG SHOP</span>
      <hr style={{ width: "100%" }} />
      <div className={styles.saleInfo}>
        <div className={styles.salePrice}>
          <span className={styles.salePriceNew}>{priceNew}</span>
          <span className={styles.salePriceOld}>{priceOld}</span>
          <span style={{ color: "red", fontSize: "10px" }}>18% off</span>
        </div>
        <p className={styles.saleTitle}>{title}</p>
        <div className={styles.rate}>
          <IoStar className={styles.star} />
          <IoStar className={styles.star} />
          <IoStar className={styles.star} />
          <IoStar className={styles.star} />
          <FaRegStar style={{ fontSize: "10px" }} />
        </div>
        <div className={styles.line}>
          <div style={{ width: `${rating}%` }} className={styles.inLine}></div>
        </div>
      </div>
      <span style={{ fontSize: "10px", marginTop: "10px", color: "gray" }}>
        Sold: {sold}
      </span>
    </div>
  );
};

export default SaleItem;
