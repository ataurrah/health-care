import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './speical.css'

const Special = (props) => {
    const { name,  description, img } = props.service
    console.log(props);
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='card-image' variant="top w-75" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>description:{description.slice(0, 100)}</p>
                   
                        <button className='bg-primary text-white'>Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Special;