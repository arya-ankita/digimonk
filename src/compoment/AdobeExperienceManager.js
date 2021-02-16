import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
export default class AdobeExperienceManager extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Adobe-Experience-Manager"
              name="Adobe-Experience-Manager"
              text=" Make sure your content is consistent and personalized for
              each customer with Adobe Experience Manager Sites. Create
              and manage your digital experience across all channels
              with automated tools that make scaling effortless."
            />

        {/* <div className="about-us linebg react-pt">
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Adobe Experience Manager</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      Make sure your content is consistent and personalized for
                      each customer with Adobe Experience Manager Sites. Create
                      and manage your digital experience across all channels
                      with automated tools that make scaling effortless.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>

              <MDBCol>
                <MDBAnimation type="fadeInUp">
                  <img
                    src={require("../images/cms-image.png.img.png")}
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
                    src={require("../images/dig-asset_image.png.img.png")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h2 className="font-weight-bold">Digital Asset Management</h2>
                  <p>
                    Any old DAM can manage assets. But only Adobe Experience
                    Manager Assets offers a cloud-native solution with an AI and
                    machine learning backbone. By automating tedious processes,
                    it frees both creatives and marketers to focus on their
                    strengths. And while other solutions force you to choose
                    between scalability and customization, Experience Manager is
                    the only DAM that lets you both seamlessly scale and
                    continuously innovate to meet the complex needs of your
                    business.
                  </p>
                  <p>
                    Any old DAM can manage assets. But only Adobe Experience
                    Manager Assets offers a cloud-native solution with an AI and
                    machine learning backbone. By automating tedious processes,
                    it frees both creatives and marketers to focus on their
                    strengths. And while other solutions force you to choose
                    between scalability and customization, Experience Manager is
                    the only DAM that lets you both seamlessly scale and
                    continuously innovate to meet the complex needs of your
                    business.
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <img
                    style={{ width: "100%" }}
                    src={require("../images/benefits-individual-2.png")}
                    alt=""
                  />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <h2 className="font-weight-bold mb-3">Asset automation</h2>
                  <p>
                    The number of customer channels has exploded. The amount of
                    personalization you’re doing is growing. And the speed at
                    which you have to work is only getting faster. Yet your
                    teams aren’t getting any bigger. That’s why automating
                    time-consuming tasks and workflows is essential. In the IDC
                    report, The Business Value of Adobe Experience Manager
                    Assets , respondents report substantial gains in content
                    velocity, time to market, and team productivity using Adobe
                    Experience Manager Assets. It’s not just a faster way to
                    work, it’s a smarter way.
                  </p>
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
