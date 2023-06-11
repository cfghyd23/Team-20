import React from 'react'
import './DashboardNav.css'
const DashboardNav = () => {
  return (
    <header className="header">
    <a href="#">
      <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
    </a>

    <nav className="main-nav ">
      <ul className="main-nav-list">
        <li><a className="main-nav-link" href="#how">Orientation</a></li>
        <li><a className="main-nav-link" href="#meals">User Data</a></li>
        <li>
          <a className="main-nav-link" href="#testimonials">LogOut</a>
        </li>
        <li><a className="main-nav-link nav-cta" href="#cta">Fund Raised</a></li>
      </ul>
    </nav>

    <button className="btn-mobile-nav">
      <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
    </button>
  </header>
  )
}

export default DashboardNav