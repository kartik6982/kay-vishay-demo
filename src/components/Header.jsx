import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header style={{padding:'12px 16px'}} className="glass">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div className="header-brand">Kay Vishay</div>
          <div style={{fontSize:12, color:'#cfc4b3'}}>Refined Style for Modern Men</div>
        </div>
        <nav style={{display:'flex',gap:18,alignItems:'center'}}>
          <NavLink to="/" style={({isActive})=> ({ color: isActive? 'var(--accent)' : '#e6e6ea' })}>Showroom</NavLink>
          <NavLink to="/pos" style={({isActive})=> ({ color: isActive? 'var(--accent)' : '#e6e6ea' })}>POS</NavLink>
          <NavLink to="/inventory" style={({isActive})=> ({ color: isActive? 'var(--accent)' : '#e6e6ea' })}>Inventory</NavLink>
          <NavLink to="/admin" style={({isActive})=> ({ color: isActive? 'var(--accent)' : '#e6e6ea' })}>Admin</NavLink>
          <a href="/?tour=1" className="btn" style={{background:'transparent', border:'1px solid rgba(255,255,255,0.04)', color:'#e6e6ea'}}>Start Tour</a>
        </nav>
      </div>
    </header>
  )
}
