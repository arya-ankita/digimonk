import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBView,
  MDBIcon,
  MDBMask,
  MDBLink,
} from "mdbreact";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="appdeveloment">
          <MDBContainer fluid>
            <MDBRow className="no-gutters">
              <MDBCol md="6">
                <MDBView hover zoom className="zooming bg-left">
                  <img
                    src={require("../images/left-cta-bg.jpg")}
                    alt=""
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center">
                    <div className="web befo">
                      <Link to="/">
                        <div className="looking">
                          <h3>Web Development</h3>
                          <p>
                            You can rely on DigiMonk for a highly experienced
                            web development team...
                          </p>
                          <div className="btn-contact">
                            <MDBLink to="#" className="btn btn-red btn-rounded">
                              Contact Us
                            </MDBLink>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCol>

              <MDBCol md="6">
                <MDBView hover zoom className="zooming bg-right">
                  <img
                    src={require("../images/services-cta-1.jpg")}
                    alt=""
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center">
                    <div className="web">
                      <Link to="/">
                        <div className="looking">
                          <h3>App Development</h3>
                          <p>
                            Android App Development, React Native App
                            Development, iOS App Development..
                          </p>
                          {/*<span className="Link is-link is-link2">Contact Us</span>*/}
                          <div className="btn-contact">
                            <MDBLink to="#" className="btn btn-red btn-rounded">
                              Contact Us
                            </MDBLink>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <MDBFooter className="uk-section-secondary pt-5" color="white">
          <MDBContainer className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <div className="footer-bg">
                  <img src={require("../images/footer-logo.png")} alt="" />
                  <p>
                    Here you can use rows and columns here to organize your
                    footer content.
                  </p>

                  <div className="socails-icon pb-5 pt-3">
                    <Link to="/" className="btn-fb waves-effect waves-light">
                      <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link to="/" className="btn-tw waves-effect waves-light">
                      <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link to="/" className="btn-li waves-effect waves-light">
                      <MDBIcon fab icon="linkedin-in" />
                    </Link>
                    <Link to="/" className="btn-ins waves-effect waves-light">
                      <MDBIcon fab icon="instagram" />
                    </Link>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="quicklink">
                  <h3 className="title">Who We Are</h3>
                  <ul>
                    <li className="list-unstyled">
                      <Link to="/home"> Home</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/about">About Us</Link>
                    </li>
                    {/* <li className="list-unstyled">
                      <a href="/api-integration">Services</a>
                    </li> */}
                    <li className="list-unstyled">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/maingallery">Gallery</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/career">Carrer</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/paynow">Pay Now</Link>
                    </li>
                  </ul>
                </div>
              </MDBCol>

              <MDBCol md="5">
                <div className="quicklink">
                  <h3 className="title">What We Do</h3>
                  <ul>
                    <li className="list-unstyled">
                      <Link to="/web-development">Website Development</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/android-application">
                        Android/IOS Development
                      </Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="">DevOps Development</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/digital-marketing">Digital Marketing/SEO</Link>
                    </li>
                    <li className="list-unstyled">
                      <Link to="/ui-wireframe">UI Design</Link>
                    </li>
                    {/* <li className="list-unstyled">
                      <Link to="">Graphic Designing</Link>
                    </li> */}
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://digimonk.in/"> Digimonk Technologies</a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}
