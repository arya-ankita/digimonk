import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact';

import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="about-us linebg">
                  <MDBContainer>
                      <MDBRow>
                          <MDBCol md="12">
                              <div className="about-banner">
                                 <MDBAnimation reveal type="fadeInUp">
                              <h1>PORTFOLIO</h1>
                              </MDBAnimation> 
                              <MDBAnimation reveal type="fadeInUp">
                              <p>
                              Our teams continually develop different
types of web applications and products. To
learn more, choose a story below.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>

              <div className="protfolio">
<MDBContainer>
<ul id="filters" className="clearfix">
			<li><span className="filter active" data-filter=".app, .card, .icon, .logo, .web1">All</span></li>
			<li><span className="filter" data-filter=".app">App</span></li>
			<li><span className="filter" data-filter=".card1">Card</span></li>
			<li><span className="filter" data-filter=".icon">Icon</span></li>
			<li><span className="filter" data-filter=".logo">Logo</span></li>
			<li><span className="filter" data-filter=".web1">Web</span></li>
		</ul>
        <div id="portfoliolist">
			
			<div class="portfolio app" data-cat="app">
				<div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>				

			<div class="portfolio app" data-cat="app">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>		
			
			<div class="portfolio app" data-cat="app">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>				
			
			<div class="portfolio app" data-cat="app">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>	
						
					
			
	
			
																																									
			
																	
			
			<div class="portfolio card1" data-cat="card1">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>				

			<div class="portfolio card1" data-cat="card1">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>																	

			<div class="portfolio card1" data-cat="card1">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>													
			
								

			<div class="portfolio web1" data-cat="web1">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>																								

					
			
			<div class="portfolio web1" data-cat="web1">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>																	

			<div class="portfolio icon" data-cat="icon">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>																																																																

					
			
										
																		

																														
			
																									
		

			<div class="portfolio logo" data-cat="logo">
            <div class="portfolio-wrapper">				
					<div className="digiproject">
                        <h5>digimonk Product</h5>
                        <h2>Dashify</h2>
                        <p>An Enterprise-Level WordPress Appointment Booking Plugin</p>
                    </div>
                    <div className="overproject">
                        <Link to="/">View Project</Link>
                    </div>
                    <img src={require('../images/artboard_2-svg.svg')} />
				
				</div>
			</div>				
										
			
		</div>
</MDBContainer>

              </div>

<div className="why-client linebg">

    <MDBContainer>
        <MDBRow>
            <MDBCol md="8" className="offset-md-2">
<div className="headingtitle">
    <h2 className="is-h4">What our clients say</h2>
    <p>“We worked with TMS on several custom projects. First we built a bespoke app based on their product, and then implemented additional independent custom solutions for our needs, including an online 3D viewer for point clouds filmed by our airborne equipment. Despite the time zone difference, TMS team was very responsive, always suggested several approaches for solving the challenges, quickly 
        identified pros and cons of different solutions, which helped us deliver an optimal product.”</p>
</div>

            </MDBCol>
        </MDBRow>
    </MDBContainer>
</div>

                <Footer/>
                
            </div>
        )
    }
}
