import './App.css'
import Header from './pages/Header'
import React from 'react'
import Footer from './pages/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Work from './pages/Work'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <div style={{position:'fixed',width:'100%',zIndex:'50'}}><Header/></div>
      <Homepage/>
      <About/>
      <Work/>
      <Testimonials/>
      <Contact/>
      {/* <div className="fullbody bg-dark" style={{height:'50vh'}}>
        <div className='banner text-center'>
          <h1 className='text-danger welcome'>Welcome</h1>
          <p className='text-light'>END YOUR THIRST WITH THE TASTE OF OUR DRINKS</p>
        </div>
      </div> */}
      <hr />
      <Footer/>
    </>
  )
}

export default App