import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
 <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>


      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              {/* <a className="nav-link active" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abouttext}</Link>
            </li>
          </ul>
    <div className="d-flex ">
      <div className="bg-info rounded mx-2" onClick={()=>{props.togglemode('info')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-secondary rounded mx-2" onClick={()=>{props.togglemode('secondary')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode('warning')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode('danger')}} style={{height:'30px', width:'30px',cursor:'pointer'}}></div>
    </div>


          <form className="d-flex " role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>

        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
        <input className="form-check-input" onClick={()=>{props.togglemode(null)}} type="checkbox" role="switch" id="switchCheckDefault" />
        <label className="form-check-label" htmlFor="switchCheckDefault"> {props.mode === 'dark'?'light':'dark' }</label>
        </div>

        
        </div>
      </div>
    </nav>
  );
}

// ✅ Props validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

// ✅ Default values (will apply if no props passed)
Navbar.defaultProps = {
     title: 'Stranger'
    };