import React from 'react'
import '../App.css'
import BannerImage from "../assets/pexels-photo-1640777.jpeg";
function Homepage() {
  return (
   <>
      <div id='home' className="fullbody" style={{width:'100%',height:'100vh'}}>
        {/* <div className="partial bg-warning"></div> */}
        <div className="homecont" style={{zIndex:'10',position:'absolute'}}>
          <div className="homcontent">
            <h2 className='fw-bolder bhead' >Your Favourite <br />Food Delivred <br />Hot & Fresh</h2>
            <p className='contpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint harum magnam soluta architecto quam quod aliquam atque consequatur modi, rerum esse doloremque, facilis eaque temporibus beatae, corrupti eius fugit?</p>
            <button className='btn btn-warning text-success fw-bolder ordbtn'>Order Now!!</button>
            
          </div>
      <img className='bannerimg' src={BannerImage} alt="banner"/>
      </div>
      </div>
      
   </>
  )
}

export default Homepage