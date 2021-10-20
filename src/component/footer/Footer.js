import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
    return (
        <div>
            <div className="mt-3 pt-3 pb-5 footer">
<div className="container">
  <div className="row ">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>Quik link</h2>
      <ul className="m-0 p-0 list d-flex justify-content-center">
          <li> <a href="/service">DOCTOR LIST</a></li>
          <li> <a href="/service">PATHELOGY</a></li>
          <li> <a href="/service">REGISTATION</a></li>
          <li><a href="/service">CONTRACT US</a></li> 
        </ul>
      <p><a href="/"><i className="fa fa-facebook-square mr-1"></i></a><a href="/"><i className="fa fa-linkedin-square"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">FOLLOW US</h4>
        <ul className="m-0 p-0 list ">
          <li> <a href="/">Email</a></li>
          <li> <a href="/">FACEBOOK</a></li>
          <li> <a href="/">INSTRAGRAM</a></li>
          <li><a href="/">TWITTER</a></li> 
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Chawkbazar, chittagong
      </p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(+880) 017157463</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div className="row ">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2021. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Footer;