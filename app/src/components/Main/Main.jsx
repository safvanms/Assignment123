import React from 'react';
import datas from '../../profile.json';
import './Main.css';


export default function Main() {
  const details = datas.profile.map((data) => {
    const { image, name, designation, about } = data;
    return (
      <>
        <div className="profile">
          <img src={image} alt={name} />
        </div>
        <div className="details">
          <h1>{name}</h1>
          <h3>{designation}</h3>
        </div>
        <div className="about">
          <h2> About me</h2>
          <p>{about}</p>
        </div>
      </>
    )
  })
  return details;
}
