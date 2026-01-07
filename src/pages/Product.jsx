import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { motion } from 'framer-motion'

const page = { hidden:{ opacity:0, y:10 }, enter:{ opacity:1, y:0 }, exit:{ opacity:0, y:-8 } }

export default function Product(){
  const { id } = useParams()
  const p = products.find(x=>x.id===id)
  if(!p) return <div>Product not found</div>

  return (
    <motion.div className="glass p-6 rounded" initial="hidden" animate="enter" exit="exit" variants={page} transition={{duration:0.28}}>
      <div className="md:flex gap-6">
        <div className="md:w-1/2">
          <img src={p.images[0]} alt={p.name} className="w-full rounded" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{p.name}</h2>
          <div className="text-gray-300 mt-2">{p.fabric} • {p.fit}</div>
          <div className="text-3xl font-semibold mt-4">₹{p.price}</div>
          <div className="mt-4">
            <label className="text-sm text-gray-300">Size</label>
            <div className="flex gap-2 mt-2">
              {p.sizes.map(s=> <button key={s} className="px-3 py-1 glass rounded">{s}</button>)}
            </div>
          </div>

          <div className="mt-6">
            <a className="btn bg-amber-400" style={{color:'#111'}} href={`https://wa.me/?text=Enquiry%20about%20${encodeURIComponent(p.name)}`} target="_blank">Enquire on WhatsApp</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
