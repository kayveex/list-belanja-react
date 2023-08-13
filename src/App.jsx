import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import GroceryList from "./Components/GroceryList";
import Footer from "./Components/Footer";
// import "./App.css";

// Dummy Data
const GrocItems = []; //Array Kosong - List dari Users

// Main Function
export default function App() {
  const [items, setItems] = useState(GrocItems);

  // Add Item
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // Delete Item
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  // If isChecked = true, akan jadi false.. dan sebaliknya
  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item)));
  };

  // Function to Clear All Items
  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}
