import useKoleksi from '../hooks/useKoleksi.js'

export default function Statistik() {
  const { koleksi, items } = useKoleksi()
  const data = koleksi || items || []

  const perKategori = data.reduce(
    (hitung, { kategori }) => ({
      ...hitung,
      [kategori]: (hitung[kategori] ?? 0) + 1,
    }),
    {}
  )

  return (
    <section>
      <h1>Statistik</h1>
      <div className="tabel-gulir">
        <table className="tabel-data">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(perKategori).map(([kategori, jumlah]) => (
              <tr key={kategori}>
                <td>{kategori}</td>
                <td>{jumlah}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td>{data.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}