import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container d-flex ms-2">
          <img src="./public/images/logo-removebg-preview.png" alt="" />
          <h3 className="text-warning fw-bolder mt-3">DAILY MEET</h3>
        </div>
        <div className="footer-icons ms-5">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
        <span>Share</span>
          <span>Carrers</span>
          <span>Qualtiy</span>
          <span>Help</span>
          
          
        </div>
        <div className="footer-section-columns">
          <span>124-245-526</span>
          
          <span>contact@gmail.com</span>
        </div>
        
      </div>
    </div>
  )
}

export default Footer