const PartItem = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.isChecked} onChange={() => onToggleItem(item.id)} />
      <span style={item.isChecked ? { textDecoration: "line-through" } : {}}>
        {item.name} : {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
};
export default PartItem;
