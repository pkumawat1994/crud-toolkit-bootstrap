import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="container-fluide">
      <nav className="navbar navbar-expand-sm bg-dark mb-2">
  <ul className="navbar-nav">
    <li className="nav-item">
    <Link to="/register"> <button className='btn btn-success m-2' >Register</button></Link>
    </li>
    <li className="nav-item">
    <Link to="/login"> <button className='btn btn-primary m-2' >Login</button></Link>
    </li>
    <li className="nav-item">
    <Link to="/service"> <button className='btn btn-primary m-2' >User List</button></Link>
    </li>
    {/* <li className="nav-item">
    <button className='btn btn-primary m-2' >Logout</button>
    </li> */}
  </ul>
</nav>
    </div>
    </div>
  );
}

export default Header;
