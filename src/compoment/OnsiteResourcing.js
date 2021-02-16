import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class OnsiteResourcing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Onsite Resourcing "
          name="Onsite Resourcing"
          text=" Quite often an organization’s human capital initiatives
                      require on-site assistance to meet their required staffing
                      objectives. In such cases, Infoway can provide onsite
                      recruiting services to quickly and efficiently assist
                      clients with their internal recruitment efforts. Our
                      services are tailor made that is appropriate for our
                      clients business."
        />
        <section>
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h2>Onsite Resourcing</h2>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Quite often an organization’s human capital initiatives
                      require on-site assistance to meet their required staffing
                      objectives. In such cases, Infoway can provide onsite
                      recruiting services to quickly and efficiently assist
                      clients with their internal recruitment efforts. Our
                      services are tailor made that is appropriate for our
                      clients business.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img src={require("../images/onsite.jpg")} alt="" />
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
                  <h2>Onsite Recruitment</h2>
                  <p>
                    At Infoway, we will commission our recruitment services to
                    be delivered at onsite client location, as needed. Our
                    recruiters can work in collaboration with your organization
                    to locate candidates, interview prospects, and facilitate
                    the hiring process.
                  </p>
                  <p>
                    As your single point of contact, our onsite recruiting
                    manager would manage the following:
                  </p>
                  <ul className="digimonk-list">
                    <li>
                      Help define your staffing needs (temporary and permanent
                      placement)
                    </li>
                    <li>
                      Manage recruiting, sourcing, screening resumes, staffing,
                      scheduling, payroll, and billing
                    </li>
                    <li>
                      Supervise your existing vendors and negotiate discounts
                      where appropriate
                    </li>
                    <li>Check all background and work referencesn</li>
                    <li>Handle all employee negotiations</li>
                    <li>Monitor satisfaction</li>
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
                  <h2 className=" mb-3">
                    Type Of Manpower Outsourcing Done By Indian Agencies
                  </h2>
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
      </div>
    );
  }
}
