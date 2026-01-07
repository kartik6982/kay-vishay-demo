import React, {useState} from 'react'

const steps = [
  {title:'Welcome', body:'Welcome to the Kay Vishay demo. This tour shows the key flows: Showroom → Enquiry → POS → Inventory → Dashboard.'},
  {title:'Showroom', body:'Browse curated collections and open a product to enquire on WhatsApp.'},
  {title:'POS', body:'Fast billing interface with search, GST calculation and print-ready invoice.'},
  {title:'Inventory', body:'View size-wise stock and low-stock alerts.'},
  {title:'Admin', body:'Premium dashboard: sales KPIs and offers management.'}
]

export default function GuidedDemo({onClose}){
  const [i, setI] = useState(0)
  function next(){ if(i < steps.length -1) setI(i+1); else onClose() }

  return (
    <div className="overlay-tour">
      <div className="tour-card">
        <h3 style={{margin:0}}>{steps[i].title}</h3>
        <p style={{color:'#cfc4b3'}}>{steps[i].body}</p>

        <div className="tour-controls">
          <button className="btn" onClick={onClose}>Close</button>
          <button className="btn bg-amber-400" onClick={next} style={{color:'#111'}}>{i < steps.length-1 ? 'Next' : 'Finish'}</button>
        </div>
      </div>
    </div>
  )
}
