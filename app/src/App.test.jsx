import { render, screen } from '@testing-library/react'
import { MmeoryRouter } from 'react-router-dom'
import {expect, test } from 'vitest'
import App from './App.jsx.'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import KartuTanaman from './components/kartuTanaman.jsx'

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidaj-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('cek judul header', () => {
  render(<Header/>)
  expect(screen.getByText('Aplikasi Koleksi Tanaman')).toBeInTheDocument()
})

test('cek teks footer', () => {
  render(<Footer />)
  expect(screen.getByText('Koleksi Tanaman')).toBeInTheDocument()
})

test('cek judul di kartu tanaman', () => {
  render(<KartuTanaman judul="Lidah Mertua" kategori="Hias" />)
  expect(screen.getByText('Lidah Mertua')).toBeInTheDocument()
})

test('cek judul di kartu tanaman' , () => {
  render(<KartuTanaman judul="Lidah Mertua" kategori="Hias" />)
  expect(screen.getByText('Kategori: Hias')).toBeInTheDocument()
})

test('cek komponen header muncul', () => { 
  render(<Header />)
  expect(screen,getByRole('banner')).toBeInTheDocument()
})
