import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class SalesforceCustomization extends Component {
  render() {
    return (
      <div>
        <Navbar />
                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Salesforce-Customization "
              name="Salesforce-Customization"
              text="Being Salesforce Certified Experts, we are best equipped
              to customize and personalize your existing Salesforce CRM
              solution according to your unique business needs. We have
              vast experience with the Salesforce platform and possess
              complete grasp over custom objects, fields, data
              management techniques and workflow customization in
              Salesforce."
            />

        {/* <div className="about-us linebg react-pt">
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Salesforce Customization</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Being Salesforce Certified Experts, we are best equipped
                      to customize and personalize your existing Salesforce CRM
                      solution according to your unique business needs. We have
                      vast experience with the Salesforce platform and possess
                      complete grasp over custom objects, fields, data
                      management techniques and workflow customization in
                      Salesforce.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img
                    src={require("../images/rt-salesforce-customization-config.png")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div> */}

        <section>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="text-center">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    src={require("../images/salesforce-configuration-vs-salesforce-customization.jpg")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h2>Salesforce Configuration</h2>
                  <p>
                    Salesforce provides some great out of the box configuration
                    options. We can leverage these to masterfully develop
                    applications in Salesforce. Our team of experts can identify
                    areas where custom Salesforce application development and
                    integrations are needed, and ensure their successful
                    execution and implementation. We have expertise in
                    developing both Sales and Service Apps as well as overseeing
                    client profiles and security settings.
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h2>
                Benefits of Salesforce Customization
              </h2>

            </MDBAnimation>

            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block">
                    <h3>Boost Productivity</h3>
                    <p>
                      Salesforce customization can help in making the tasks
                      easier for employees as they will have a platform that
                      mirrors the business.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block">
                    <h3>High ROI</h3>
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
                  <div className="tech-service-block">
                    <h3>
                      Increased User Adoption Rate
                    </h3>
                    <p>
                      We help extend the site’s functionality with integration
                      to APIs like Google, PayPal, IDX etc. This provides users
                      with a richer UX.
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
                  <img
                    style={{ width: "100%" }}
                    src={require("../images/salesforce-app-development.jpg")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h2 >
                    Salesforce Products That We Customize
                  </h2>
                  <p>
                    Digimonk has a vast experience of customizing Salesforce
                    products and adding value to its customer’s experience. We
                    have certified Salesforce developers who deliver exceptional
                    results and have expertise in different Salesforce products
                    including:
                  </p>

                  <ul className="digimonk-list">
                    <li>Salesforce Marketing Cloud</li>
                    <li>Salesforce Sales Cloud</li>
                    <li>Salesforce Service Cloud</li>
                    <li>Salesforce Financial Services Cloud</li>
                    <li>Salesforce Nonprofits Cloud</li>
                    <li>Salesforce Chatter</li>
                  </ul>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </div>
    );
  }
}
