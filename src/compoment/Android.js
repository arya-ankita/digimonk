import { MDBAnimation, MDBCol, MDBContainer, MDBRow, MDBView } from "mdbreact";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { Container, Row, Col } from "react-bootstrap";

export default class Android extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Android Application"
          name="Android Application"
          text="With the extension of the overall mobile ecosystem, anytime browsing, and information exchange, it is quintessential to implement an omnichannel user experience. An instinctive and experiential UX that enhances the engagement, generates recall and increases retention. We at Digimonk Technologies through our mobility solutions strive to deliver multi-channel UX after comprehensive user research, design modeling and tailored application development for all platforms."
        />
        <section>
          <MDBContainer>
            <div className="andorid-title col-md-8 offset-md-2 text-center">
              <MDBAnimation reveal type="fadeInUp">
                <h1>Our Offerings</h1>
                <p>
                  We cover the entire compass of mobility solutions including UX
                  design, native & hybrid development & mobile application
                  testing.
                </p>
              </MDBAnimation>
            </div>
          </MDBContainer>
        </section>

        <section className="gray">
          <Container>
            <Row>
              <Col md="6">
                <MDBAnimation reveal type="fadeInRight">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/Mobile-application-design.jpg")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>Mobile Application Design</h3>
                      <p>
                        With consumers utilizing information across multiple
                        devices, it is compelling to build applications that
                        operate flawlessly on all devices. Digimonk
                        Technologies' solutions lab implements analytical design
                        thinking and develops consumer-facing standalone
                        applications, also the complex transaction heavy mobile
                        applications with wondrous UX that look great across the
                        environments.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>

              <Col md="6">
                <MDBAnimation reveal type="fadeInLeft">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/ios_app_2.png")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>iOS Application Development</h3>
                      <p>
                        Our iOS center of excellence develops inherent iPhone
                        and iPad applications employing Swift as well as
                        Objective-C. We are well-versed with the related
                        ecosystem as well as other frameworks such as UI Kit
                        SQLite, Cocos2d game engine, GData, Zxing, Apple push
                        service & more.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="gray">
          <Container>
            <Row>
              <Col md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/android1.png")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>Android Application Development</h3>
                      <p>
                        Android is a widely used operating system around the
                        globe with the biggest market shares. It is also one of
                        the complicated ecosystems with a myriad of phones that
                        are of different dimensions using Android. We develop
                        custom Android applications for diverse businesses with
                        our years of expertise in building Android apps.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>

              <Col md="6">
                <MDBAnimation reveal type="fadeInDown">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/hybrid.png")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>Hybrid Application Development</h3>
                      <p>
                        Hybrid applications are the ones that use a single code
                        base for multiple platforms significantly improving time
                        to market and reducing cost. At Digimonk Technologies we
                        always give priority to excellent user experience, for
                        that we use a variety of technologies to develop
                        platform-agnostic hybrid applications. We have the
                        expertise of various cross-platform frameworks such as
                        Ionic, Appcelerator, Phonegap, Sencha, Appcelerator,
                        Titanium, React and more.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="gray">
          <Container>
            <Row>
              <Col md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/12.jpg")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>Smart TV Application Development</h3>
                      <p>
                        Applications for smart TVs help brands to connect with
                        the users more deeply. We have designed and developed
                        well-tested Smart TV applications for some of the
                        world's top brands that aim to storm into the TV space.
                        We have vast experience in developing applications for
                        all leading connected TVs and media streaming devices
                        such as Apple, Roku, Samsung Native, Android, Tizen,
                        Amazon Fire, and Smart TV Alliance.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>

              <Col md="6">
                <MDBAnimation reveal type="fadeInDown">
                  <div className="andord-box">
                    <MDBView className="rounded  mb-4 text-center">
                      <img
                        className="img-fluid"
                        src={require("../images/mobile_testing.png")}
                        alt=""
                      />
                    </MDBView>
                    <div className="servicesbox">
                      <h3>Mobile Automation Testing </h3>
                      <p>
                        A variety of devices, quicker release cycles, and a
                        diversity of network connectivity prospects makes mobile
                        application testing challenging. We tackle the hurdles
                        of mobile testing using targeted device selection and
                        maximizing the use of automation to lessen costs. We use
                        a comprehensive suite of test frameworks and tools that
                        fine-tune the application performance experience.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </>
    );
  }
}
