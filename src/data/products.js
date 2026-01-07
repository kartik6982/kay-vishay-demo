const products = [
  {
    id: 'p1',
    name: 'The Savile Shirt',
    category: 'Shirts',
    price: 4299,
    images: ['/assets/shirt-1.svg'],
    sizes: ['S','M','L','XL'],
    color: 'Ivory',
    stock: { S:5, M:8, L:4, XL:2 },
    fabric: 'Egyptian cotton',
    fit: 'Tailored'
  },
  {
    id: 'p2',
    name: 'The Royale Trouser',
    category: 'Trousers',
    price: 5499,
    images: ['/assets/trouser-1.svg'],
    sizes: ['30','32','34','36'],
    color: 'Charcoal',
    stock: { '30':6, '32':6, '34':2, '36':1 },
    fabric: 'Wool blend',
    fit: 'Slim'
  },
  {
    id: 'p3',
    name: 'The Heritage Jacket',
    category: 'Formal Wear',
    price: 15999,
    images: ['/assets/jacket-1.svg'],
    sizes: ['38','40','42'],
    color: 'Navy',
    stock: { '38':2,'40':1,'42':0 },
    fabric: 'Silk blend',
    fit: 'Regular'
  }
]

export default products
