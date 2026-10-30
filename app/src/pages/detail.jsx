import { useParams, useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { koleksi, items, hapusKoleksi, hapus } = useKoleksi()

  const daftar = koleksi || items || []
  const item = daftar.find((i) => String(i.id) === String(id))

  if (!item) {
    return (
        <div className="container">
            <h2>Tanaman tidak ditemukan</h2>
            <button onClick={() => navigate('/koleksi')}>Kembali ke koleksi</button>
        </div>
    )

  }

  const handleHapus = () => {
    if (typeof hapusKoleksi === 'function') {
        hapusKoleksi(item.id)
    } else if (typeof hapus === 'function') {
        hapus(item.id)
    }
    navigate('/koleksi')
  }

  return (
    <div className='container'>
        <h1>Detail Tanaman</h1>

        <h2>{item.judul}</h2>
        <p><strong>Kategori:</strong> {item.kategori}</p>

        <p><strong>Nama Latin:</strong> {item.namaLatin}</p>
        <p><strong>Frekuensi Siram:</strong> {item.frekuensiSiram || item.siram || '-'}</p>
        <p><strong>Kebutuhan Cahaya:</strong> {item.kebutuhanCahaya || item.cahaya || '-'}</p>

        <button onClick={handleHapus}>Hapus</button>
        <button onClick={() => navigate('/koleksi')}>Kembali</button>
    </div>

  )
  }