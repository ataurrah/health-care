import React from 'react';
import pic1 from './Stethoscope.jpg'
import pic2 from './AA.jpeg'
import pic3 from './Transparency-in-the-Doctor-Patient-Relationship-1.jpg'
import { Link } from 'react-router-dom';
const Carosol = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pic1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3 className='text-primary'>LET US PROTECT YOUR HEALTH</h3>
     <Link to='/service'><button className='bg-primary text-white'>Read more</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pic2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h3 >BEST DOCTOR <span className='text-primary'>SUPPORT </span>
        </h3>
        <p >Our doctor are ready to give you best health support for patient because they are providing the better health care with latest medical technologies. .</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pic3} classNameName="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 >SUPPORT <span className='text-primary'>BETTER PATIENT SERVICES</span> </h3>
        <p >APPLE Health Care ready to <span className='text-primary'>support better health care services for patients to achieve a</span>  high degree of patient satisfaction.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Carosol;