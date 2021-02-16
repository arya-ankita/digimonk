import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";
import InnerBannerTop from "./InnerBannerTop";
export default class CloudWebStrategy extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Cloud And Web Strategy"
          name="Cloud And Web Strategy"
          text="Our cloud computing exerts are well-versed in various cloud platforms including Windows Azure, Amazon Web Service (AWS), Rackspace and Google Cloud Platform (GCP)."
        />
        <section>
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img
                    src={require("../images/best-cloud-computing-services1.png")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Best Cloud Computing Services Company</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Cloud computing is changing the development and delivery
                      of technology solutions, thus empowering enterprises to
                      innovate their business and make it more agile and
                      competitive.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="best">
                    <h5 className="font-weight-bold">
                      Top quality Cloud Computing Services
                    </h5>
                    <p>
                      At Mobinius, we know how it takes a lot to run a seamless,
                      digital enterprise. That’s why we offer a comprehensive,
                      cohesive, and end-to-end set of{" "}
                      <a className="cloud">Cloud Computing services.</a> Our
                      Cloud Computing technology services include:
                    </p>

                    <h5 className="font-weight-bold">
                      Cloud Computing Advisory Services
                    </h5>
                    <ul class="digimonk-list">
                      <li>Cloud migration strategy</li>
                      <li>Cloud migration feasibility assessment</li>
                      <li>Technology stack and architecture planning</li>
                      <li>Design of the entire business module</li>
                    </ul>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <img src={require("../images/klipartz.png")} alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section>
          <MDBContainer>
            <MDBRow className="d-flex align-items-center mb-5 mt-5">
              <MDBCol md="6">
                <img src={require("../images/saas1.png")} alt="" />
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="best">
                    <h5 className="font-weight-bold">SaaS</h5>

                    <ul class="digimonk-list">
                      <li>Integration of SaaS applications</li>
                      <li>Development of SaaS applications</li>
                      <li>Migrating from the legacy applications</li>
                      <li>
                        Develop for scalability, availability and
                        maintainability
                      </li>
                      <li>Re-architecture for SaaS</li>
                    </ul>
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
                <h5 className="font-weight-bold">How can Digimonk help you?</h5>
                <p>
                  But, at the end to ensure a successful migration to the cloud
                  and ongoing cloud management, you need a cloud computing
                  technology partner offering the best cloud architecture and
                  management services with strong experience in cloud consulting
                  and architecture management.
                </p>
                <p>
                  We have partnered with{" "}
                  <a className="cloud">leading cloud service providers</a> to
                  ensure a smooth and cost-effective migration to the cloud.
                </p>
                <p>
                  Our cloud computing technology services help customers
                  streamline their business processes, reduce risk, increase
                  global footprint and improve operational efficiencies.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </>
    );
  }
}
