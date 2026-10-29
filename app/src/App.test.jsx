import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'
import Header from './components/header.jsx'
import Footer from './components/ofoter.jsx'
import KartuTanaman from './components/kartuTanaman.jsx'

// Test 1: Bawaan template
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

// Test 2: Cek header
test('cek judul header', () => {
  render(<Header />)
  expect(screen.getByText('Aplikasi Koleksi Tanaman')).toBeInTheDocument()
})

// Test 3: Cek footer
test('cek teks footer', () => {
  render(<Footer />)
  expect(screen.getByText('Koleksi Tanaman')).toBeInTheDocument()
})

// Test 4: Cek judul kartu
test('cek judul di kartu tanaman', () => {
  render(<KartuTanaman judul="Lidah Mertua" kategori="Hias" />)
  expect(screen.getByText('Lidah Mertua')).toBeInTheDocument()
})

// Test 5: Cek kategori kartu
test('cek kategori di kartu tanaman', () => {
  render(<KartuTanaman judul="Lidah Mertua" kategori="Hias" />)
  expect(screen.getByText('Kategori: Hias')).toBeInTheDocument()
})

// Test 6: Cek render sederhana
test('cek komponen header muncul', () => {
  render(<Header />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})
