import React from 'react'
import './events.css'
import img1 from '../../images/blog-image1.jpg'
function Events() {
  return (
    <div>
             <section id="blog" data-stellar-background-ratio="0.5">
          <div class="container">
               <div class="row">

                    <div class="col-md-12 col-sm-12">
                         <div class="section-title">
                              <h2>our Events</h2>
                              <span class="line-bar">...</span>
                         </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                         <div class="media blog-thumb">
                              <div class="media-object media-left">
                                   <a href="#">
                                    <img src={img1} class="img-responsive" alt="" height="100%"/></a>
                              </div>
                              <div class="media-body blog-info">
                                   
                                   <h3><a href="">Quality Education</a></h3>
                                   <p>Ensure inclusive and equitable quality education and opportunities for all.</p>
                                   <a href="" class="btn section-btn">Read article</a>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                         
                         <div class="media blog-thumb">
                              <div class="media-object media-left">
                                   <a href="#"><img src={img1} class="img-responsive" alt=""/></a>
                              </div>
                              <div class="media-body blog-info">
                                   
                                   <h3><a href="#">Zero Hunger</a></h3>
                                   <p>End hunger,achieve food security and improved nutrition,and promote sustainable agriculture.</p>
                                   <a href="#" class="btn section-btn">Read Article</a>
                              </div>
                         </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                         
                         <div class="media blog-thumb">
                              <div class="media-object media-left">
                                   <a href="#"><img src={img1} class="img-responsive" alt=""/></a>
                              </div>
                              <div class="media-body blog-info">
                                   
                                   <h3><a href="#">Rural_Development</a></h3>
                                   <p>Rural Development aims to uplift rural areas and improve the socio-economic conditions of rural communities.</p>
                                   <a href="#" class="btn section-btn">Read Article</a>
                              </div>
                         </div>
                    </div>

                     
                    
               </div>
          </div>
     </section>
    </div>
  )
}

export default Events