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
export default class NewPortfolio extends Component {
  render() {
    let WorkIcon = <MDBIcon icon="circle" />;
    return (
      <>
        <Navbar />
        <div className="timelinebox pt-5 pb-5">
          <MDBContainer>
            <h2 className="text-center LongTitle is-h4">Our Portfolio</h2>

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
                  consumers and maintaining the current ones through strategic
                  messaging, engaging designs and related content.
                </p>
                <span className="vertical-timeline-element-date desktop">
                  <div className="iframe">
                    <iframe id="desktop" src="https://imratedme.com/" />
                  </div>
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
                  Along with impactful email marketing campaigns, we strategize
                  to cross-sell and upsell your brand, driving to consumer
                  retention by a logical way.
                </p>
                {/* <span className="vertical-timeline-element-date">
                  <img src={require("../images/paidimg2.png")} alt="" />
                </span> */}

                <span className="vertical-timeline-element-date desktop">
                  <div className="iframe">
                    <iframe
                      id="desktop"
                      src="https://cuboidtechnologies.com/"
                    />
                  </div>
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
                  With the target audience determined and impactful sources at
                  hand, we manage brand promotion campaigns by right marketing
                  methods and tactics. We create automated workflows and lead
                  scoring to send trigger-based email automation that results in
                  quality leads
                </p>

                <span className="vertical-timeline-element-date desktop">
                  <div className="iframe">
                    <iframe id="desktop" src="https://try-med.com/" />
                  </div>
                </span>
                {/* <span className="vertical-timeline-element-date">
                  <img src={require("../images/paidimg3.png")} alt="" />
                </span> */}
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
                  according to industry demands. They produce very beautifully
                  crafted email designs with impactful content, to drive a CA (
                  Call to Action ).{" "}
                </p>

                <span className="vertical-timeline-element-date desktop">
                  <div className="iframe">
                    <iframe id="desktop" src="https://www.dawerlee.com/" />
                  </div>
                </span>
                {/* <span className="vertical-timeline-element-date">
                  <img src={require("../images/paidimg4.png")} alt="" />
                </span> */}
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
                  interactive tables and graphs. We include a range of metrics
                  and report numbers on the Open rate, Click-through rate,
                  Delivery rate, Bounce rate, Unsubscribe rate
                </p>
                <span className="vertical-timeline-element-date desktop">
                  <div className="iframe">
                    <iframe id="desktop" src="https://beagileready.com/" />
                  </div>
                </span>
                {/* <span className="vertical-timeline-element-date">
                  <img src={require("../images/paidimg5.png")} alt="" />
                </span> */}
              </VerticalTimelineElement>
            </VerticalTimeline>
          </MDBContainer>
        </div>
      </>
    );
  }
}
