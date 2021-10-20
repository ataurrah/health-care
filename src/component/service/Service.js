import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../doctor/Doctor';
import Special from '../special/Special';

const Service = () => {
    const [service, setService] = useState([]);
        useEffect(() => {
            fetch('./test.json')
                .then(res => res.json())
                .then(data => setService(data))
        }
            , [])

    return (
        <div>
        <div>
                <h3 className='bg-primary text-center text-white p-3'>Our Populer services</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        service.map(service => <Special
                            service={service}
                        ></Special>)
                    }
                </Row>
            </div>

         
        </div>
    );
};

export default Service;







    
    
              
    

