import { useState } from "react";
import styles from "./SearchFilter.module.css";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
