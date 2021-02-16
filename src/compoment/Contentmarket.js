import React, { Component } from 'react'
import { MDBAnimation, MDBIcon, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'

import Footer from './Footer';
import Navbar from './Navbar';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import InnerBannerTop from "./InnerBannerTop";

export default class Contentmarket extends Component {
    render() {
      let WorkIcon = <MDBIcon icon="circle" />;
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Content Marketing"
              name="Content Marketing"
              text="Our persistent & targeted efforts in Content Marketing
                          establish you as a thought leader with increased
                          reach, higher engagement and website 
                          traffic."
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
                      Competitive Analysis and Strategy
                    </h3>

                    <p>
                      We conduct thorough research and analysis on your brand's
                      competition to identify gaps and build a robust content
                      strategy and establish as an industry thought leader.
                    </p>
                    <span className="vertical-timeline-element-date">
                      <img src={require("../images/contimg1.jpg")} alt="" />
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
                      Content Creation
                    </h3>

                    <p>
                      Our content experts create insightful and shareable
                      content across channels. We ensure development of unique,
                      platform relevant content in the form of whitepapers,
                      blogs, videos, presentations, infographics, articles, and
                      more.
                    </p>
                    <span className="vertical-timeline-element-date">
                      <img src={require("../images/contimg2.jpg")} alt="" />
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
                      Content Management
                    </h3>

                    <p>
                      We follow a continuous process of content analysis and
                      creation, covering all digital channels to ensure your
                      brand stays ahead of the competition at all times.
                    </p>
                    <span className="vertical-timeline-element-date">
                      <img src={require("../images/contimg3.jpg")} alt="" />
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
                      Content Distribution
                    </h3>

                    <p>
                      Content is developed to be shared across specific target
                      channels. We help you push the content on all relevant
                      digital channels for maximum exposure.{" "}
                    </p>
                    <span className="vertical-timeline-element-date">
                      <img src={require("../images/contimg5.jpg")} alt="" />
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
                      Content Promotion
                    </h3>

                    <p>
                      We not only float the content on various online channels,
                      but also promote it further for an expanded reach and
                      consumption.
                    </p>
                    <span className="vertical-timeline-element-date">
                      <img src={require("../images/contimg6.jpg")} alt="" />
                    </span>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </MDBContainer>
            </section>
            <section className="gray">
              <MDBContainer>
                <MDBRow md={12}>
                  <MDBAnimation reveal type="fadeInUp">
                    <p >
                      We make and advertise content that makes it possible to
                      create brand awareness and boost their traffic lead
                      generation. We create relevant and contextual content
                      pieces that help you engage prospects and customers. We
                      partner with you to deliver insightful whitepapers, blogs,
                      videos and tonnes of engaging content to drive your
                      business objectives.
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
