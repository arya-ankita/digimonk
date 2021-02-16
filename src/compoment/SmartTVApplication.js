import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
export default class SmartTVApplication extends Component {
    render() {
        return (
          <div>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Smart TV Application"
              name="Smart TV Application Development"
              text="Applications for smart TVs help brands to connect with
                          the users more deeply. We have designed and developed"
            />
            <section>
              <MDBContainer>
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="6">
                    <div className="about-banner">
                      <MDBAnimation type="fadeInUp">
                        <h2 className="mb-3">Smart TV Application Development</h2>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInUp">
                        <p>
                          Applications for smart TVs help brands to connect with
                          the users more deeply. We have designed and developed
                          well-tested Smart TV applications for some of the
                          world's top brands that aim to storm into the TV
                          space. We have vast experience in developing
                          applications for all leading connected TVs and media
                          streaming devices such as Apple, Roku, Samsung Native,
                          Android, Tizen, Amazon Fire, and Smart TV Alliance.{" "}
                        </p>
                      </MDBAnimation>
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <MDBAnimation type="fadeInUp">
                      <img
                        src={require("../images/smart_tv_app_development_comapny-1.jpg")}
                        style={{ width: "100%" }}
                        alt=""
                      />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <h2 className="mb-5 text-center">
                  Smart TV Application Development Expertise
                </h2>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <img
                        src={require("../images/smart_tv_app_developer-1.png")}
                      />
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="text-descp">
                        <h3 class="pb-3">
                          Technical Expertise{" "}
                        </h3>
                        <p>
                          We have <strong>Smart TV app development</strong>{" "}
                          experience in working across a wide array of
                          technologies such as Samsung Native, Samsung Tizen app
                          development. We also have the expertise in working
                          with Apple TV, Android TV, Roku TV and Amazon Fire. We
                          are known to deal expertly with all the platforms and
                          smart TV OS.
                        </p>
                        <h3 class="pb-3 text-innertitle">
                          Working Seamlessly{" "}
                        </h3>
                        <p>
                          We work seamlessly across Multiple Platforms with our
                          VOD apps and live streaming, while leveraging
                          third-party tools.
                          <span>
                            Our developers are well-versed with all the new
                            updates released by big brands or modifications made
                            into the respective OS and hence can work flawlessly
                            on any smart TV OS. Working faultlessly with any
                            smart TV OS or on multiple platforms is one of our
                            best attributes.
                          </span>
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <Footer />
          </div>
        );
    }
}
