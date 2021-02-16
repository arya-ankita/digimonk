import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact';
import InnerBannerTop from "./InnerBannerTop";
export default class AutomationTesting extends Component {
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Test Automation"
              name="Test Automation"
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
                        <h1>Test Automation</h1>
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
                      <img src={require("../images/tools.png")} alt="" />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
            <section className="gray">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12" className="mb-5">
                    <MDBAnimation reveal type="fadeInUp">
                      <h5 className="font-weight-bold">
                        About Test Automation
                      </h5>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                      </p>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
            <section>
              <MDBContainer>
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInDown">
                      <div className="best">
                        <h5 className="font-weight-bold">Testing</h5>
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

                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <img
                        src={require("../images/automation_about_screen.png")}
                        alt=""
                      />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className="react-box pt-5 pb-5">
              <MDBContainer>
                <MDBAnimation reveal type="fadeInUp">
                  <h3 className="mb-3 text-innertitle">
                    Benefits of Choosing Digimonk
                  </h3>
                </MDBAnimation>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="testingqu">
                        <ul class="digimonk-list">
                          <li>Trusted by leading brands</li>
                          <li>
                            Built-in automation expertise with proven frameworks
                          </li>
                          <li>
                            Ability to respond quickly to changes in business
                            demand
                          </li>
                          <li>More flexible automation processes</li>
                          <li>
                            Simplified test case management; easier integration
                            of different tools
                          </li>
                        </ul>
                      </div>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="testingqu">
                        <ul class="digimonk-list">
                          <li>Increased predictability and reliability</li>
                          <li>Advanced reporting and trend analysis</li>
                          <li>Cohesive analytics and decision support</li>
                          <li>Better resource utilization</li>
                        </ul>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="12" className="mt-5">
                    <MDBAnimation reveal type="fadeInUp">
                      <p>
                        digimonk ranks among leading{" "}
                        <a href="#" target="_blank" className="cloud">
                          automation testing companies
                        </a>
                        . We support your business objectives by designing an
                        automation strategy aligned to business goals, and to
                        your budget. To know more on how can we help you, please
                        drop in a mail to
                        <a className="cloud" href="mailto:info@digimonk.in">
                          info@digimonk.in
                        </a>
                      </p>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>

            <Footer />
          </>
        );
    }
}
