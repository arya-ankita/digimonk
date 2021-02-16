import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact';
import InnerBannerTop from "./InnerBannerTop";
export default class WebandAppTesting extends Component {
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Web and App Testing"
              name="Web and App Testing"
              text="Test Automation is the application of automation
                          technology which is conducted throughout the software
                          testing lifecycle with an aim of delivering capability
                          faster and in more affordable way."
            />
            <section>
              <MDBContainer>
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="6">
                    <div className="about-banner">
                      <MDBAnimation type="fadeInUp">
                        <h1>Web and App Testing</h1>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInUp">
                        <p>
                          Test Automation is the application of automation
                          technology which is conducted throughout the software
                          testing lifecycle with an aim of delivering capability
                          faster and in more affordable way.
                        </p>
                      </MDBAnimation>
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <MDBAnimation type="fadeInUp">
                      <img src={require("../images/mobileimage1.png")} alt="" />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <img src={require("../images/wasilkom1.jpg")} alt="" />
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInDown">
                      <div className="best">
                        <h3>Web Testing</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>

                        <ul className="digimonk-list">
                          <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </li>
                          <li>
                            Integer blandit turpis eget nulla vestibulum
                            sodales.
                          </li>
                          <li>
                            Aenean fermentum mauris semper, maximus mi vitae,
                            tempus tortor.
                          </li>
                          <li>
                            Donec iaculis sapien sit amet porttitor feugiat.
                          </li>
                        </ul>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className="pt-5 pb-5 text-center">
              <MDBContainer>
                <MDBAnimation reveal type="fadeInUp">
                  <div className="text-center mb-5">
                    <h2 className="mb-3">
                      Why to chose us for mobile app testing services
                    </h2>
                    <p>
                      We have been one of the top Mobile App testing Companies
                      for over 13 years, and have been able to deliver 3X fixes
                      in half the time.
                      <br />
                      Following are the various other reasons why you should
                      choose us…
                    </p>
                  </div>
                </MDBAnimation>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="feature-screen">
                        <div className="leftanimation right-margin f-screen1 animated rotateInDownRight go">
                          <img
                            src={require("../images/complete-integration-app-testing.png")}
                            alt=""
                          />
                        </div>
                        <div className="leftanimation left-margign animated rotateInDownLeft go">
                          <img
                            src={require("../images/mt-feature-screen2.png")}
                            alt=""
                          />
                        </div>
                      </div>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6">
                    <div className="media-box text-left" id="feature">
                      <div className="media">
                        <div className="media-left">
                          <div className="f-icon" data-number="1">
                            <i className="fa fa-building fa-lg"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>Structured and Planned Testing Approach</h5>
                          <p>
                            From creating unit test jobs to executing complete
                            integration app testing, we plan our every move.
                          </p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <div className="f-icon" data-number="2">
                            <i className="fa fa-bell-slash fa-lg"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>100+ Devices</h5>
                          <p>
                            We have a collection of 100+ different mobile
                            devices of all platforms and we test on every single
                            one of them.
                          </p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <div className="f-icon" data-number="3">
                            <i className="fa fa-group fa-lg"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <h5>Integrated Reporting</h5>
                          
                          <p>
                            solutions have integrated reporting and test
                            management solutions to ensure smooth execution and
                            evaluation of tests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>

            <Footer />
          </>
        );
    }
}
