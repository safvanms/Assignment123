import React from 'react';
import BarWidgets from '../BarWidget/BarWidgets';
import './Skills.css'

export default function Skills() {
  return (
    <div className='skill'> 
     <p>inerior design</p>
     <BarWidgets value={80} max={100} />
     <p>3d modeling</p>
     <BarWidgets value={90} max={100} />
     <p>photography</p>
     <BarWidgets value={60} max={100} />
    </div>
  )
}
