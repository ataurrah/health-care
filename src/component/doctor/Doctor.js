import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './doctor.css'

const Doctor = (props) => {
    const { name,  description, img } = props.doctor
    console.log( props.doctor)
   
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='cardimg' variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>{description}</p>
                   
                     
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};
export default Doctor;



