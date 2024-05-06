import React from 'react'

function Contact() {
  return (
    <>
    <div id='contact' className="fullbodycontent" style={{marginTop:'200px',marginBottom:'150px'}}>
        <div className="mainhead" >
            <h1 className="text-center"style={{marginBottom:'100px'}}>
                Have Question In Mind??? <br />
                Let Us Help You..........
            </h1>
            <div className="mail d-flex justify-content-center align-items-center">
                <input type="text" className="bg-light mailinp  text-center" placeholder='Enter your mail'style={{height:'37px'}} />
                <button className="text-light mailbt" style={{width:'100px',height:'35px',marginLeft:'-102px'}}>Submit</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact