import React from 'react'
import './Experience.css'
import datas from '../../profile.json'

export default function Experience() {
  const details = datas.profile.map((data) => {
    const { text} = data
    return (
      <div className="e-contents">
        <h1>Experience</h1>

        <div className="exp-head">
          <span>Junior Assistant</span>
          <span>2018</span>
        </div>
        <p>{text}</p>

        <div className="exp-head">
          <span>Junior Architect</span>
          <span>2019</span>
        </div>
        <p>{text}</p>

        <div className="exp-head">
          <span>project manager</span>
          <span>2020</span>
        </div>
        <p>{text}</p>

        <div className="exp-head">
          <span>Mid level Architect</span>
          <span>2026</span>
        </div>
        <p>{text}</p>
        
      </div>
    )
  })
  return details;
}
