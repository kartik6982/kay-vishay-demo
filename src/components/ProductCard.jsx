import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProductCard({p}){
  return (
    <motion.div whileHover={{ y:-6 }} className="glass p-4 rounded">
      <Link to={`/product/${p.id}`}>
        <div className="h-48 bg-gray-800 rounded overflow-hidden flex items-center justify-center">
          <img src={p.images[0]} alt={p.name} className="object-cover h-full w-full" />
        </div>
        <h3 className="mt-3 font-semibold">{p.name}</h3>
        <div className="text-sm text-gray-300">{p.category} • ₹{p.price}</div>
      </Link>
    </motion.div>
  )
}
