import React from 'react'
import './Education.css'
import datas from '../../profile.json'

export default function Education() {
  const details = datas.profile.map((data) => {
    const {bachelor, master} = data
    return (
      <div className="education">
        <h2>Education</h2>
        <div className="e-head">
          <span>Bachelor of Architecture</span>
          <span>2014</span>
        </div>
        <p>{bachelor}</p>
        <div className="e-head">
          <span>Masters of Architecture</span>
          <span>2018</span>
        </div>
        <p>{master}</p>
      </div>
    )
  })
  return details ;
}
