import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'

const page = { hidden:{ opacity:0, y:8 }, enter:{ opacity:1, y:0 }, exit:{ opacity:0, y:-8 } }

export default function Showroom(){
  return (
    <motion.section initial="hidden" animate="enter" exit="exit" variants={page} transition={{duration:0.36}}>
      <div className="hero glass rounded p-8 mb-6">
        <h1 className="hero-title">Refined Style for Modern Men</h1>
        <p className="hero-sub mt-2">Kay Vishay — curated men’s fashion collection</p>
      </div>

      <div className="product-grid">
        {products.map(p=> (
          <div className="card" key={p.id}><ProductCard p={p} /></div>
        ))}
      </div>
    </motion.section>
  )
}
