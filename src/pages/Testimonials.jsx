import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Person1 from '../assets/p1.jpg'
import Person2 from '../assets/p2.jpg'
import Person3 from '../assets/p3.jpg'
import star from '../assets/star.png'

function Testimonials() {
  return (
    <>
        <div id='testimonials' className='fullbodycontent' style={{marginTop:'150px'}}>
            <div className='bodycontent text-center'>
            <h4 className="text-warning ">Review</h4>
            <h2 className='fw-bolder'>What They Are Saying</h2>
            <p className='para mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda perferendis labore odio eaque ducimus? Iste illo, asperiores ipsa officiis ex maiores vitae quidem omnis. Nam assumenda labore vitae hic repudiandae.</p>
            </div>
            <div className="card2 d-flex justify-content-around align-items-center" style={{marginTop:'150px'}}>
            <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Milan millian</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus maxime provident asperiores dignissimos minima ducimus sunt. Nesciunt ad iusto Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere corporis quod, placeat voluptatem cum est, officia, sapiente vero quidem laboriosam provident qui corrupti aspernatur quas. Aut id minima a quis. neque odio enim, suscipit cupiditate perspiciatis libero unde repellat dolores.            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>George Joseph</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate perferendis officia consectetur autem dolorem quibusdam error. Earum vitae praesentium Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nesciunt illo, aut impedit architecto laboriosam numquam corporis consequatur debitis a hic qui veritatis, sit adipisci neque veniam quaerat in dolor? enim magni temporibus ducimus tempore numquam, vel, unde suscipit saepe voluptates.            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Charles</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas laboriosam eos optio mollitia natus assumenda sequi voluptate? Optio similique iure deleniti nihil eius! Magnam, hic quos! Nesciunt, magnam odit.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores facilis deserunt nam fuga excepturi ut quam. Eos hic minima aperiam repellendus? Delectus, mollitia expedita quam eum non consequuntur voluptates soluta.            </Card.Text>
          </Card.Body>
        </Card>
        
            </div>
        </div>
    </>
  )
}

export default Testimonials