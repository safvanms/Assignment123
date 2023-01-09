import React from 'react';
import './BarWidgets.css'

export default function BarWidgets(props) {
     const {value, max} = props;
  
     const style = {
       width: `${(value / max) * 100}%`,
     };
     
     return (
       <div className="bar-widget">
         <div className="bar-container">
           <div className="bar" style={style}></div>
         </div>
       </div>
     );
}
