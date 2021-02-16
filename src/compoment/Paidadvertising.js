import React, { Component } from "react";
import {
  MDBAnimation,
  MDBIcon,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
} from "mdbreact";

import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import InnerBannerTop from "./InnerBannerTop";
export default class Paidadvertising extends Component {
  render() {
    let WorkIcon = <MDBIcon icon="circle" />;
    return (
      <>
        
          <Navbar />
          <InnerBannerTop
            breadcrumbname="Home"
            breadcrumactive="Paid Advertising"
            name="Paid Advertising"
            text="Proven experts in managing performance oriented digital
                        marketing campaigns that drive higher ROI"
          />

          <section className="timelinebox">
            <MDBContainer>
              <h2 className="text-center LongTitle is-h4">Our Process</h2>

              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background:
                      "linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )",
                    color: "#fff",
                  }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Account Audit
                  </h3>

                  <p>
                    We see a 100 point checklist to check your account which
                    helps recognize potential regions of development. The
                    parameters we cover thoroughly are Verifying the target
                    location, Ensuring accurate grouping of keywords, Verifying
                    proper labeling of ads, etc..
                  </p>
                  <span className="vertical-timeline-element-date">
                    <img src={require("../images/paidimg1.png")} alt="" />
                  </span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background:
                      "linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )",
                    color: "#fff",
                  }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    TG Identification and Channel Selection
                  </h3>

                  <p>
                    Our placement and keyword research is very exhaustive and it
                    passes by many steps of iterations before it coming at the
                    final decision..
                  </p>
                  <span className="vertical-timeline-element-date">
                    <img src={require("../images/paidimg2.png")} alt="" />
                  </span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  //date="2008 - 2010"
                  iconStyle={{
                    background:
                      "linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )",
                    color: "#fff",
                  }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Ads and Landing Page Design and Development
                  </h3>

                  <p>
                    Our development and design crew gets down to designing the
                    perfect landing pages and advertisement for your enterprise
                    portal. We have ad copies that plan to pull the target group
                    immediately..
                  </p>
                  <span className="vertical-timeline-element-date">
                    <img src={require("../images/paidimg3.png")} alt="" />
                  </span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background:
                      "linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )",
                    color: "#fff",
                  }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Campaign Optimization
                  </h3>

                  <p>
                    We test ads inside the ad groups to know which ad is doing
                    best and which one needs correction. The ads are passed by
                    Split Ad Testing, Optimization, A/B Testing as well as
                    Landing Page Session Recording.{" "}
                  </p>
                  <span className="vertical-timeline-element-date">
                    <img src={require("../images/paidimg4.png")} alt="" />
                  </span>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  //date="April 2013"
                  iconStyle={{
                    background:
                      "linear-gradient( 100deg, #fe8155 0, #f95462 35%, #ed7aa3 100% )",
                    color: "#fff",
                  }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Analysis and Reporting
                  </h3>

                  <p>
                    Our reports which we produce on daily, weekly and monthly
                    basis will help you stay in full control of the ad campaigns
                    using with actionable insights on visibility and time spent
                    on a page, user engagement map analysis, engagement levels
                    garnered and lots more.
                  </p>
                  <span className="vertical-timeline-element-date">
                    <img src={require("../images/paidimg5.png")} alt="" />
                  </span>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </MDBContainer>
          </section>
          <section className="gray">
            <MDBContainer>
              <MDBRow md={12}>
                <MDBAnimation reveal type="fadeInUp">
                  <p>
                    Here at Digimonk, we blend different ways of
                    performance-based marketing to produce the best outcomes for
                    your company in the most cost-effective way. We produce
                    content, analyze personas, then choose what would be the
                    right target audience and buying for global clients and
                    drive media planning. We measure the KPIs and optimize
                    campaigns to maximize conversion rates and drive higher ROI.
                  </p>
                </MDBAnimation>
              </MDBRow>
            </MDBContainer>
          </section>
        
        <Footer />
      </>
    );
  }
}
