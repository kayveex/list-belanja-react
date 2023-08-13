const Footer = ({ items }) => {
  // Guard Case - Kalo Barang Belanjaan kosong
  if (items.length === 0) {
    return <footer className="stats">Belanjaan Anda Masih Kosong !</footer>;
  }

  const totalBelanja = items.length;
  const barangTelahBeli = items.filter((item) => item.isChecked === true).length;
  const percentage = Math.round((barangTelahBeli / totalBelanja) * 100);
  return (
    <footer className="stats">
      Ada {totalBelanja} barang di daftar belanjaan, {barangTelahBeli} barang sudah dibeli ({percentage}%)
    </footer>
  );
};
export default Footer;
