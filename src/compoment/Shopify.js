import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class Shopify extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="about-us linebg react-pt">
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Shopify Development</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      With 500,000 active stores running on Shopify, you need
                      its scalability and resilience to power your e-commerce
                      business with the help of trusted experts at Digimonk.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img
                    src={require("../images/right-banner-ecommerce.png")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="pt-5 pb-5 react-box">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="text-center">
                <MDBAnimation reveal type="fadeInUp">
                  <img src={require("../images/shopify.png")} alt="" />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h3 className="font-weight-bold">
                    Effective & Affordable Shopify Customization
                  </h3>
                  <p>
                    Utilize our proven proficiencies in Shopify development
                    services to boost your business top lines. We not only
                    understand our client's requirements, and their target
                    market, but also come up with viable opportunities that
                    address their issues. Our Shopify developers from India
                    practice customer-first attitude.
                  </p>
                  <div className="word">
                    <ul className="digimonk-list">
                      <li>
                        <h6 className="font-weight-bold">
                          Assured Transparency
                        </h6>
                        <p>
                          When you opt for Drupal web development services, you
                          get a blend of feature rich, scalable application
                        </p>
                      </li>
                      <li>
                        <h6 className="font-weight-bold">
                          95% Well-Timed Delivery
                        </h6>
                        <p>
                          Be it legacy migration or version upgrades; we can do
                          it all and much more at TIS India
                        </p>
                      </li>
                    </ul>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="pb-5 pt-5 linebg">
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h4 className="font-weight-bold mb-3">
                Check Out The Below Shopify Services
              </h4>
            </MDBAnimation>

            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">Shopify configuration</h5>
                    <p>
                      Make your business relevant for today and ready for
                      tomorrow with enterprise grade customer WordPress sites.
                      These are scalable and offer total SEO compliance.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">Shopify theme design</h5>
                    <p>
                      Get your site to cater to modern day business needs. We
                      help with migration from legacy technologies and with
                      version upgrades.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Customization on Shopify
                    </h5>
                    <p>
                      We help extend the site’s functionality with integration
                      to APIs like Google, PayPal, IDX etc. This provides users
                      with a richer UX.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">Data migration</h5>
                    <p>
                      We take your creative work of art and convert it to a
                      one-of-its-kind WordPress theme. We support PSD, XD, and
                      PNG.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Shopify maintenance and upgrade
                    </h5>
                    <p>
                      Get total support for multisite development and network
                      management. We handle every aspect from customization to
                      bug fixing and plugin integration.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="pb-5 pt-5 react-box">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    src={require("../images/shopify-brands-left.jpg")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h5 className="font-weight-bold mb-3">
                    Hire Shopify Developers from TIS India to be assured of
                    result-centric Shopify solutions
                  </h5>
                  <p>
                    At Digimonk, we invest efforts at every level of design and
                    development. This helps us to offer interactive, productive,
                    and feature-rich e-commerce stores on the Shopify platform.
                    We offer 24/7 customer support to improve your competitive
                    edge.
                  </p>
                  <h5 className="font-weight-bold mb-3">
                    Why choose TIS India for Shopify development?
                  </h5>
                  <ul className="digimonk-list">
                    <li>
                      We have experienced Joomla developers who are well-versed
                      with all the latest technologies and platforms.
                    </li>
                    <li>
                      At TIS India, we truly understand the value of your
                      marketing budget. Hence we offer services at affordable
                      rates which give maximum ROI.
                    </li>
                    <li>
                      We believe in making long-lasting relations. That’s why we
                      offer 24*7 technical support to our clients.
                    </li>
                    <li>
                      Different customers have different requirements. We are
                      aware of it. That’s why we provide customized solutions.
                    </li>
                    <li>
                      We are a name, synonymous with dedication and experience.
                      We enable seamless communication, total transparency, and
                      on-time delivery to clients.
                    </li>
                  </ul>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="pb-5 pt-5 linebg">
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h4 className="font-weight-bold mb-3">
                Wondering Why Employ Shopify For Creating Your Next E-Commerce
                Website?
              </h4>
            </MDBAnimation>

            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Immense Potential to Extend Functionalities
                    </h5>
                    <p>
                      With Joomla’s multilingual feature, you can make your
                      website reach to a larger audience. It ultimately lets you
                      drive towards the maximum business profits and revenues.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Easy Backend Administration
                    </h5>
                    <p>
                      As WordPress is a content management system, it has
                      various features such as a built-in blog that makes
                      publishing content very easy. Blogging capabilities are
                      built-in and easy to integrate with WP.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">Cost Effective Options</h5>
                    <p>
                      Creating a website with WordPress won’t cost you an arm
                      and a leg. WordPress website design is extremely
                      cost-effective. Even its upkeep and maintenance cost are
                      relatively inexpensive.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Social Media Integration
                    </h5>
                    <p>
                      WordPress is an open source CMS based on PHP and MySQL.
                      This CMS offers open source code which is available for
                      everyone who needs to utilize it or customize it.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">SEO-friendly URLs</h5>
                    <p>
                      In today’s technological era, responsive web design is no
                      longer an option but a must. With the use of WordPress,
                      you will get the benefit of responsive web technology
                      automatically.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block py-2 pr-4">
                    <h5 className="font-weight-bold">
                      Complete Design Control
                    </h5>
                    <p>
                      WordPress has all the elements that needed to develop a
                      basic site but if you want more specialized functions then
                      you can purchase it and install custom-plugins from
                      third-party developers.
                    </p>
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
