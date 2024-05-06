import React from 'react'
import '../App.css'
import aboutimg from '../assets/1434.jpg_wh860.jpg'
function About() {
  return (
   <>
        <div id='about' className='fullbodyabt  d-flex justify-content-between align-items-center'>
            <div className="partial2 bg-warning"></div>
            <img className='abtimg' style={{width:'50%',height:'110vh'}} src={aboutimg} alt="" />
            <div className='contab'>
                <h4 className="text-warning" >About</h4>
                <p className='abcon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis libero sit ducimus aliquid ipsa magni in aut officia deserunt nisi corporis a ratione asperiores, non, cum dolorum? Esse, quasi.</p>
                <p className='abcon'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident placeat pariatur adipisci, at ad, quaerat cum debitis eaque quisquam eveniet vel ipsa labore ipsum, corrupti quod tempore deleniti quas est?</p> 
                <button className="twobut btn btn-warning text-light mt-5 btn1" style={{height:'50px'}}>Explore More<></></button>
                <button className="btn btn-secondary ms-3 mt-5 btn1" style={{height:'50px'}}> Watch Video</button>
                </div>
        </div>
   </>
  )
}

export default About