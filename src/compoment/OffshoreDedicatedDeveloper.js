import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class OffshoreDedicatedDeveloper extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Offshore Dedicated "
          name="Offshore Dedicated"
          text="Outsourcing is a practice where a company hires or enters
                      into an agreement with an external organization or service
                      provider to perform certain operations or functions."
        />
        <section>
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Offshore Dedicated Developer</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Outsourcing is a practice where a company hires or enters
                      into an agreement with an external organization or service
                      provider to perform certain operations or functions. India
                      has always been appreciated for its skilled manpower. It
                      has become a popular choice for meeting the manpower
                      outsourcing requirements of several companies across the
                      world. With the vast pool of numerous recruitment agencies
                      providing the ultimate outsourcing solutions, India has
                      emerged as a popular center for several big names. The
                      outsourcing companies in India provide various services
                      like manpower outsourcing, contract staffing, temporary
                      staffing, payroll outsourcing etc. This practice is widely
                      accepted because it results in the price reduction of
                      overall project/process.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img src={require("../images/outsourcing.jpg")} alt="" />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="text-center">
                <MDBAnimation reveal type="fadeInUp">
                  <img src={require("../images/outsourcing-1.jpg")} alt="" />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h3 className="font-weight-bold">
                    Who Is Going For Outsourcing And Why?
                  </h3>
                  <p>
                    Large Corporate Houses, Public Sector Companies and
                    Government Organizations go for Manpower Outsourcing when
                    they need manpower for a specific assignment and do not want
                    to hire new staff for brief-term jobs. The major advantages
                    of manpower staffing and outsourcing are:
                  </p>
                  <ul className="digimonk-list">
                    <li>Reduction in the employment expenses.</li>
                    <li>Minimization of long term liabilities.</li>
                    <li>Retaining the head count.</li>
                    <li>
                      Meeting the requirements of seasonal increase in the
                      business.
                    </li>
                  </ul>
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
                  <h5 className="font-weight-bold mb-3">
                    Type Of Manpower Outsourcing Done By Indian Agencies
                  </h5>
                  <p>
                    While outsourcing, the outsourcer should look for a company
                    that can understand and coordinate with the preferences and
                    methods of their working. There are a large number of
                    recruitment agencies and placement companies in India that
                    work 24×7 and can provide the most adept professionals to
                    suit the requirements of large MNCs and international
                    companies. The companies are capable of providing dexterous
                    employees in a number of fields like Telecommunication, Law,
                    Finance & Accounting, FMCG, Education, Information
                    Technology Engineering, Healthcare and Science.
                  </p>
                  <p>
                    The services that can be obtained through companies offering
                    outsourcing of manpower include
                  </p>
                  <ul className="digimonk-list">
                    <li>Transferring of ad hoc employees.</li>
                    <li>Transferring of contractual employees.</li>
                    <li>Project based recruitment.</li>
                    <li>In house/on site support of contractual employees.</li>
                  </ul>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    style={{ width: "100%" }}
                    src={require("../images/credit-repair-software.jpg")}
                    alt=""
                  />
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
