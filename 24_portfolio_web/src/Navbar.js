import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>Shrikant Jamale</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" activeClassname='page_active' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassname='page_active'  to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassname='page_active' to="/contact">Contact</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" activeClassname='page_active' to="/projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul className="dropdown-menu">

          <li><Link className="dropdown-item" to="/react">React</Link></li>
            <li><Link className="dropdown-item" to="/javascript">JavaScript</Link></li>
            <li><Link className="dropdown-item" to="/HtmlCss">HTML/CSS</Link></li>
            </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
