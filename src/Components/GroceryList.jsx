import { useState } from "react";
import PartItem from "./PartItem";

const GroceryList = ({ items, onDeleteItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // if (sortBy === "input") {
  //   sortedItems = items;
  // }

  // if (sortBy === "name") {
  //   sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  // }

  // if (sortBy === "isChecked") {
  //   sortedItems = items.slice().sort((a, b) => a.isChecked - b.isChecked);
  // }

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "isChecked":
      sortedItems = items.slice().sort((a, b) => b.isChecked - a.isChecked);
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <PartItem item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="isChecked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
};
export default GroceryList;
