import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ()
{
  return(
    <div className="pb-5">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">K1ngkun</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav justify-content-center nav-tabs mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">List of Restaurants</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-student">Add Restaurant</Link>
              </li>
              <li className="nav-item">
                <a className='nav-link' target="_blank" href='https://github.com/ohayotmq/restaurant_manage_test'>Github source </a>
              </li>
              <li className="nav-item">
                <a className='nav-link' target="_blank" href='https://www.facebook.com/tmq1012/'>Contact </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;