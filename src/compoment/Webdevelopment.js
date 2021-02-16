import InnerBannerTop from "./InnerBannerTop";

import {
  MDBAnimation,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Webdevelopment extends Component {
  render() {
    return (
      <div>

        <Navbar />

           <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Web Development"
              name="Web Development"
              text="We at Digimonk Technologies mold businesses leveraging
              cutting-edge digital technologies,
               experience design, and analytics."
            />

         <div className="sectopgap24 linebg">
          {/* <MDBContainer> 
            <MDBAnimation type="fadeInUp">
              <MDBView className="overlay3">
                <img src={require("../images/services.jpg")} alt="" />

                <MDBMask className="flexwebcdev-10">
                  <MDBRow className="lastsense-10">
                    <h1 className="webcdev-10">Web Development</h1>
                    <p className="paracwebdev-10">
                      We at Digimonk Technologies mold businesses leveraging
                      cutting-edge digital technologies,
                      <br /> experience design, and analytics.
                    </p>
                  </MDBRow>
                </MDBMask>
              </MDBView>
            </MDBAnimation>
          </MDBContainer>  */}

          {/* <MDBContainer>
            <MDBRow md={6} className="webdev-10">
              <MDBAnimation reveal type="fadeInUp">
                <p className="topcontent-10">
                  Web development is about solving complex problems on the web
                  through creative and cutting edge technologies. To see this
                  through, we at Digimonk Technologies provide a complete end to
                  end web solutions that help brands to leverage their business.
                </p>
              </MDBAnimation>
            </MDBRow>
          </MDBContainer> */}
          <div className="pb-5">
            <MDBContainer>
              <div className="text-center">
                <MDBAnimation reveal type="fadeInUp">
                  <h2 className="font-weight-bold">
                    We help companies traverse the complex
                  </h2>
                  <h4>Web Development Journey</h4>
                </MDBAnimation>
              </div>
              <MDBRow className="creative-media-box pt-5 pb-5 d-flex align-items-center">
                <MDBCol md="6">
                  <div className="text-right">
                    <div className="media">
                      <div className="media-body">
                        <h5 className="media-heading">Front-end Development</h5>
                        <p>
                          A great web appearance needs a highly engaging and
                          interactive front-end development. Our expert
                          developers can mold your ideas and graphics into a
                          highly responsive HTML5, Javascript or CSS3, which
                          turns out to deliver the best solutions for our
                          clients.
                        </p>
                      </div>
                      <div className="media-right">
                        <span className="blank">
                          <i className="fa fa-3x fa-cubes"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <h5 className="media-heading">
                          Custom Web Development
                        </h5>
                        <p>
                          Fully customized web solutions for your organization's
                          numerous web requirements. We specialize in giving
                          custom web development projects with 100% accuracy &
                          perfectly meeting your business necessities. Our team
                          of developers is skilled at using cutting-edge
                          technologies to customize everything from the
                          appearance & quality of front-end to master back-end
                          programming that results in a much dynamic, fully
                          operative & interactive web solution.
                        </p>
                      </div>
                      <div className="media-right">
                        <span className="blank">
                          <i className="fa fa-3x fa-mobile"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <h5 className="media-heading">
                          Open Source Platform Development
                        </h5>
                        <p>
                          We use off-the-shelf development solutions to save
                          time & money. We provide custom open source
                          development services including content management
                          solutions that assure built-in flexibility & fast
                          turnaround at a much affordable cost.
                        </p>
                      </div>
                      <div className="media-right">
                        <span className="blank">
                          <i className="fa fa-3x fa-plug"></i>
                        </span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-body">
                        <h5 className="media-heading">
                          E-Commerce Development
                        </h5>
                        <p>
                          Fully customized web solutions for your organization's
                          numerous web requirements. We specialize in giving
                          custom web development projects with 100% accuracy &
                          perfectly meeting your business necessities. Our team
                          of developers is skilled at using cutting-edge
                          technologies to customize everything from the
                          appearance & quality of front-end to master back-end
                          programming that results in a much dynamic, fully
                          operative & interactive web solution.
                        </p>
                      </div>
                      <div className="media-right">
                        <span className="blank">
                          <i className="fa fa-3x fa-line-chart"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="6" className="text-center">
                  <img
                    src={require("../images/Web-Application-Development.jpg")}
                    alt=""
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          {/* enablers */}
          <div className="mainback" style={{ backgroundColor: "#fafafa" }}>
            <MDBContainer>
              <div className="headcard">
                <MDBCardTitle className="headsubtit">
                  Web Development Enablers
                </MDBCardTitle>
              </div>
              <MDBRow className="same-12">
                <MDBCol md={3} className="caredena">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/Cloud_0.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">cloud</MDBCardTitle>
                </MDBCol>

                <MDBCol md={3} className="caredena">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/Mobility_1.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">Mobility</MDBCardTitle>
                </MDBCol>
                <MDBCol md={3} className="caredena">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/UI-UX.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">
                    UI/UX Technologies
                  </MDBCardTitle>
                </MDBCol>

                <MDBCol md={3} className="caredena">
                  <MDBAnimation type="fadeInUp">
                    <img
                      src={require("../images/Artificial-Intelligence.png")}
                      alt=""
                    />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">
                    Artificial Intelligence
                  </MDBCardTitle>
                </MDBCol>
              </MDBRow>

              <MDBRow className="saame-13">
                <MDBCol md={3} className="caredena-12">
                  <MDBAnimation type="fadeInUp">
                    <img
                      src={require("../images/Digital-Marketing_1.png")}
                      alt=""
                    />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">
                    Digital Marketing
                  </MDBCardTitle>
                </MDBCol>

                <MDBCol md={3} className="caredena-12">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/IOT.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">
                    Internet of Things
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol md={3} className="caredena-12">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/Big-Data.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">Big Data</MDBCardTitle>
                </MDBCol>

                <MDBCol md={3} className="caredena-12">
                  <MDBAnimation type="fadeInUp">
                    <img src={require("../images/Analytics_11.png")} alt="" />
                  </MDBAnimation>
                  <MDBCardTitle className="headena">Analytics</MDBCardTitle>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>

          <div className="linebg">
            <MDBContainer>
              <MDBRow className="maindiff-12">
                <div className="differn-10">
                  <h1>Our Key Differentiators</h1>
                </div>

                <MDBCol md={6} className="sssdorted">
                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      Strategy and Consulting
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        Our consulting services help formulate a cohesive
                        digital approach to integrate digital technologies with
                        the current infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      MVP approach for fast GTM
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        Complete product engineering services that bring ideas
                        into realities with a faster time to market.
                      </p>
                    </div>
                  </div>

                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      Analytics-led Approach
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        Finding key insights to improve the process, respond to
                        changes and pivot fast with iterative development.
                      </p>
                    </div>
                  </div>
                </MDBCol>

                <MDBCol md={6} className="sssdorted">
                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      Design led Engineering
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        A design-led strategy to entirely transform the user
                        experience and build engaging web and mobile solutions.
                      </p>
                    </div>
                  </div>
                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      Agile Methodologies and Lean Mindset
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        We are a lean and Agile company and use a combination of
                        Scrum, XP, and Kanban for software development and
                        project management.
                      </p>
                    </div>
                  </div>
                  <div className="statrdo">
                    <MDBCardTitle className="strado-10">
                      Open Communication
                    </MDBCardTitle>

                    <div className="parastardo">
                      <p className="card-text">
                        Honest, collaborative approach and two-way interaction
                        with clients for higher productivity.
                      </p>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
