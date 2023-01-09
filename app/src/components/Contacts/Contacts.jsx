import React from 'react';
import './Contact.css';
import datas from '../../profile.json';


export default function Contacts() {
  const contactDetails = datas.profile.map((data) => {
    const { email, phone } = data
    return (
      <div className='contact'>
        <h2>contacts</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    )
  })

  return contactDetails;
}
