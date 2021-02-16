import React, { Component } from 'react'
import { MDBAnimation, MDBIcon, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'

import Footer from './Footer';
import Navbar from './Navbar';
import InnerBannerTop from "./InnerBannerTop";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Emailmarket extends Component {
    render() {
      let WorkIcon = <MDBIcon icon="circle" />;
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Email Marketing"
              name="Email Marketing"
              text="High impact email marketing campaigns to build &
                          nurture relationships with your prospects & customers
                          with trigger-based automation workflows."
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
                      Audience Building
                    </h3>

                    <p>
                      Our email marketing campaigns concentrate on getting new
                      consumers and maintaining the current ones through
                      strategic messaging, engaging designs and related content.
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
                      Customer Retention
                    </h3>

                    <p>
                      Along with impactful email marketing campaigns, we
                      strategize to cross-sell and upsell your brand, driving to
                      consumer retention by a logical way.
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
                      Campaign Creation
                    </h3>

                    <p>
                      With the target audience determined and impactful sources
                      at hand, we manage brand promotion campaigns by right
                      marketing methods and tactics. We create automated
                      workflows and lead scoring to send trigger-based email
                      automation that results in quality leads
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
                      Content Creation and Design
                    </h3>

                    <p>
                      Our design and content specialists go by research and work
                      according to industry demands. They produce very
                      beautifully crafted email designs with impactful content,
                      to drive a CA ( Call to Action ).{" "}
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
                      Reporting and Analytics
                    </h3>

                    <p>
                      After the implementation of the tactics, the outcomes are
                      tracked, measured, assessed and reported with legible,
                      interactive tables and graphs. We include a range of
                      metrics and report numbers on the Open rate, Click-through
                      rate, Delivery rate, Bounce rate, Unsubscribe rate
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
                      With big influence EMC ( email marketing campaigns )
                      inspired by automated workflows and strong monitoring of
                      open, click-through, and conversion rates, we aim to give
                      you the highest achievable ROI ( Return On Investment )
                      for the business you are running. We enable you to build
                      consistent and worthwhile communication that helps to
                      manage meaningful relationships with the customers..
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
