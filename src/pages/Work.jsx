import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap';
import c1 from '../assets/pick-meals-image.png'
import c2 from '../assets/choose-image.png'
import c3 from '../assets/delivery-image.png'
function Work() {
  return (
    
    <>
        <div id='work' className="fullbodycontent" style={{marginTop:'120px'}}>
            <div className="head1 text-center">
                <h4 className="text-warning">Work</h4>
                <h1>How It Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor necessitatibus. Fuga corrupti iusto, voluptates quos adipisci voluptatibus aliquam ullam et itaque? Corporis ad quos temporibus voluptatibus quasi nemo distinctio!</p>
    
            </div>
            <div className="card1 d-flex justify-content-around align-items-center mt-5 mb-5">
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c1} />
          <Card.Body>
            <Card.Title><h3 className='text-center'>Pick Meals</h3></Card.Title>
            <Card.Text style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi velit minus sed fugit! Reprehenderit soluta nobis laboriosam
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c2} />
          <Card.Body>
            <Card.Title><h3  className='text-center'>Choose How Often</h3></Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure veniam, illo tempora ea inventore deserunt, hic excepturi possimus.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={c3} />
          <Card.Body>
            <Card.Title><h3  className='text-center'>Fast Deliveries</h3></Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est rem, quam at facere cupiditate veritatis officia consequatur !
            </Card.Text>
          </Card.Body>
        </Card>
            </div>
        </div>
        
    </>
  )
}

export default Work