export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari Tanaman..."
      aria-label="Cari Tanaman"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}