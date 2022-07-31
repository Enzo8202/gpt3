import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
import { Footers } from "../../components";

const footersData = [
  {
    title: 'Links',
    para1: 'Overons',
    para2: 'Social Media',
    para3: 'Counters',
    para4: 'Contact'
  },
  {
    title: 'Company',
    para1: 'Terms & Conditions',
    para2: 'Privacy Policy',
    para3: 'Contact'
  },
  {
    title: 'Get in touch',
    para1: 'Crechterwoord K12 182 DK Alknjkcb',
    para2: '085-132567',
    para3: 'info@payme.net',
  }, 
]

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        {footersData.map((item, index)=> (
          <Footers title={item.title} para1={item.para1} para2={item.para2} para3={item.para3} para4={item.para4} key={item.title + index}/>
        ))}
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div >
  )
}

export default Footer
