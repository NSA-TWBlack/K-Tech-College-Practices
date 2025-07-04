import { useState } from "react";
import styles from "./exercise04.module.css";

export default function HoverHighlight() {
  const handleMouseEnter = () => {
    document.body.style.background = "yellow";
  };
  const handleMouseLeaves = () => {
    document.body.style.background = "white";
  };

  return (
    <div className={styles.container}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeaves}
        className={styles.mouseHover}
      >
        Hover me!
      </div>
    </div>
  );
}
