import { useEffect, useState } from 'react'
import { KoleksiContext } from './koleksiContext.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

export function KoleksiProvider({ children }) {
  const [items, setItems] = useLocalStorage('uts-paw-koleksi', null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/koleksi.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data')
        return res.json()
      })
      .then((data) => {

        if (!items || items.length === 0 || !items[0]?.namaLatin) {
          localStorage.removeItem('uts-paw-koleksi') // Hapus cache lama
          setItems(data) 
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const tambah = (dataBaru) => {
    const itemBaru = { ...dataBaru, id: String(Date.now()) }
    setItems((prev) => [...(prev || []), itemBaru])
  }

  const hapus = (id) => {
    setItems((prev) => (prev || []).filter((item) => item.id !== id))
  }

  return (
    <KoleksiContext.Provider value={{ items: items || [], loading, error, tambah, hapus }}>
      {children}
    </KoleksiContext.Provider>
  )
}
