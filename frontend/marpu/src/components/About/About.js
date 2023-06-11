import React from 'react'
import './About.css'
import Events from '../events/Events'

function About() {
  return (
    <div>
        <section id="about" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-8 col-sm-6">
                         <div class="about-info">
                              <div class="section-title">
                                   <h2 className='display-5'>Let us introduce</h2>
                                   <span class="line-bar">...</span>
                              </div>
                              
                              <p className=''><b>"MARPU" - The Change.</b><br/>
                                   Join Marpu Foundation in creating a positive impact on the world. We promote volunteering, sustainable development, and environmental conservation, while supporting women and advocating for important causes. Our passionate team is driven by compassion and a strong desire to make a difference. Life can be challenging, so we foster a welcoming and supportive environment for all our volunteers and partners. Whether you're local or global, you can help us build a more just, sustainable, and compassionate world. Awarded "The Best NGO in India" in 2020.</p>
                         </div>
                    </div>


                    <div class="col-md-4 col-sm-12" >
                         <div class="about-image">
                              <img src="images/about-image.jpg" class="img-responsive" alt=""/>
                         </div>
                    </div>
                    
               </div>
          </div>
     </section>
     <Events/>
    </div>
  )
}

export default About