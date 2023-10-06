import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    {/* <Link to='/'>Home</Link>
    <Link to='about'>About</Link> */}


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/User">User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Search">Search</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )};
export default Navbar
