import React from 'react'
import products from '../data/products'
import { motion } from 'framer-motion'

function KPI({label, value}){ return (
  <div className="glass p-4 rounded">
    <div className="text-sm text-gray-300">{label}</div>
    <div className="text-2xl font-semibold">{value}</div>
  </div>
)}

export default function Admin(){
  const sales = 125000
  const fast = products[0].name
  const stockValue = products.reduce((s,p)=> s + p.price * Object.values(p.stock).reduce((a,b)=>a+b,0),0)

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.28}}>
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(1,1fr)',gap:12}}>
        <KPI label="Sales (MTD)" value={`₹${sales}`} />
        <KPI label="Fast moving" value={fast} />
        <KPI label="Stock value" value={`₹${stockValue}`} />
      </div>

      <div className="glass p-4 rounded mt-6">
        <h3 className="font-semibold">Offers & Banners</h3>
        <p className="text-gray-300 mt-2">Manage seasonal banners and WhatsApp enquiry tracking here (demo).</p>
      </div>
    </motion.div>
  )
}
