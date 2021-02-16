import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBIcon, MDBAnimation } from "mdbreact";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import InnerBannerTop from "./InnerBannerTop";
export default class SeoServices extends Component {
  render() {
    let WorkIcon = <MDBIcon icon="circle" />;

    return (
      <div className="linebg">
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="SEO Services"
          name="Search Engine Optimization"
          text=" We integrate SEO as a critical part of our digital
                      marketing strategies keeping in mind the target geography,
                      target device and target audience for your business. With
                      over 500 updates to Google's search algorithm every year,
                      it is all about managing moving parts. Our dedicated team
                      of SEO experts aim to formulate a holistic approach to
                      help you rank better on search."
        />

        <section className="timelinebox">
          <MDBContainer>
            <h2 className="text-center">Our Process</h2>

            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#ff0000",
                  color: "#fff",
                }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Keyword Research and Mapping
                </h3>

                <p>
                  Our SEO experts conduct a thorough research and analysis to
                  ensure the inclusion of right keywords in the overall SEO
                  strategy. This ensures improved rankings for your website’s
                  search results
                </p>
                <span className="vertical-timeline-element-date">
                  <img src={require("../images/seo-2.jpg")} alt="" />
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#ff0000",
                  color: "#fff",
                }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">On-Page SEO</h3>

                <p>
                  The content for your website is created basis the keyword
                  research in our custom SEO strategy. This Necessitates Optimal
                  use of target keywords on the Webpages, Together with
                  Optimisation of existing content & adding metadata to the
                  pages
                </p>
                <span className="vertical-timeline-element-date">
                  <img src={require("../images/seo-1.jpg")} alt="" />
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                //date="2008 - 2010"
                iconStyle={{
                  background: "#ff0000",
                  color: "#fff",
                }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Off-Page SEO
                </h3>

                <p>
                  Our team of SEO experts work outside of your website to impact
                  and improve the overall search rankings of your website
                </p>
                <span className="vertical-timeline-element-date">
                  <img src={require("../images/seo-3.jpg")} alt="" />
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#ff0000",
                  color: "#fff",
                }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Reputation Management
                </h3>

                <p>
                  We not only work on bringing your website in the top search
                  results page but also ensure that no negative results pop up
                  when your brand is being searched for
                </p>
                <span className="vertical-timeline-element-date">
                  <img src={require("../images/seo-4.jpg")} alt="" />
                </span>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                //date="April 2013"
                iconStyle={{
                  background: "#ff0000",
                  color: "#fff",
                }}
                icon={WorkIcon}
              >
                <h3 className="vertical-timeline-element-title">
                  Reporting and Analytics
                </h3>

                <p>
                  We capture the site’s rankings for all targeted keywords, as
                  well as cover backlinks audit, off page link building, seo
                  optimization status, traffic reports and technical seo audit
                  reports
                </p>
                <span className="vertical-timeline-element-date">
                  <img src={require("../images/seo-5.jpg")} alt="" />
                </span>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </MDBContainer>
        </section>

        <section className="search-engine gray">
          <MDBContainer>
            <h2 className="text-center pb-3">
              Our 3 Pillars of Search Engine Optimization
            </h2>
            <MDBRow className="mt-4 feature-card">
              <MDBCol xl="4" className="col-height-features">
                <div className="box">
                  <div className="box__image">
                    <h2 className="card-title">Technical SEO</h2>

                    <ul className="text-seo">
                      <li>Server analysis &amp; website rendering</li>
                      <li>Internationalization</li>
                      <li>Site architecture</li>
                      <li>Sitemaps</li>
                      <li>Tags</li>
                      <li>Url structure</li>
                      <li>Mobile optimization</li>
                      <li>Performance</li>
                      <li>UX &amp; Content</li>
                    </ul>
                  </div>
                </div>
              </MDBCol>

              <MDBCol xl="4" className="col-height-features">
                <div className="box">
                  <div className="box__image">
                    <h2 className="card-title">On-Page SEO</h2>

                    <ul className="text-seo">
                      <li>Intent-based query analysis</li>
                      <li>Meta tags</li>
                      <li>Unique descriptions for product pages</li>
                      <li>
                        User &amp; search engine friendly content creation
                      </li>
                      <li>Metadata &amp; On-page optimization</li>
                      <li>Analytics &amp; Reporting</li>
                    </ul>
                  </div>
                </div>
              </MDBCol>

              <MDBCol xl="4" className="col-height-features">
                <div className="box">
                  <div className="box__image">
                    <h2 className="card-title">Off-Page SEO</h2>

                    <ul className="text-seo">
                      <li>Links From Wikipedia</li>
                      <li>Article Submissions</li>
                      <li>Authoritative Directory submissions</li>
                      <li>Participation on Business relevant Forums</li>
                      <li>Question &amp; Answers Submission</li>
                    </ul>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="tools-use">
          <MDBAnimation reveal type="fadeInUp">
            <MDBContainer>
              <h2 className="pb-5 text-center ">Tools We Use</h2>
              <MDBRow>
                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/seo-moz.png")} alt="" />
                    <div className="red-text-box">SEO Moz</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img
                      src={require("../images/google-analytics.png")}
                      alt=""
                    />
                    <div className="red-text-box">Google Analytics</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/google-adwards.png")} alt="" />
                    <div className="red-text-box">Google Adwords</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img
                      src={require("../images/google-page-speed.png")}
                      alt=""
                    />
                    <div className="red-text-box">Google Page speed</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/google-trand.png")} alt="" />
                    <div className="red-text-box">Google Trends</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/similar-web.png")} alt="" />
                    <div className="red-text-box">Similar web</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/sitemap.png")} alt="" />
                    <div className="red-text-box">Sitemap</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/lighthouse.png")} alt="" />
                    <div className="red-text-box">Lighthouse</div>
                  </div>
                </MDBCol>
                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/copyscape.png")} alt="" />
                    <div className="red-text-box">Copyscape</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/google-search.jpg")} alt="" />
                    <div className="red-text-box">Google Search Console</div>
                  </div>
                </MDBCol>

                <MDBCol md="6" xl="2">
                  <div className="googleasd">
                    <img src={require("../images/screming.jpg")} alt="" />
                    <div className="red-text-box">Screaming Frog</div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBAnimation>
        </section>

        <Footer />
      </div>
    );
  }
}
