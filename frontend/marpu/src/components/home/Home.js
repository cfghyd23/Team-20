import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
      <section id="home" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-sm-12">
              <div className="home-info">
                <h1>Individually, we are drops. Together, we are an ocean of change.<br /> Let's join hands and create ripples of hope, compassion, and empowerment that will transform our world.
                </h1>
                <a href="#about" className="btn section-btn smoothScroll">Know us</a>


              </div>
            </div>



          </div>
        </div>
      </section>

    </div>
  )
}

export default Home