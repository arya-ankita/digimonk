import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact';
import InnerBannerTop from "./InnerBannerTop";
export default class SecurityAudit extends Component {
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Security Testing"
              name="Security Testing"
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
                        <h1>Security Testing</h1>
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
                      <img
                        src={require("../images/security-testing-services.png")}
                        alt=""
                      />
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
                      <img
                        src={require("../images/security-testing.png")}
                        alt=""
                      />
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInDown">
                      <div className="best">
                        <h2>Testing</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>

                        <ul class="digimonk-list">
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

            <section>
              <MDBContainer>
                <MDBAnimation reveal type="fadeInUp">
                  <div className="text-center">
                    <h2 className="mb-3 text-innertitle">
                      Benefits of Security Testing
                    </h2>
                    <p>
                      What are you losing on if you do not avail security
                      testing services?
                    </p>
                  </div>
                </MDBAnimation>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="securty text-center">
                        <div class="icon mb-3">
                          <img
                            class="img-responsive"
                            src={require("../images/evaluation.png")}
                            alt=""
                          />
                        </div>
                        <h5>Runs Thorough Evaluation</h5>
                        <p>
                          It evaluates the security of the application
                          infrastructure and moves further to covering the
                          database, network, and application exposure layers.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="securty text-center">
                        <div class="icon mb-3">
                          <img
                            class="img-responsive"
                            src={require("../images/offers-timely-heads-up.png")}
                            alt=""
                          />
                        </div>
                        <h5>Offers Timely Heads-up</h5>
                        <p>
                          It evaluates the security of the application
                          infrastructure and moves further to covering the
                          database, network, and application exposure layers.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="securty text-center">
                        <div class="icon mb-3">
                          <img
                            class="img-responsive"
                            src={require("../images/Unveils-vulnerabilities.png")}
                            alt=""
                          />
                        </div>
                        <h5>Unveils Possible Vulnerabilities</h5>
                        <p>
                          It evaluates the security of the application
                          infrastructure and moves further to covering the
                          database, network, and application exposure layers.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <Footer />
          </>
        );
    }
}
