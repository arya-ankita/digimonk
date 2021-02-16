import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBView, MDBAnimation } from "mdbreact";
import InnerBannerTop from "./InnerBannerTop";
export default class Blog_Details extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumbname="Blog"
          breadcrumactive="Blog Details"
          name="Blog Information"
        />
        <section>
          <MDBContainer>
            <div className="details mb-5">
              <MDBAnimation type="fadeInUp">
                <span className="uk-text-meta">20 SEPTEMBER 2016</span>
              </MDBAnimation>
              <MDBAnimation type="fadeInUp">
                <h1>10 Technical SEO Tips</h1>
              </MDBAnimation>
            </div>
            <MDBView className="mb-5">
              <MDBAnimation type="fadeInUp">
                <img
                  src="https://digimonk.in/assets/site/images/Technical_SEO_.jpg"
                  alt=""
                />
              </MDBAnimation>
            </MDBView>

            <MDBRow>
              <MDBCol md="7" className="offset-md-2">
                <div className="blog-text">
                  <MDBAnimation reveal type="fadeInUp">
                    <p>
                      These days Seo has become very competitive as compared to
                      what it used to be 5-7 years back. Back days, it was very
                      easy to rank with backlinks and keyword placement. But
                      nowadays there are many factors that affect the ranking of
                      your site. One of those factors is Technical SEO.{" "}
                    </p>

                    <p>
                      So today in this article we are going to talk about
                      technical SEO. And how you can boost your rankings by
                      applying these simple technical tricks.
                    </p>
                  </MDBAnimation>
                  <MDBAnimation reveal type="fadeInUp">
                    <h2>What is SEO?</h2>
                    <p>
                      In case you are new to this industry, so let us start with
                      a basic introduction of the term SEO. The full form of SEO
                      is Search Engine Optimization. As the full form suggests
                      to optimize your website and content according to the
                      search engine. This helps publishers to get better search
                      rankings.
                    </p>
                    <p>
                      Google’s ranking algorithm work on crawling and indexing.
                      It’s bots and crawlers crawl your website and according to
                      various signals from your website define your ranking.
                    </p>
                    <p>
                      These signals are the optimization activities that you
                      perform on and off your website. On the basis of
                      activities, SEO can be divided into three categories.{" "}
                    </p>
                    <p>
                      1. On-page SEO
                      <br />
                      2. Off-page SEO <br />
                      3. Technical SEO
                    </p>
                  </MDBAnimation>
                  <MDBAnimation reveal type="fadeInUp">
                    <h2>Technical SEO</h2>
                    <p>
                      Many people mix the on-page SEO with technical SEO. The
                      main reason behind this is that both these activities are
                      performed on the website. So it is very difficult to
                      distinguish between them. Therefore first, let’s
                      understand what is the difference between them.
                    </p>
                    <h2>Difference between On-page SEO and Technical SEO</h2>
                    <p>
                      With on-page SEO you optimize the content of your website
                      to make it search engine and user-friendly. While in
                      Technical SEO optimizer optimize the website from
                      technical perspectives that have nothing to do with the
                      website’s content.{" "}
                    </p>
                    <p>
                      The main aim of technical SEO is to make the website
                      crawler friendly. This helps in the faster crawling and
                      indexing of your website which ultimately results in
                      improved rankings. The following are some of the technical
                      SEO practices that every optimizer should practice.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <Footer />
      </>
    );
  }
}
