import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBAnimation,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
export default class CareerDetails extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumbname="Career"
          breadcrumactive="Career Details"
          name="Career"
          text="We’re always looking for new talents - just drop us a
                          line!"
        />

        <section className="share-career pb-0">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <ul className="socials-car">
                  <li>
                    <h3>Share</h3>{" "}
                    <div className="share-icon">
                      <a href="#" target="_blank">
                        <MDBIcon fab icon="facebook-square" />
                      </a>
                      <a href="#" target="_blank">
                        <MDBIcon fab icon="twitter-square" />
                      </a>
                      <a href="#" target="_blank">
                        <MDBIcon fab icon="linkedin" />
                      </a>
                      <a href="#" target="_blank">
                        <MDBIcon fab icon="whatsapp-square" />
                      </a>
                    </div>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="developer">
          <MDBContainer>
            <div className="career-detail-text">
              <h3>React Native Developer</h3>
              <div className="job-requirement">
                <ul>
                  <li>
                    <MDBIcon far icon="calendar-check" /> 1-5 Years
                  </li>
                  <li>
                    {" "}
                    <MDBIcon icon="map-marker-alt" /> Gwalior
                  </li>
                  <li>
                    {" "}
                    <MDBIcon icon="graduation-cap" /> B.Tech/B.E. in Computers
                  </li>
                </ul>
              </div>
              <div className="career-text">
                <p>
                  We are looking for a React Native developer interested in
                  building performant mobile apps on both the iOS and Android
                  platforms. You will be responsible for architecting and
                  building these applications, as well as coordinating with the
                  teams responsible for other layers of the product
                  infrastructure. Building a product is a highly collaborative
                  effort, and as such, a strong team player with a commitment to
                  perfection is required.
                </p>
                <h4>Responsibilities and Duties</h4>
                <ul>
                  <li>
                    Build pixel-perfect, smooth UIs across both mobile
                    platforms.
                  </li>
                  <li>
                    Leverage native APIs for deep integrations with both
                    platforms.
                  </li>
                  <li>
                    Diagnose and fix bugs and performance bottlenecks for
                    performance that feels native.
                  </li>
                  <li>
                    Reach out to the open-source community to encourage and help
                    implement mission-critical software fixes—React Native moves
                    fast and often breaks things.
                  </li>
                  <li>
                    Maintain code and write automated tests to ensure the
                    product is of the highest quality.
                  </li>
                  <li>Transition existing React web apps to React Native.</li>
                </ul>
                <h4>Key Skills</h4>
                <p>JavaScript, React, React Native, ReactJS, Mobile</p>
                <h4>Required Experience and Qualifications</h4>
                <ul>
                  <li>
                    Firm grasp of the JavaScript&nbsp;language and its nuances,
                    including ES6+ syntax
                  </li>
                  <li>Knowledge of&nbsp;programming</li>
                  <li>
                    Ability to write well-documented, clean Javascript code
                  </li>
                  <li>
                    Rock solid at working with third-party dependencies and
                    debugging dependency conflicts
                  </li>
                  <li>
                    Familiarity with native build tools, like XCode,
                    Gradle&nbsp;<strong>Android Studio, IntelliJ</strong>
                  </li>
                  <li>
                    Understanding of REST APIs, the document request model, and
                    offline storage
                  </li>
                  <li>
                    Experience with automated testing suites, like &nbsp;
                    <strong> Jest or Mocha</strong>
                  </li>
                </ul>
                <h5>Job Type: Full-time</h5>
              </div>
            </div>
          </MDBContainer>
        </section>

        <section className="career4-detail-form bg">
          <MDBContainer>
            <h3>Interested? You know what to do</h3>
            <p>
              No need to be formal. Just send us your links and we’ll be in
              touch.
            </p>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-email" label="Your email" />
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-subject"
                    label="Phone Number"
                  />
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Position" />
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-subject"
                    label="Experience"
                  />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Location" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="12" className="mt-5">
                <div className="text-center text-md-left">
                  <MDBBtn color="outline-danger">
                    Submit
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </>
    );
  }
}
