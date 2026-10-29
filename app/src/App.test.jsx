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

test('menampilkan halaman utama aplikasi', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByText('banner')).toBeInTheDocument()
})


test('menampilkan teks judul header', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('banner')).toBeInTheDocument()
})


test('menampilkan menu navigasi aplikasi', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})


test('menampilkan footer di bagian bawah', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})


test('menampilkan halaman form tambah tanaman', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>
  )
  expect(screen.getByRole('main')).toBeInTheDocument()
})
