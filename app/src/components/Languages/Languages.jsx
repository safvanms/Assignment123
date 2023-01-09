import React from 'react'
import RadialWidget from '../RadialWidget/RadialWidget';
import './Languages.css';

export default function Languages() {
  return (
    <div >
      <h2 className='l-head'>Languages</h2>
      <p className='l-details'>Lorem ipsom dolor sit amet , blah blah blah</p>
      <div className='languages'>
        <RadialWidget language='English' size="170" />
        <RadialWidget language='German'  size="120" />
        <RadialWidget language='Italian'  size="80" />
      </div>
    </div>
  )
}
