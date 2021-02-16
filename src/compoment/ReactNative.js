import React, { Component } from "react";
import InnerBannerTop from "./InnerBannerTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";

export default class ReactNative extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="React-Native-App-Development"
          name="React-Native-App-Development"
          text="React Native has emerged as an excellent mobile app development tool owing to its amazing functionalities and features, as well as ease of development."
        />

        {/* <div className="about-us linebg react-pt">
                  <MDBContainer>
                      <MDBRow className="d-flex align-items-center">
                          <MDBCol md="6">
                              <div className="about-banner">
                                 <MDBAnimation type="fadeInUp">
                              <h1>Best React Native App Development Services</h1>
                              </MDBAnimation> 
                              <MDBAnimation type="fadeInUp">
                              <p>
                              React Native has emerged as an excellent mobile app development tool owing to its amazing functionalities and features, as well as ease of development.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
    <img src={require('../images/right-banner-new.png')} alt=""/>
    </MDBAnimation>
</MDBCol>
                          
                      </MDBRow>
                  </MDBContainer>
              </div> */}

        <section>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="5">
                <MDBAnimation reveal type="fadeInUp">
                  <img src={require("../images/react.png")} />
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="7">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="text-descp">
                    <h2 class="pb-3 text-innertitle">
                      Why Pick React Native for App Development ?
                    </h2>
                    <p>
                      React Native is the latest and among the most popular
                      technology platforms which allows developers to create
                      real mobile apps using only JavaScript. At the same time,
                      developers can build cross-platform applications for both
                      Android and iOS, thus saving both the time and cost
                      involved in mobile app development.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section>
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h2>Benefits</h2>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block commin-height">
                    <h3>Single Codebase</h3>
                    <p class="text-subpara">
                      By using React Native for mobile app development app
                      developers can run the same written code on both Android
                      and iOS. Moreover when the develop mobile apps using React
                      Native the code lines are shorter.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInDown">
                  <div className="tech-service-block commin-height">
                    <h3>Higher Code Quality</h3>
                    <p class="text-subpara">
                      The single codebase allows developers to write once and
                      use it for multiple platforms. This helps improve the
                      quality of code because it is more manageable.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block commin-height">
                    <h3>No Rewriting</h3>
                    <p class="text-subpara">
                      In case of React Native app development the native
                      components in the library can be integrated into the
                      mobile app's code so that developers do not need to
                      rewrite them.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInDown">
                  <div className="tech-service-block commin-height">
                    <h3>Reusable Components</h3>
                    <p class="text-subpara">
                      The building blocks provided by React Native allow
                      developers to reuse 'native components' for Android and
                      iOS apps. They can use simple methods to customize the
                      components that can be reused.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block commin-height">
                    <h3>Third Party Plugin Compatibility</h3>
                    <p class="text-subpara">
                      When using React Native for mobile apps, developers can
                      access the library to incorporate several third-party
                      plugins into the application.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInDown">
                  <div className="tech-service-block commin-height">
                    <h3>Ease of Optimization</h3>
                    <p class="text-subpara">
                      Mobile app development using React Native allows
                      developers to create fully optimized apps for both Android
                      and iOS simultaneously.{" "}
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <img src={require("../images/reactnative-new.png")} />
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="text-descp">
                    <h3 class="pb-3 text-innertitle">
                      Digimonk - the React Native App Development Expert
                    </h3>
                    <p>
                      Digimonk is a globally recognized React Native App
                      Development Company offering one-stop solutions for any
                      kind mobile app development using React Native. Our
                      developers are experts with extensive field experience in
                      building high quality React Native apps as mentioned
                      below:
                    </p>
                    <ul class="digimonk-list">
                      <li>Android App Development</li>
                      <li>iOS App Development</li>
                      <li>React Native Customization</li>
                      <li>Unique React Native Mobile Apps</li>
                      <li>Support and Maintenance</li>
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
              <h2>Benefits</h2>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <img src={require("../images/React_Native_Logo.png")} />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <div className="text-descp">
                  <h3 class="pb-3 text-innertitle">Why Digimonk</h3>
                  <ul class="digimonk-list">
                    <li>
                      Skilled, experienced and dedicated React Native mobile app
                      developers.
                    </li>
                    <li>Customized mobile and web application development</li>
                    <li>
                      Assured quality, security and compliance based on the
                      strictest coding standards
                    </li>
                    <li>
                      Highly efficient project management methodologies and
                      practices
                    </li>
                    <li>Fast, efficient and quality tested work</li>
                  </ul>
                </div>
              </MDBCol>
              <MDBCol md="12">
                <div className="text-descp pt-5">
                  <p>
                    Digimonk delivers comprehensive{" "}
                    <a
                      href="https://digimonk.in/"
                      target="_blank"
                      rel="noopener"
                    >
                      React Native app development services
                    </a>
                    to build high-performing React Native apps that work
                    flawlessly on iOS, Android, and other devices. For more
                    information on this, please reach us to{" "}
                    <a href="mailto:info@digimonk.in">info@digimonk.in</a>
                  </p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </div>
    );
  }
}
