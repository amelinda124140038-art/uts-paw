import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

const AWAL = {
  judul: '',
  kategori: '',
  namaLatin: '',
  frekuensiSiram: '',
  kebutuhanCahaya: '',
}

export default function Tambah() {
  const { tambahKoleksi, tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()

    if (!form.judul || !form.judul.trim()) {
      setGalat('Judul wajib diisi!')
      return
    }

    const itemBaru = {
      id: Date.now().toString(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      namaLatin: form.namaLatin,
      frekuensiSiram: Number(form.frekuensiSiram) || 1,
      kebutuhanCahaya: form.kebutuhanCahaya,
    }

    if (typeof tambahKoleksi === 'function') {
      tambahKoleksi(itemBaru)
    } else if (typeof tambah === 'function') {
      tambah(itemBaru)
    }

    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tanaman</h1>

      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="judul">Judul Tanaman</label>
      <input
        id="judul"
        name="judul"
        type="text"
        value={form.judul}
        onChange={ubah}
      />

      <label htmlFor="kategori">Kategori</label>
      <input
        id="kategori"
        name="kategori"
        type="text"
        value={form.kategori}
        onChange={ubah}
      />

      <label htmlFor="namaLatin">Nama Latin</label>
      <input
        id="namaLatin"
        name="namaLatin"
        type="text"
        value={form.namaLatin}
        onChange={ubah}
      />

      <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
      <input
        id="frekuensiSiram"
        name="frekuensiSiram"
        type="number"
        value={form.frekuensiSiram}
        onChange={ubah}
      />

      <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
      <input
        id="kebutuhanCahaya"
        name="kebutuhanCahaya"
        type="text"
        value={form.kebutuhanCahaya}
        onChange={ubah}
      />

      <button type="submit">Simpan</button>
    </form>
  )
}
