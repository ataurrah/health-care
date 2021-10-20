import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Carosol from '../carsol/Carosol';
import Doctor from '../doctor/Doctor';
import Special from '../special/Special';

const Home = () => {
const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./test.json')
            .then(res => res.json())
            .then(data => setService(data))
    }
        , [])



        const [doctor, setDoctor] = useState([]);
useEffect(() => {
    fetch('./doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
}
    , [])
    return (
        <div>
            <Carosol></Carosol>


            <div>
                <h3 className='bg-primary text-center text-white p-3'>Our Populer Courses</h3>
                <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                    {
                        service.slice(0, 9).map(service => <Special
                            service={service}
                        ></Special>)
                    }
                </Row>
            </div>
            <h3 className='bg-primary text-center text-white p-3'>Our specalist doctor</h3>
                  <Row xs={1} md={3} lg={4} className="g-4 ms-3">
                      {
                          doctor.slice(0, 9).map(doctor => <Doctor
                              doctor={ doctor}
                          ></Doctor>)
                      }
                  </Row>

            <div>

            </div>








        </div>
    );
};

export default Home;
