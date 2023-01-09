import React from 'react'
import './RadialWidget.css'

export default function RadialWidget({ language, size}) {
  return (
    <div className="main">
      <div className="outer">
        <div className="inner">
          <div id="name " className="name">
            {language}
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="70px"
        height="70px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="35"
          cy="35"
          r="30"
          stroke-linecap="round"
          stroke-dasharray={size}
          stroke-dashoffset={0}
        />
      </svg>
    </div>
  )
}
