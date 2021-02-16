import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { MDBContainer, MDBAnimation } from "mdbreact";

import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const ClinetLogo = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
];

const ProjectSlider = [
  {
    Title: "Dawerlee - Hire Manpower & Post Worker Online",
    descipition:
      "Software which provides an Auto Score to user story, Agile Ready ensure & determine the success rate of any project...",
    image: require("../images/project-banner/project-1.jpg"),
  },
  {
    Title: "Be Agile Ready",
    descipition:
      "An online platform which help find suitable worker in different categories e.g. Driver, Nurse, Cook, Gardner, Housemaid, Technicians etc....",
    image: require("../images/project-banner/project-2.jpg"),
  },
  {
    Title: "GAPVO - Casino Affiliate Website",
    descipition:
      "Make your own Casino Affiliate Website today. GAPVO is a program for those who want to get started immediately with a turnkey casino affiliate website....",
    image: require("../images/project-banner/project-3.jpg"),
  },
  {
    Title: "FindAjar - Real Estate Property Search Portal",
    descipition:
      "A website which helps the user in finding property for rent, sale, purchase. Users can list their properties, which other users can...",
    image: require("../images/project-banner/project-4.jpg"),
  },
  {
    Title: "Gastro & Co",
    descipition:
      "Multilingual E-commerce website connected with JTL WAWI, fetches the products from customers CRM JTL WAWI, display on the website, keep the stock sync, keep the ....",
    image: require("../images/project-banner/project-5.jpg"),
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testmonoial = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestmonoialSlider = [1, 2, 3, 4];
const Blogbox = [
  {
    BlogTitle: "5 Ads Trends For 2021",
    ImageBlog: require("../images/blog-4.jpeg"),
    BlogText:
      "Target the right audience. If you're creating one broad Facebook ad campaign and expecting to reach each member of your target audience, it's not goin...",
  },
  {
    BlogTitle: "5 Must Watch Movies for Business Persons",
    ImageBlog: require("../images/blog-1.jpg"),
    BlogText:
      "Movies for Business Persons. Being an entrepreneur can be challenging, and numerous individuals have failed in ...",
  },
  {
    BlogTitle: " Step by Step Guide to Install & Run Python (Django  ",
    ImageBlog: require("../images/blog-2.jpg"),
    BlogText:
      "Django is a powerful web framework that can help you get your Python application or website off the ground. ..",
  },
];
export default class Home extends Component {
  // state={classname:2}
  render() {
    return (
      <div>
        <Navbar />

        <div className="banner">
          <img src={require("../images/banner-2.jpg")} alt="" />
        </div>

        <section className="bg">
          <Container>
            <MDBAnimation reveal type="fadeInUp">
              <Row>
                <Col md="12">
                  <div className="banner-title mb-4 text-center">
                    <h2>Happy Clients</h2>
                  </div>

                  <ul className="clienmain row">
                    {ClinetLogo.map((picture, index) => (
                      <li key={index} className="mb-3">
                        <div className="client-logo">
                          <img
                            src={require(`../images/logo/logo-${picture}.png`)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </MDBAnimation>
          </Container>
        </section>

        <section className="recentbox">
          <Container>
            <Row>
              <Col md="12">
                <div className="title mb-5 text-center">
                  <h2>Our Project</h2>
                  <p>
                    We deliver bespoke industry specific solutions leveraging
                    our extensive digital experience, design-led engineering
                    approach and agile processes backed by our strong expertise
                    in cutting edge technologies.
                  </p>
                </div>
                <Carousel
                  swipeable={true}
                  draggable={false}
                  showDots={false}
                  responsive={responsive}
                  ssr={false} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
                  {ProjectSlider.map((p, index) => (
                    <div key={index} className="projectslider">
                      <div className="slider-project">
                        <img src={p.image} />
                        <div className="project-text">
                          <h3>{p.Title}</h3>
                          <p>{p.descipition}</p>
                          <Link to="#" className="btn btn-outline-danger">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="bg">
          <MDBAnimation reveal type="fadeInUp">
            <MDBContainer>
              <h2 className="mb-5 happy text-center">
                What Our Happy Customer Are Saying
              </h2>

              <Carousel responsive={Testmonoial}>
                {TestmonoialSlider.map((t, index) => (
                  <div key={index}>
                    <div className="mx-auto videoplayer">
                      <iframe
                        style={{ width: "100%" }}
                        src="https://player.vimeo.com/video/247366517?title=0&amp;byline=0&amp;portrait=0"
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                  </div>
                ))}
              </Carousel>
            </MDBContainer>
          </MDBAnimation>
        </section>

        <section className="blog-section">
          <Container>
            <div className="title mb-5 text-center">
              <h2>Our Blog</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <Row xs={2} md={3} lg={3}>
              {Blogbox.map((b, index) => (
                <Col key={index}>
                  <Card>
                    <Card.Img variant="top" src={b.ImageBlog} alt="" />
                    <Card.Body>
                      <Card.Title>
                        <Link to="#">
                          <h3>{b.BlogTitle}</h3>
                        </Link>
                      </Card.Title>
                      <Card.Text>{b.BlogText}</Card.Text>
                      <Button variant="outline-danger" href="#">
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    );
  }
}
