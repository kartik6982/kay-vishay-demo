import React, {useState} from 'react'
import products from '../data/products'
import { motion } from 'framer-motion'

function currency(n){ return '₹'+n.toFixed(0) }

export default function POS(){
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState([])
  const found = products.filter(p=> p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))

  function add(p){
    setCart(prev=>{
      const exist = prev.find(x=> x.id===p.id)
      if(exist) return prev.map(x=> x.id===p.id? {...x, qty:x.qty+1}:x)
      return [...prev, {...p, qty:1}]
    })
  }

  const subtotal = cart.reduce((s,i)=> s + i.price * i.qty, 0)
  const gst = subtotal * 0.12
  const total = subtotal + gst

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.28}} className="md:flex gap-6">
      <div className="md:w-2/3">
        <div className="glass p-4 mb-4">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search product by name or category" className="w-full p-3 rounded bg-transparent border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {found.map(p=> (
            <div key={p.id} className="glass p-3 rounded">
              <div className="h-40 mb-2 overflow-hidden"><img src={p.images[0]} alt="" className="w-full h-full object-cover"/></div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-300">{p.category} • {currency(p.price)}</div>
              <button onClick={()=>add(p)} className="mt-2 bg-amber-400 text-black px-3 py-1 rounded">Add</button>
            </div>
          ))}
        </div>
      </div>

      <aside className="md:w-1/3">
        <div className="glass p-4 rounded">
          <h3 className="font-semibold">Cart</h3>
          {cart.length===0 && <div className="text-gray-400 mt-4">No items</div>}
          <div className="mt-3 space-y-2">
            {cart.map(i=> (
              <div key={i.id} className="flex justify-between items-center">
                <div>
                  <div>{i.name}</div>
                  <div className="text-sm text-gray-400">qty: {i.qty}</div>
                </div>
                <div>{currency(i.price * i.qty)}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-3 text-right">
            <div className="text-gray-400">Sub total: {currency(subtotal)}</div>
            <div className="text-gray-400">GST 12%: {currency(gst)}</div>
            <div className="text-xl font-semibold">Total: {currency(total)}</div>
            <button onClick={()=> window.print()} className="mt-3 bg-amber-400 px-4 py-2 rounded">Print Invoice</button>
          </div>
        </div>
      </aside>
    </motion.div>
  )
}
