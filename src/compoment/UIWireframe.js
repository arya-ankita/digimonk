import React, { Component } from 'react'
import InnerBannerTop from './InnerBannerTop';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact'

export default class UIWireframe extends Component {
    render() {
        return (
            <div>
             <Navbar/>

          <InnerBannerTop
             breadcrumbname="Home"
             breadcrumactive="UI Wireframing"
             name="UI Wireframing"
             text=" User interface (UI) is the window through which users experience your website, mobile app or desktop solution. Exquisite UI experience can lead to added efficiency, increase the number of users, lower support requests and most importantly, get thousands of happy customers."
          />

              {/* <div className="about-us linebg react-pt">
                  <MDBContainer>
                      <MDBRow className="d-flex align-items-center">
                          <MDBCol md="6">
                              <div className="about-banner">
                                 <MDBAnimation type="fadeInUp">
                              <h1>UI WIREFRAMING</h1>
                              </MDBAnimation> 
                              <MDBAnimation type="fadeInUp">
                              <p>
                              User interface (UI) is the window through which users experience your website, mobile app or desktop solution. Exquisite UI experience can lead to added efficiency, increase the number of users, lower support requests and most importantly, get thousands of happy customers.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
    <img src={require('../images/wireframe.png')} alt=""/>
    </MDBAnimation>
</MDBCol>
                          
                      </MDBRow>
                  </MDBContainer>
              </div> */}

              <div className="react-box pt-5 pb-5">
                  <MDBContainer>
                      <MDBRow>
                      <MDBCol md="5">
                      <MDBAnimation reveal type="fadeInUp">
                          <img src={require('../images/wireimage2.png')}/>
                          </MDBAnimation>
                      </MDBCol>

<MDBCol md="6" className="offset-md-1">

<div className="text-descp">
<MDBAnimation reveal type="fadeInUp">
         <h3 class="pb-3 text-innertitle">Our Expertise</h3>
         <p>Mobile app development is a complex, multi-stage process. The designers at 4Way Technologies take up a wireframe, as the first step towards building a mobile app – a simplified visual concept of the final app.</p>
         </MDBAnimation>
         <ul className="wirelist">
         <MDBAnimation reveal type="fadeInUp">
             <li>
                 <img src={require('../images/wirewireicon1.png')} alt/>
                 <div class="elementor-image-box-content">
                     <h5 class="elementor-image-box-title">Wire framing</h5>
                     <p class="elementor-image-box-description">While creating the wire frame, our designers keep it in mind that the wire frame must be kept as a low-fidelity presentation - for the overall flow of an application. This in other words, mean that they must not be used to pen down the final details of the design. It gives an idea as to how 
                 the application will work - it has nothing to do with the design. </p></div>
             </li>
             </MDBAnimation>

             <MDBAnimation reveal type="fadeInUp">
             <li>
                 <img src={require('../images/wirewireicon2.png')} alt/>
                 <div class="elementor-image-box-content">
                     <h5 class="elementor-image-box-title">User Experience Strategy </h5>
                     <p class="elementor-image-box-description">It is the thought process of our designers to deliver a seamless web and mobile solution. They ensure this by following the best of the design trends. The end result will be a much improved user interaction with the application.  </p></div>
             </li>
             </MDBAnimation>
             <MDBAnimation reveal type="fadeInUp">
             <li>
                 <img src={require('../images/wirewireicon3.png')} alt/>
                 <div class="elementor-image-box-content">
                     <h5 class="elementor-image-box-title">UI Testing  </h5>
                     <p class="elementor-image-box-description">Our designers also build a prototype for an app for interactions with the users. In fact, they build a low profile prototype out of the wireframe that actually tests the interaction design at the earliest possible phase.  </p></div>
             </li>
             </MDBAnimation>
         </ul>
         </div>

</MDBCol>

                      </MDBRow>
                  </MDBContainer>
              </div>

              




              <div className="react-benifit pt-5 pb-5 linebg text-center">
<MDBContainer>
<MDBAnimation reveal type="fadeInUp">
    <img src={require('../images/ui-frame.png')} alt=""/>
    </MDBAnimation>
    
</MDBContainer>
</div>

              <Footer/>
            </div>
        )
    }
}
