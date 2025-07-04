import React from "react";
import styles from "./SlidesWithThumb.module.css";

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

export default function SlidesWithThumb() {
  const [selected, setSelected] = React.useState(0);

  const handlePrev = () => {
    setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Slide with Thumb</h2>
      <div className={styles.mainImageWrapper}>
        <button className={styles.arrowBtn} onClick={handlePrev}>
          &#60;
        </button>
        <img src={images[selected]} alt="slide" className={styles.mainImage} />
        <button className={styles.arrowBtn} onClick={handleNext}>
          &#62;
        </button>
      </div>
      <div className={styles.thumbsWrapper}>
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setSelected(idx)}
            className={`${styles.thumb} ${
              selected === idx ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
