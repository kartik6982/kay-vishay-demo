const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())

const db = require('./data/db.json')

app.get('/api/products', (req, res)=>{
  res.json(db.products)
})

app.post('/api/checkout', (req, res)=>{
  const invoiceId = 'INV' + Date.now()
  // in a real app we'd persist. Return invoice id for demo.
  res.json({ ok:true, invoiceId })
})

app.get('/api/health', (req,res)=> res.json({ok:true}))

const port = process.env.PORT || 4001
app.listen(port, ()=> console.log('Demo API server running on', port))
