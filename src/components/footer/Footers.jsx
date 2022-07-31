import React from 'react'
import './footers.css'
const Footer = ({ title, para1, para2, para3, para4 }) => {
  return (
    <div className="gpt3__footer-links_div">
      <h4>{title}</h4>
      <p>{para1}</p>
      <p>{para2} </p>
      <p>{para3}</p>
      <p>{para4}</p>
    </div>
  )
}

export default Footer