import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class SalesforceIntegration extends Component {
  render() {
    return (
      <div>
        <Navbar />
            <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Salesforce-Integration"
              name="Salesforce-Integration"
              text="Salesforce integration consultants at ScienceSoft bring
              12-year CRM experience to help you integrate Salesforce
              with other complex systems seamlessly. We can both develop
              custom integration modules and tune integration apps from
              AppExchange."
            />

        {/* <div className="about-us linebg react-pt">
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Salesforce Integration</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Salesforce integration consultants at ScienceSoft bring
                      12-year CRM experience to help you integrate Salesforce
                      with other complex systems seamlessly. We can both develop
                      custom integration modules and tune integration apps from
                      AppExchange.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img
                    src={require("../images/cover-pic---salesforce-integration.svg")}
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
                    src={require("../images/salesforce-integration_1.svg")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h2>
                    Salesforce Integration Options
                  </h2>
                  <p>
                    At ScienceSoft, we believe that all systems should work
                    together, like fingers on a hand. This implies a seamless
                    data flow between departments, a single access for users,
                    and automated data synchronization.
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBAnimation reveal type="fadeInUp">
              <h2 className="font-weight-bold mb-3">
                Technical Approaches to Salesforce Integration
              </h2>
            </MDBAnimation>

            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block">
                    <h3>
                      Direct integration solution
                    </h3>
                    <p>
                      That is either a direct API or database integration
                      between Salesforce and another system. Though limited in
                      flexibility and points of integration, this option will
                      satisfy the need for mutual data exchange between two
                      systems.
                    </p>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="tech-service-block">
                    <h3>
                      Solution based on integration server
                    </h3>
                    <p>
                      A more flexible solution that reduces effects of systems’
                      updates on the integration, minimizes the need for IT
                      resources and gives you more control over data flows. This
                      broad group includes solutions hosted in the cloud and
                      on-premises, as well as those delivered according to a
                      hub-and-spoke and an enterprise service bus (ESB) models.{" "}
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
                  <h2 className="font-weight-bold mb-3">
                    Other Integration Projects We Handle
                  </h2>
                  <p>
                    Though Salesforce is a powerful platform for sales and
                    marketing automation, some companies need to expand its
                    capabilities. In this regard, the ScienceSoft team can
                    deliver Salesforce integration to
                  </p>

                  <ul className="digimonk-list">
                    <li>Project management software (Basecamp, Wrike).</li>
                    <li>SCustomer service software (Zendesk, ManageEngine).</li>
                    <li>Survey software (SurveyMonkey, Qualtrics).</li>
                    <li>Team collaboration tools (Smartsheet, SharePoint).</li>
                    <li>Customer engagement apps and live chat.</li>
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
