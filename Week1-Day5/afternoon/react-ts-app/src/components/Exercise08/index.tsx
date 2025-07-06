import { useState } from "react";
import styles from "./DropdownSelection.module.css";

export default function DropdownSelection() {
  const [selected, setSelected] = useState("Apple");

  const handleDropdownSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelected(event.target.value);
  };

  return (
    <div className={styles.container}>
      <select value={selected} onChange={handleDropdownSelection}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
      </select>
      <p>Selected fruit: {selected}</p>
    </div>
  );
}
