import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './tambah.css'

const AWAL = { nama: '', kategori: 'Outdoor, Indoor', tenggat: '', prioritas: 'sedang' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tanaman</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Outdoor</option>
        <option>Indoor</option>
      </select>

      <label htmlFor="namaLatin">Nama Latin</label>
      <input id="namaLatin" name="namaLatin" value={form.namaLatin} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
      <select id="frekuensiSiram" name="frekuensiSiram" value={form.frekuensiSiram} onChange={ubah}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <label htmlFor="prioritas">Kebutuhan Cahaya</label>
      <select id="prioritas" name="prioritas" value={form.prioritas} onChange={ubah}>
        <option value="rendah">Teduh</option>
        <option value="sedang">Sedang</option>
        <option value="tinggi">Penuh</option>
      </select>

    <button type="submit">Simpan</button>
    </form>
 )
}
