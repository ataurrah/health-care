import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './speical.css'

const Special = (props) => {
    const { name,  description, img,id } = props.service
    console.log(props);
    return (
        <div>
            <Col className='py-3'>
                <Card className="card-style">
                    <Card.Img className='card-image' variant="top w-100" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p>description:{description.slice(0, 100)}</p>
                   <Link to={`/details/${id}`}>
                   <button className='bg-primary text-white'>Details</button>
                   
                   </Link>
                       
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Special;