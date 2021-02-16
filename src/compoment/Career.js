import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  Link,
  MDBIcon,
} from "mdbreact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";

export default class Career extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Career"
          name="Career"
          text="We’re always looking for new talents - just drop us a
                          line!"
        />

        <section>
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h2 className="text-center mb-5">What Digmonk Offers you</h2>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="6" className="mb-4">
                <MDBAnimation
                  reveal
                  type="fadeInLeft"
                  className="career-offer "
                >
                  <div>
                    <img
                      src={require("../images/rocket.svg")}
                      className="mb-3"
                      alt=""
                    />
                    <p>
                      Working at Digimonk is a combination of developing
                      interesting and challenging projects, using modern
                      technologies, and cooperating with “cherry-picked”
                      professionals.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" className="mb-4">
                <MDBAnimation
                  reveal
                  type="fadeInRight"
                  className="career-offer "
                >
                  <div>
                    <img
                      src={require("../images/home.svg")}
                      className="mb-3"
                      alt=""
                    />
                    <p>
                      We nurture friendly, family-like atmosphere, which is the
                      basis for great results in terms of both team and
                      individual achievements.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" className="mb-4">
                <MDBAnimation
                  reveal
                  type="fadeInLeft"
                  className="career-offer "
                >
                  <div>
                    <img
                      src={require("../images/tech-layers.svg")}
                      className="mb-3"
                      alt=""
                    />
                    <p>
                      Our teams use up-to-date technology stack, including: PHP,
                      Python, Node.js, Symfony, Laravel, WordPress, AngularJS,
                      React, Vue
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" className="mb-4">
                <MDBAnimation
                  reveal
                  type="fadeInRight"
                  className="career-offer "
                >
                  <div>
                    <img
                      src={require("../images/people.svg")}
                      className="mb-3"
                      alt=""
                    />
                    <p>
                      When hiring new people, we look beyond their work
                      experience - key points for us are candidate’s
                      professional ambition, love for challenges, desire for
                      growth, and orientation on results!
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="open-inquiry">
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h2 className="text-center mb-5">Open Positions</h2>
            </MDBAnimation>

            <MDBRow>
              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">React Native Developer</h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-5 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">
                            AWS Certified Professional
                          </h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-5 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">
                            Python Developer (Django)
                          </h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-5 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">
                            Digital Marketing Executive
                          </h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            0-3 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">Internship / Fresher</h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-4 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">Graphics Designer</h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-4 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">IOS Developer</h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            2-5 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="6">
                <div className="fullstack">
                  <div className="Category">
                    <MDBAnimation type="fadeInUp">
                      <div className="post-Position">
                        <div className="Info">
                          <h5 className="JobTitle">Android Developer</h5>
                          <p className="JobLocation">
                            <MDBIcon far icon="calendar-check" />
                            1-4 Years
                          </p>
                          <p className="JobLocation">
                            <MDBIcon icon="map-marker-alt" />
                            Gwalior
                          </p>
                        </div>
                        <Link to="/career-details" class="Link is-link">
                          Apply
                        </Link>
                      </div>
                    </MDBAnimation>
                  </div>
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
