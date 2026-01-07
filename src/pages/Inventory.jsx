import React from 'react'
import products from '../data/products'
import { motion } from 'framer-motion'

export default function Inventory(){
  return (
    <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:0.28}} className="glass p-4 rounded">
      <h2 className="text-2xl font-semibold">Inventory</h2>
      <table className="w-full mt-4">
        <thead className="text-left text-gray-400">
          <tr><th>Product</th><th>Variant Stock</th><th>Low</th></tr>
        </thead>
        <tbody>
          {products.map(p=> (
            <tr key={p.id} className="border-t border-gray-800">
              <td className="py-3">{p.name}</td>
              <td>
                {Object.entries(p.stock).map(([size,qty])=> (
                  <span key={size} className="inline-block mr-3">{size}: {qty}</span>
                ))}
              </td>
              <td>{Object.values(p.stock).some(q=> q<=2) ? <span className="text-amber-400">YES</span> : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
