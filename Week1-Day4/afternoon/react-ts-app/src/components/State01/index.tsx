import React, { useState } from "react";
import styles from "./Color.module.css";

const COLORS = [
  { label: "Đen", value: "den" },
  { label: "Hồng", value: "hong" },
  { label: "Xanh", value: "xanh" },
];

const ColorPicker: React.FC = () => {
  const [selected, setSelected] = useState("den");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span>Màu:</span>
      {COLORS.map((color) => (
        <button
          key={color.value}
          className={`${styles.colorBtn} ${
            selected === color.value ? styles.active : ""
          }`}
          onClick={() => setSelected(color.value)}
        >
          {color.label}
          {selected === color.value && <span className={styles.check}>✓</span>}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
