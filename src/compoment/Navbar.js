import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/mmenu-js/dist/mmenu.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import { Link } from "react-router-dom";
import { MDBContainer } from "mdbreact";

class NavbarPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
          <MDBContainer>
            <a href="#menu" className="menubar">
              <i className="fas fa-bars"></i>
            </a>
            {/*<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>*/}
            <a className="navbar-brand" href="/">
              <img src={require("../images/footer-logo.png")} alt="" />
            </a>

            <div
              className="collapse navbar-collapse destop"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu bg-menu menu-top"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/about" className="nav-link">
                        About Company
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/meet-the-team" className="nav-link">
                        Meet The Team
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to="/gallery" className="nav-link">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  className="nav-item dropdown has-mega-menu"
                  style={{ position: "static" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>

                  <div
                    className="dropdown-menu bg-menu"
                    style={{ width: "100%" }}
                  >
                    <div className="px-0 container">
                      <div className="row" style={{ width: "100%" }}>
                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Mobile Application Development</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/android-application">
                                  Android Application
                                </Link>
                              </li>
                              <li>
                                <Link to="/ios-development">
                                  IOS Application
                                </Link>
                              </li>
                              {/* <li><Link to="/react-native">React Native</Link></li> */}
                              <li>
                                <Link to="/smart-tv-application">
                                  Smart TV Application
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>UI/UX</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/web-development">
                                  Web Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/UI/UX-design/web-and-mobile">
                                  Web and Mobile
                                </Link>
                              </li>
                              <li>
                                <Link to="/UI-wireframe">UI Wireframing</Link>
                              </li>
                              {/* <li><Link to="/Prototype">Prototype</Link></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Business &amp; Technical Consulting</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/ideation-and-requirement">
                                  Ideation &amp; Requirement
                                </Link>
                              </li>
                              <li>
                                <Link to="/cloud-and-web-strategy">
                                  Cloud &amp; Web Strategy
                                </Link>
                              </li>
                              <li>
                                <Link to="/product-launch-strategy">
                                  Product Launch Strategy
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Testing Quality Assurance</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/performance-testing">
                                  Performance Testing
                                </Link>
                              </li>
                              <li>
                                <Link to="/automation-testing">
                                  Automation Testing
                                </Link>
                              </li>
                              <li>
                                <Link to="/security-audit">Security Audit</Link>
                              </li>
                              <li>
                                <Link to="/web-and-app-testing">
                                  Web &amp; App Testing
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Digital Marketing</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/digital-marketing">
                                  Digital marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/seo-services">SEO</Link>
                              </li>
                              <li>
                                <Link to="/social-media-marketing">
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/content-marketing">
                                  Content Marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/paid-advertising">
                                  Paid Advertising
                                </Link>
                              </li>
                              {/* <li><Link to="/email-marketing">Email Marketing</Link></li> */}
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>BPO</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/bpo/voice-process">
                                  Voice Process
                                </Link>
                              </li>
                              <li>
                                <Link to="/bpo/non-voice-process">
                                  Non Voice Process
                                </Link>
                              </li>
                              <li>
                                <Link to="/bpo/tech-support">Tech Support</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Cloud Services</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/google-cloud-services">
                                  Google Cloud
                                </Link>
                              </li>
                              <li>
                                <Link to="/aws-cloud ">Aws Cloud</Link>
                              </li>
                              <li>
                                <Link to="/microsoft-azure">
                                  Microsoft Azure
                                </Link>
                              </li>
                              <li>
                                <Link to="/IBM-clouds">IBM Clouds</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="consulting-menu">
                            <h4>Hire Developers</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/offshore-dedicated-developer">
                                  Offshore Dedicated Developer
                                </Link>
                              </li>
                              <li>
                                <Link to="/onsite-resourcing">
                                  Onsite Resourcing
                                </Link>
                              </li>
                            </ul>
                            <h4>
                              <Link to="/custom-application-services">
                                Custom Application
                              </Link>
                            </h4>
                            <h4>
                              <Link to="/api-integration">API Integration</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="nav-item dropdown has-mega-menu"
                  style={{ position: "static" }}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Technology
                  </a>

                  <div
                    className="dropdown-menu bg-menu"
                    style={{ width: "100%" }}
                  >
                    <div className="px-0 container">
                      <div className="row" style={{ width: "100%" }}>
                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>Mobile App Development</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/android-app-development">
                                  Android App Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/swift-based-iOS-development">
                                  Swift Based iOS Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/react-native-app-development">
                                  React Native App Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>Web Development</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="php">PHP</Link>
                              </li>
                              <li>
                                <Link to="/python">Python</Link>
                              </li>
                              <li>
                                <Link to="/java">Java / J2EE</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>Full Stack Develoment</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/mean-stack">MEAN Stack</Link>
                              </li>
                              <li>
                                <Link to="/mern-stack">MERN Stack</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>Front End Script</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/angular-js">Angular JS</Link>
                              </li>
                              <li>
                                <Link to="/react-js">React JS</Link>
                              </li>
                              <li>
                                <Link to="/spring-boot">Spring Boot</Link>
                              </li>
                              <li>
                                <Link to="/jsp">JSP</Link>
                              </li>
                              <li>
                                <Link to="/bootstrap">Bootstrap</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>Product Customization</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/IBM-websphere-commerce">
                                  IBM Websphere Commerce
                                </Link>
                              </li>
                              <li>
                                <Link to="/salesforce-customization">
                                  Salesforce Customization
                                </Link>
                              </li>
                              <li>
                                <Link to="/salesforce-integration">
                                  Salesforce Integration
                                </Link>
                              </li>
                              <li>
                                <Link to="/adobe-experience-manager">
                                  Adobe Experience Manager
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="consulting-menu">
                            <h4>CMS</h4>
                            <ul className="colum-menu">
                              <li>
                                <Link to="/wordpress">Wordpress</Link>
                              </li>
                              <li>
                                <Link to="/magento">Magento</Link>
                              </li>
                              <li>
                                <Link to="/shopify">Shopify</Link>
                              </li>
                              <li>
                                <Link to="/joomla">Joomla</Link>
                              </li>
                              <li>
                                <Link to="/drupal">Drupal</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/paynow" className="nav-link">
                    Pay Now
                  </Link>
                </li>
              </ul>
            </div>
          </MDBContainer>
        </nav>

        <nav id="menu">
          <div id="panel-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>Company</a>
                <ul>
                  <li>
                    <a href="/about">About Company</a>
                  </li>

                  <li>
                    <a href="/">Meet the Team</a>
                  </li>
                  <li>
                    <a href="/">Sales</a>
                  </li>
                  <li>
                    <a href="/">Testimonials</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Services</a>
                <ul>
                  <li>
                    <a>Mobile Application Developmment</a>
                    <ul>
                      <li>
                        <a href="#">Android Application</a>
                      </li>
                      <li>
                        <a href="#">IOS Application</a>
                      </li>
                      <li>
                        <a href="#">React Native</a>
                      </li>
                      <li>
                        <a href="#">Smart TV Application</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>UI/UX</a>
                    <ul>
                      <li>
                        <a href="#">Web and Mobile</a>
                      </li>
                      <li>
                        <a href="#">UI Wireframing</a>
                      </li>
                      <li>
                        <a href="#">Prototype</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Business & Technical Consulting</a>
                    <ul>
                      <li>
                        <a href="#">Ideation & Requirement</a>
                      </li>
                      <li>
                        <a href="#">Cloud & Web Strategy</a>
                      </li>
                      <li>
                        <a href="#">Product Launch Strategy</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Testing Quality Assurance</a>
                    <ul>
                      <li>
                        <a href="#">Performance Testing</a>
                      </li>
                      <li>
                        <a href="#">Automation Testing</a>
                      </li>
                      <li>
                        <a href="#">Security Audit</a>
                      </li>
                      <li>
                        <a href="#">Web & App Testing</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Custom Application</a>
                    <ul>
                      <li>
                        <a href="#">Kiosk Based Application</a>
                      </li>
                      <li>
                        <a href="#">Integration & Migration Services</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Hire Developers</a>
                    <ul>
                      <li>
                        <a href="#">Offshore Dedicated Developer</a>
                      </li>
                      <li>
                        <a href="#">Onsite Resourcing</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>BPO</a>
                    <ul>
                      <li>
                        <a href="#">Voice Process</a>
                      </li>
                      <li>
                        <a href="#">Non Voice Process</a>
                      </li>
                      <li>
                        <a href="#">Tech Support</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Cloud Services</a>
                    <ul>
                      <li>
                        <a href="#">Google Cloud</a>
                      </li>
                      <li>
                        <a href="#">Aws Cloud</a>
                      </li>
                      <li>
                        <a href="#">Microsoft Azure</a>
                      </li>
                      <li>
                        <a href="#">IBM Clouds</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>Digital Marketing</a>
                    <ul>
                      <li>
                        <a href="#">SEO (Google/Bing)</a>
                      </li>
                      <li>
                        <a href="#">Lead Generation</a>
                      </li>
                      <li>
                        <a href="#">Brand Promotions</a>
                      </li>
                      <li>
                        <a href="#">Marketing Strategy</a>
                      </li>
                      <li>
                        <a href="#">Google Ads</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a>API Integration</a>
                    <ul>
                      <li>
                        <a href="#">Payment Gateway API</a>
                      </li>
                      <li>
                        <a href="#">Googles API</a>
                      </li>
                      <li>
                        <a href="#">Authenticaton API</a>
                      </li>
                      <li>
                        <a href="#">Shipping API</a>
                      </li>
                      <li>
                        <a href="#">Social-Networking API</a>
                      </li>
                      <li>
                        <a href="#">Business Listing API</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/">Portfolio</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
              <li>
                <a href="/">Review</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Pay Now</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarPage;
