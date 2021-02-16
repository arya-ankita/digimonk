import React, { Component } from "react";
import {
  MDBAnimation,
  MDBCol,
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBView,
  MDBIcon,
} from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import Footer from "./Footer";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "./Navbar";
import InnerBannerTop from "./InnerBannerTop";
import { Container, Row, Col } from "react-bootstrap";

export default class Socialmedia extends Component {
  render() {
    const Ourservices = [
      {
        Title: "Social Media Audit and Competition Analysis",
        Description:
          "We evaluate and optimize all your social media profiles and perform a gap and competition analysis to ensure no opportunities are missed to improve overall social media performance.",
        Image: require("../images/Social-Media-Audit-and-Gap-Analysis.png"),
      },
      {
        Title: "Social Media Strategy",
        Description:
          "We integrate your company targets and objectives in our organic and inorganic social media plan which are meticulously-crafted always remember that your target audience to boost brand awareness, create higher brand recall, build positive sentiments. ",
        Image: require("../images/Socimg1.png"),
      },
      {
        Title: "Social Media Communications",
        Description:
          "We produce calendarized social media communications to get an optimum social return on investment ( ROI ), keeping remember that your brand's tone of voice, latest trendy and exactly what works finest in the Everchanging digital landscape.",
        Image: require("../images/socimg2.png"),
      },

      {
        Title: "Campaign Amplification",
        Description:
          "Our social media marketing efforts are further amplified through campaigns designed to create a buzz around the brand and it’s messaging which are picked up by influencers, fetching higher organic reach and engagement for your brand.",
        Image: require("../images/socimg3.png"),
      },
      {
        Title: "Community Management",
        Description:
          "Engagement is a significant metric to determine the results of the brand online. . We implement effective strategies to drive higher engagement and build your brand’s persona amongst online communities.",
        Image: require("../images/socimg4.png"),
      },
      {
        Title: "Social Media Measurement and Optimization",
        Description:
          "We analyze, optimize and measure our social media advertising attempts to successfully Prevent any plan gaps and Enhance your entire social media operation for your brand",
        Image: require("../images/socimg5.png"),
      },
      {
        Title: "Social Media Listening",
        Description:
          "We continuously revise social media communication approaches based on the business trends, competitions' share-of-voice and also Most of All your viewers' response and pursuits towards your brand and its offerings.",
        Image: require("../images/Socimg6.png"),
      },
      {
        Title: "Social Customer Service",
        Description:
          "We invent a solid 24*7 tracking and process-oriented response mechanism for all the conversations around your brand-new. We innovate for swift resolutions and eliminate improper material in a Fast TAT",
        Image: require("../images/socimg7.png"),
      },
      {
        Title: "Influencer Marketing",
        Description:
          "We engage with social media influencers which are relevant to your industry to amplify your brand’s reach and to resonate your message among the target audience",
        Image: require("../images/socimg8.png"),
      },
    ];
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Social Media"
          name="Social Media Marketing"
          text="  We execute creative, compelling and customer-centric
                     social media marketing strategies to connect brands with people."
        />

        <section>
          <Container>
            <Row>
              <Col md="12">
                <h2 className="text-center">Our Services</h2>
                <p>
                  Our social media marketing services offer you a range of
                  solutions, crafted and built to specifically appeal to your
                  business objectives. Our crew of social media marketers
                  operates with designing a 360-degree plan that makes it
                  possible to enhance engagement and reach, increase positive
                  sentiment and generate leads. We create engaging social media
                  content calendars & conduct customer-centric campaigns across
                  most of the popular platforms that offer significant ROI.
                </p>
              </Col>
            </Row>
            <Row xs={1} md={3} lg={9}>
              {Ourservices.map((s, index) => (
                <Col key={index}>
                  <div className="ants c-height">
                    <img className="mb-4" src={s.Image} alt="" />
                    <h3>{s.Title}</h3>
                    <p>{s.Description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="gray">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h2 className="text-center mb-5">
                  We cover the entire gamut of Social Media Marketing
                </h2>
              </MDBCol>
              <MDBCol md={4}>
                <div className="card-24">
                  <h3>Social Media Strategy</h3>
                  <ul>
                    <li icon="facebook-f">
                      <MDBIcon fab icon="facebook-f" /> Facebook
                    </li>

                    <li>
                      <MDBIcon fab icon="instagram" /> Instagram
                    </li>
                    <li>
                      <MDBIcon fab icon="twitter-square" /> Twitter{" "}
                    </li>
                    <li>
                      <MDBIcon fab icon="linkedin-in" /> LinkedIn
                    </li>
                    <li>
                      <MDBIcon fab icon="pinterest" /> Pinterest
                    </li>
                    <li>
                      <MDBIcon fab icon="youtube-square" />
                      Youtube
                    </li>
                    <li>
                      <MDBIcon fab icon="snapchat" />
                      SnapChat
                    </li>
                  </ul>
                </div>
              </MDBCol>

              <MDBCol md={4}>
                <div className="card-24">
                  <h3>Social Media Ads</h3>
                  <ul>
                    <li>
                      {" "}
                      <MDBIcon fab icon="facebook-f" />
                      Facebook Adverts
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="twitter-square" />
                      Twitter Ads Manager
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="linkedin-in" />
                      LinkedIn Marketing Solutions
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="youtube-square" />
                      YouTube Advertising
                    </li>
                  </ul>
                </div>
              </MDBCol>

              <MDBCol md={4}>
                <div className="card-24">
                  <h3>Online Reputation Management</h3>
                  <ul>
                    <li icon="facebook-f">
                      {" "}
                      <MDBIcon fab icon="facebook-f" />
                      Facebook
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="instagram" />
                      Instagram
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="twitter-square" />
                      Twitter
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="linkedin-in" />
                      LinkedIn
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="pinterest" />
                      Pinterest
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="youtube-square" />
                      YouTube
                    </li>
                    <li>
                      {" "}
                      <MDBIcon fab icon="snapchat" />
                      SnapChat
                    </li>
                  </ul>
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
