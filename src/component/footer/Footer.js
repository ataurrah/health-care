import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div>
            <div className=" footer py-2">
<div className="container">
  <div className="row ">
    <div className="col-lg-5 col-xs-12 about-company">
      <h4 className='text-center'>Quik link</h4>
      <ul className="m-0 p-0  list d-flex justify-content-center">
          <a className='mx-3 link' href="/service">DOCTOR LIST</a>
          <a className='mx-3 link' href="/service">PATHELOGY</a>
          <a className='mx-3 link' href="/service">REGISTATION</a>
         <a className='mx-3 link' href="/service">CONTRACT US</a>
        </ul>
      <p><a href="/"><i className="fa fa-facebook-square mr-1"></i></a><a href="/"><i className="fa fa-linkedin-square"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3 text-center">FOLLOW US</h4>
        <ul className="m-0 p-0 text-center list ">
         <a  className='mx-3 link' href="https://mail.google.com/mail/u/0/#inbox">Email</a>
           <a  className='mx-3 link' href="https://www.facebook.com/profile.php?id=100006844984015">FACEBOOK</a>
           <a  className='mx-3 link' href="https://www.instagram.com/">INSTRAGRAM</a>
          
        </ul>
    </div>
    <div className="col-lg-4 text-center col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Chawkbazar, chittagong
      </p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(+880) 017157463</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div className="row ">
    <div className="col copyright">
      <p className="text-center"><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Footer;