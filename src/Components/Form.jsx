import { useState } from "react";

// Form
const Form = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);
  // Handle Change Name
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guard Clause -> Biar user harus masukin nama barang, baru bisa submit
    if (!name) return;
    const newItem = { name: name, quantity: qty, isChecked: false, id: Date.now() };
    onAddItem(newItem);
    // console.log(newItem);
    setName("");
    setQty(1);
  };

  // Handle Add Qty

  // Looping Untuk Ngasih Dropdown upto 20
  // const qtyNum = [...Array(20)].map((_, i) => (
  //   <option key={i + 1} value={i + 1}>
  //     {i + 1}
  //   </option>
  // ));

  const qtyNum = Array.from({ length: 20 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {qtyNum}
      </select>
      <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      <button>Tambah</button>
    </form>
  );
};
export default Form;
