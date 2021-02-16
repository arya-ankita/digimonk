import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact';
import InnerBannerTop from "./InnerBannerTop";
export default class NonVoiceProcess extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);}
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Non Voice Process"
              name="Non Voice Process"
              text=" Ensuring the validity of your users is extremely
                          important in preventing fraud and securing accounts
                          from compromise."
            />

            <section>
              <MDBContainer>
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="6">
                    <div className="about-banner">
                      <MDBAnimation type="fadeInUp">
                        <h1>Non Voice Process</h1>
                      </MDBAnimation>
                      <MDBAnimation type="fadeInUp">
                        <p>
                          Ensuring the validity of your users is extremely
                          important in preventing fraud and securing accounts
                          from compromise. By attaching a verified phone number
                          to an end-users' account that users' identity can
                          easily be confirmed when they access their account
                          from a new browser or device or attempt a high-value
                          transaction.
                        </p>
                      </MDBAnimation>
                    </div>
                  </MDBCol>

                  <MDBCol>
                    <MDBAnimation type="fadeInUp">
                      <img src={require("../images/non-voice.jpg")} alt="" />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <MDBAnimation type="fadeInUp"></MDBAnimation>
                <MDBRow>
                  <MDBCol md="12">
                    <MDBAnimation reveal type="fadeInUp">
                      <h2>Track customers</h2>
                      <p>
                        Shipping API Integration is very sensitive as if they
                        are not shipped according to the customer requirements,
                        software applications wouldn’t be ready on time. This
                        can cause major IT companies to lose their stake in the
                        markets. Even after the shipping, it is important that
                        one makes sure that the protocols have reached the right
                        place or not. We live in a time where there are a lot of
                        notorious hackers and cyber criminals who hunt for such
                        protocols so that they can design a fake application
                        program and steal sensitive information. Since there are
                        different protocols for every application program that
                        is designed, it is important that the shipping company
                        you opt for makes sure that the shipping is done to the
                        right place.
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
                    <MDBAnimation reveal type="fadeInUp">
                      <img src={require("../images/non-voice-1.png")} alt="" />
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <h2 className="is-h4 mb-4">MAIN BENEFITS</h2>
                      <div className="media-box text-left" id="feature">
                        <div className="media">
                          <div className="media-left">
                            <div className="f-icon" data-number="1">
                              <i className="fa fa-check fa-lg"></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>
                              Set Personalized Interaction for Every Interest
                            </h5>
                            <p>
                              Instant API access to ongoing and accurate key
                              phone number and user identity data attributes to
                              help make better decisions about new
                              registrations, user activity and fraud risks.
                            </p>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <div className="f-icon" data-number="2">
                              <i className="fa fa-check fa-lg"></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>Keep Everyone & Every Discussion Updated</h5>
                            <p>
                              Seamlessly authenticates users as they make
                              account changes and high-value transactions such
                              as accessing credit card details, transferring
                              funds or making bill payments.
                            </p>
                          </div>
                        </div>
                        <div className="media">
                          <div className="media-left">
                            <div className="f-icon" data-number="3">
                              <i className="fa fa-check fa-lg"></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <h5>Let Them Stay Connected from Any Device</h5>
                            <p>
                              Secures accounts from compromise using voice-based
                              OTPs on any phone type, on a global scale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <MDBAnimation reveal type="fadeInUp">
                     
                        <p>
                          With our efficient & seamless end-to-end IoT
                          solutions, we are able to make the current
                          organizations more efficient, with smarter industries
                          & enterprises on the rise, delivering enriching
                          experiences. We believe in providing different IoT
                          solutions suiting your requirements. Please get in
                          touch with us by sharing a mail to{" "}
                          <a className="cloud" href="mailto:info@digimonk.in">
                            info@digimonk.in
                          </a>{" "}
                        </p>
                      
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
