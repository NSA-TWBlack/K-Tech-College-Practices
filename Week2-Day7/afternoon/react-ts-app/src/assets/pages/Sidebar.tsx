// Sidebar.tsx
import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

type Props = {
  onCategoryChange: (selectedIds: number[]) => void;
};

const Sidebar = ({ onCategoryChange }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCheckboxChange = (id: number) => {
    let updated: number[];
    if (selectedIds.includes(id)) {
      updated = selectedIds.filter((catId) => catId !== id);
    } else {
      updated = [...selectedIds, id];
    }
    setSelectedIds(updated);
    onCategoryChange(updated);
  };

  return (
    <div>
      <h3 className="font-bold text-base mb-3">Bộ lọc</h3>
      {categories.map((category) => (
        <div key={category.id}>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={category.id}
              onChange={() => handleCheckboxChange(category.id)}
              checked={selectedIds.includes(category.id)}
            />
            <span>{category.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
