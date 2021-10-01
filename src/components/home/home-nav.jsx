import React from "react"
import {Link} from "react-router-dom"

function Homenav(){
return <div id="title">
<div className="colored-section container-fluid">
<nav className="navbar  navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/">Abhay</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link className = "nav-link"to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className = "nav-link"to="/projects">Projects</Link>
      </li>
      <li className="nav-item">
      <Link className = "nav-link"to="/contact">Contact</Link>
      </li>
  </ul>
</div>
</nav>
<div className="row intro">
                <div className="col-lg-6 col-md-6 text">
                <h1 >Hey I'm Abhay  </h1>
                <p className="developer">A Fullstack Developer</p>
                <button type="button" className="btn btn-dark btn-lg download-button"> Contact me</button>
               
               </div>
             
               <div className="col-lg-6 col-md-6 coder">
                <img className ="title-image"src="https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif" alt="iphone-mockup"></img>
            </div>
          </div>
</div>
</div>
}
export default Homenav;
