import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBIcon, MDBAnimation } from 'mdbreact'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default class UXDesign extends Component {
    render() {
        let WorkIcon = <MDBIcon icon="circle" />;
        return (
            <div>
                 <Navbar/>
                 <div className="about-us linebg react-pt">
                  <MDBContainer>
                      <MDBRow className="d-flex align-items-center">
                          <MDBCol md="6">
                              <div className="about-banner">
                                 <MDBAnimation type="fadeInUp">
                              <h1>Experience UI Design</h1>
                              </MDBAnimation> 
                              <MDBAnimation type="fadeInUp">
                              <p>
                              Pleasant experiences have an enormous impact on conversion rates, brand perception, and customer satisfaction.</p>
                              <p>Our expert visual interface designers and architects support the best work in UX design principles and research. We create captivating user experiences by early validations and keeping users at the focus.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
    <img src={require('../images/mobile-ui-ux-design.jpg')} style={{width:"100%"}} alt=""/>
    </MDBAnimation>
</MDBCol>
                          
                      </MDBRow>
                  </MDBContainer>
              </div>

<div className="interfacebox pt-5 pb-5 layout-main linebg">
    <MDBContainer>
        <MDBRow>
            <MDBCol md="12 flik-content">
            <div className="progress-outer"><MDBAnimation reveal type="fadeInUp">
                                                <div className="circles">
                                                
                                                   <div className="progress1 p-circle">
                                                      <div className="white">THINK</div>
                                                   </div>
                                                  
                                                  
                                                   <div className="progress p-circle wow">
                                                      <div className="white">Design</div>
                                                   </div>
                                                  
                                                   <div className="progress2 wow slideInRight p-circle" data-wow-delay=".1s">
                                                      <div className="white">MEASURE</div>
                                                   </div>
                                                  
                                               
                                                <div className="progress3 wow slideInRight" data-wow-delay=".1s"> </div>
                                                <div className="progress4"> </div>
                                                <div className="progress5 wow slideInLeft" data-wow-delay=".1s"> </div>
                                               
                                                </div>
                                                </MDBAnimation>
                                             </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</div>


<div className="timelinebox pt-5 pb-5 linebg">
    <MDBContainer>
<h2 className="text-center LongTitle is-h4">Our Process</h2>

    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
 
    iconStyle={{ background: 'linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )', color: '#fff' }}
    icon={WorkIcon }
  >
    <h3 className="vertical-timeline-element-title">Design Discovery &
Competitive Analysis</h3>
   
    <p>
    Our discovery period kicks-off with realizing business objectives accompanied closely by profound dive into what's being assembled, why and for whom? The discovery stage holds true even when we are offering mobile application design services. Our benchmarking methods accompanied closely by specifying industry priorities establish the building blocks for design strategy and approach.</p>
    <ul className="digimonk-list">
                                                         <li>Requirement Gathering</li>
                                                         <li>Stakeholder Interviews</li>
                                                         <li>Benchmarking &amp; Data Research</li>
                                                         <li>Heuristic Reviews</li>
                                                      </ul>
    <span className="vertical-timeline-element-date"><img src={require('../images/frame1.png')} alt="" /></span>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
  
    iconStyle={{ background: 'linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )', color: '#fff' }}
    icon={WorkIcon }
  >
    <h3 className="vertical-timeline-element-title">Personas &
User Journey Map</h3>
    
    <p>
    Our user-experience designing services additionally target in understanding customer behavior, attitudes, motives, and also pain-points are foundations for virtually any digital answer. We follow an analytical strategy, to construct customer personas and their touch-points. This helps us to make confident design decisions.</p>
    <ul className="digimonk-list">
    <li>Customer Journey Map</li>
                                                         <li>Personas</li>
                                                         <li>Task Flows</li>
                                                         <li>User Scenarios</li>
                                                      </ul>
    <span className="vertical-timeline-element-date"><img src={require('../images/image2.jpg')} alt="" /></span>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    //date="2008 - 2010"
    iconStyle={{ background: 'linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )', color: '#fff' }}
    icon={WorkIcon }
  >
    <h3 className="vertical-timeline-element-title">Wire-frames &
Prototypes</h3>
    
    <p>
    A fast method of imagining an interface would be by simply producing rapid mockups and wireframes. Wire-frames may also be a significant part of our mobile application design services. All these are helpful to confirm 
    product concepts and layout strategies both with staff members and consumers.</p>
    <ul className="digimonk-list">
                                                         <li>Mockups</li>
                                                         <li>Wire-frames</li>
                                                         <li>Interactive Prototypes</li>
                                                      </ul>
    <span className="vertical-timeline-element-date"><img src={require('../images/img1.jpg')} alt="" />
    
    </span>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
 
    iconStyle={{ background: 'linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )', color: '#fff' }}
    icon={WorkIcon }
  >
    <h3 className="vertical-timeline-element-title">Usability Audit &
Test Reports</h3>
   
    <p>
    We examine the efficacy, and effectiveness of an interface based on 10 established usability principles. Our user experience designing services offer an audit record that collects extensive consumer feedback which is essential to assess the achievement of an interface or design answer. </p>
    <ul className="digimonk-list">
                                                         <li>Usability Plan</li>
                                                         <li>Usability findings</li>
                                                         <li>Heat Maps</li>
                                                         <li>Survey &amp; Feedback</li>
                                                      </ul>
    <span className="vertical-timeline-element-date"><img src={require('../images/monitor.jpg')} alt="" /></span>
  </VerticalTimelineElement>
  
  
</VerticalTimeline>

   
    </MDBContainer>
</div>

<div className="react-benifit pt-5 pb-5 linebg">
    <MDBContainer>

<div className="userineterface text-center">
<MDBAnimation reveal type="fadeInUp">
<h2 className="is-h4 mb-5">User Interface Design</h2>
</MDBAnimation>
<MDBAnimation reveal type="fadeInUp">
    <p>Our team of experienced visual designers, convert wire-frames into exceptionally intuitive user friendly interface layouts. Our user experience designing services rely on creating new age layouts with visual terminology that's 
        in harmony with new doctrine and customer targets.</p>
        <ul className="digimonk-list mb-5">
                                                <li>Visual Designs</li>
                                                <li>Assets Library</li>
                                                <li>Style Guides</li>
                                             </ul>
                                             </MDBAnimation>
                                             <MDBAnimation reveal type="fadeInUp">
                                             <img src={require('../images/wasilkom1.jpg')} alt=""/>
                                             </MDBAnimation>
</div>
    </MDBContainer>
</div>


                 <Footer/>
            </div>
        )
    }
}
