import React, { Component } from "react";
import {
  MDBAnimation,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollAnimation from "react-animate-on-scroll";
import InnerBannerTop from "./InnerBannerTop";
export default class Iosdevelopment extends Component {
  render() {
    return (
      <>
        <Navbar />

        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="IOS Development"
          name="IOS Development Services"
          text="With Digimonk give your customers a unique mobility solution."
        />

        

        <ScrollAnimation animateIn="slideInUp" className="pt-5 pb-5" >
          <MDBContainer>
            

            <MDBRow className="devweb-12">
              <MDBAnimation reveal type="fadeInUp">
                <h1> Technologies Expertise</h1>
              </MDBAnimation>
            </MDBRow>
          </MDBContainer>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn">
          <MDBContainer>
            <MDBRow className="gaprequirebot">
              <MDBCol md={6}>
                <h2 className="mobsty-10">Mobile Application Design</h2>
                <p className="mobstysty-2">
                  With consumers utilizing information across multiple devices,
                  it is compelling to build applications that operate flawlessly
                  on all devices. Digimonk Technologies' solutions lab
                  implements analytical design thinking and develops
                  consumer-facing standalone applications, also the complex
                  transaction heavy mobile applications with wondrous UX that
                  look great across the environments.
                </p>
              </MDBCol>
              <MDBCol md={6} className="swiftfor">
                <img src={require("../images/ios-image-swift-2.png")} alt="" />
              </MDBCol>
            </MDBRow>

            <MDBRow className="gaprequirebot">
              <MDBCol md={6}>
                <h2 className="mobsty-10">Mobile Application Design</h2>
                <p className="mobstysty-2">
                  With consumers utilizing information across multiple devices,
                  it is compelling to build applications that operate flawlessly
                  on all devices. Digimonk Technologies' solutions lab
                  implements analytical design thinking and develops
                  consumer-facing standalone applications, also the complex
                  transaction heavy mobile applications with wondrous UX that
                  look great across the environments.
                </p>
              </MDBCol>
              <MDBCol md={6}>
                <img src={require("../images/react-native.png")} alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </ScrollAnimation>

        <div className="ddfreg">
          <MDBContainer>
            <h2 className="mobsty-10">Looking for Assistance?</h2>
            <p className="mobstysty-2">
              We are here to help you. Kindly Drop your Email here
            </p>
            <MDBRow className="patback">
              <MDBCol md={6}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email here"
                />
              </MDBCol>

              <MDBCol md={6} style={{ textalign: "center" }}>
                <button type="button" class="btn btn-deep-orange">
                  Subscribe
                </button>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <Footer />
      </>
    );
  }
}
