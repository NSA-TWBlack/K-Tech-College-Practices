import { useState } from "react";
import styles from "./CheckboxToggle.module.css";

export default function CheckboxToggle() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxToggle}
        />
        Toggle me
      </label>
      <p>Checkbox is: {checked ? "checked" : "unchecked"}</p>
    </div>
  );
}
