import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";
import InnerBannerTop from "./InnerBannerTop";
export default class AndroidAppDevelopment extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Android App Development"
          name="Android App Development"
          text="With Digimonk give your customers a unique mobility solution."
        />

        <section className="">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    className="idea_img"
                    src={require("../images/android.png")}
                  />
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="7">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="custombox pl-3">
                    <h3>Bringing Your Android App Ideas Into Life</h3>
                    <p>
                      Google’s Android will maintain its leadership in the
                      market, projected to account approximately 85% of all
                      smartphones shipment worldwide by 2020. In this rapidly
                      booming Android app industry, Rockwell Softech is a
                      leading &nbsp;
                      <a className="cloud">Android app development company</a>
                      &nbsp; that develops custom Android applications for
                      leading brands, enterprises, and startups.
                    </p>
                    <p>
                      We have a team of full-stack Android app developers,
                      having a strong command on Kotlin, Java, C, C++ HTML, and
                      CSS to develop high-end Android apps for smartphones,
                      tablets, wearable devices, and Android TVs. Our team of
                      Android programmers develops an app for almost all the
                      categories of Google Play Store, including Photo &amp;
                      Video, Health &amp; Fitness, Education &amp; Learning, and
                      Travel &amp; Tourism.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="pt-5 pb-5 linebg react-box ">
          <MDBContainer>
            <div className="mb-5 text-center">
              <h2>Our Mobile App Development Services</h2>
            </div>
            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="icon_box style_1 icon_left clearfix">
                    <div className="icon font-color_base">
                      <i className="fab fa-android"></i>
                    </div>
                    <div className="icon_text">
                      <h5 className="font-color_base no_stripe">
                        {" "}
                        ANDROID / IOS / WEARABLES
                      </h5>
                      <p>
                        With focused and extensive expertise in both Android and
                        iOS, we develop outstanding mobile + wearable apps
                        better and faster.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="icon_box style_1 icon_left clearfix">
                    <div className="icon font-color_base">
                      <i className="fa fa-shield-alt"></i>
                    </div>
                    <div className="icon_text">
                      <h5 className="font-color_base no_stripe">
                        SERVER SIDE / APIS
                      </h5>
                      <p>
                        Digimonk has mastered the ability of developing
                        reliable, scalable mobile APIs — the unknown warriors of
                        amazing mobile apps.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="icon_box style_1 icon_left clearfix">
                    <div className="icon font-color_base">
                      <i className="fa fa-hdd-o"></i>
                    </div>
                    <div className="icon_text">
                      <h5 className="font-color_base no_stripe">
                        HARDWARE / INTEGRATED
                      </h5>
                      <p>
                        We unite with the modern developments in equipment or
                        hardware. Spark Cores, iBeacon, VR… Synram has got you
                        covered.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="icon_box style_1 icon_left clearfix">
                    <div className="icon font-color_base">
                      <i className="fa fa-code"></i>
                    </div>
                    <div className="icon_text">
                      <h5 className="font-color_base no_stripe">
                        DESIGN &amp; STRATEGY
                      </h5>
                      <p>
                        It’s not difficult to vision, but prioritizing what to
                        develop and building it really outstanding, is the
                        complex section. Our extensive experience in mobile can
                        assist.
                      </p>
                    </div>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <Footer />
      </div>
    );
  }
}
