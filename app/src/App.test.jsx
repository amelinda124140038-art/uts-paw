import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App'

// Test bawaan
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

// --- 5 TEST BUATAN SENDIRI (MENGGUNAKAN VITEST & TESTING LIBRARY) ---

// Test 1: Menampilkan halaman utama
test('menampilkan halaman utama aplikasi', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText(/Koleksi Tanaman/i)).toBeInTheDocument()
})

// Test 2: Menampilkan judul header
test('menampilkan teks judul header', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('banner')).toBeInTheDocument()
})

// Test 3: Menampilkan navigasi
test('menampilkan menu navigasi aplikasi', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})

// Test 4: Menampilkan elemen footer
test('menampilkan footer di bagian bawah', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})

// Test 5: Menampilkan halaman form tambah data
test('menampilkan halaman form tambah tanaman', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('main')).toBeInTheDocument()
})
