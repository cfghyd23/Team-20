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
        <li><a className="main-nav-link nav-cta" href="https://checkout.stripe.com/c/pay/cs_test_a1Als09AmpwJoa40sDHXqpCQmbs5SKg2xU5lto49pYgkBwT0qwJ345IMj2#fidkdWxOYHwnPyd1blpxYHZxWjA0S01dTEZWTzFOXHF8SUFMPDBWfDZ9MHF8U3VxS3J2UUdpc11gPERIVTIxNnUyNXx8cjdHNn03NDdcdHddNGQ2REFfSGRVRmZWcjI1R2EycFdhb05OTX81NTV9QFMwMmFqMicpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo8RFQ8RkY1TGhmal9mREAwbm4nKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FNjU1NSoneCUl">Donate</a></li>
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