import React, {useState, useEffect} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Showroom from './pages/Showroom'
import Product from './pages/Product'
import POS from './pages/POS'
import Inventory from './pages/Inventory'
import Admin from './pages/Admin'
import Header from './components/Header'
import GuidedDemo from './components/GuidedDemo'

export default function App(){
  const location = useLocation()
  const [tourOpen, setTourOpen] = useState(false)

  useEffect(()=>{
    const q = new URLSearchParams(location.search)
    if(q.get('tour') === '1') setTourOpen(true)
  }, [location.search])

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Showroom/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/pos" element={<POS/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
      {tourOpen && <GuidedDemo onClose={()=> setTourOpen(false)} />}
    </div>
  )
}
