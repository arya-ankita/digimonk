import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const AboutWork = [
  { aboutslider: require("../images/aboutwork/1.jpg") },
  { aboutslider: require("../images/aboutwork/2.jpg") },
  { aboutslider: require("../images/aboutwork/3.jpg") },
  { aboutslider: require("../images/aboutwork/4.jpg") },
  { aboutslider: require("../images/aboutwork/5.jpg") },
  { aboutslider: require("../images/aboutwork/6.jpg") },
];
const Choose = [
  { Title: "Authenticity", image: require("../images/aboutwork/a-1.png") },
  { Title: "Data Privacy", image: require("../images/aboutwork/a-2.png") },
  {
    Title: "Excellent After-Sales Support",
    image: require("../images/aboutwork/a-3.png"),
  },
  {
    Title: "Dedicated Account Manager",
    image: require("../images/aboutwork/a-4.png"),
  },
];
const Logoslider = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
export default class About extends Component {
  render() {
    SwiperCore.use([Autoplay]);
    return (
      <>
        <Navbar />

        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="About Us"
          name="About Us"
          text="We at Digimonk Technologies believes in digital transformation and building innovative technology solutions."
        />

        <section className="main-content">
          <Container>
            <Row>
              <Col md="7">
                <div className="custombox">
                  <h2>Who we are?</h2>
                  <p>
                    We are a one-stop destination for all digital solution, be
                    it website designing, digital marketing, SEO, mobile apps.
                    Our elegant group of Website Developers bestows their
                    innovation and expertise who transform your idea into an
                    amazing Website Design or Mobile App Development while
                    keeping every custom project unique.
                  </p>
                  <p>
                    We rapidly transform our self-motivated ideas and concept
                    into new products and applications along with improving
                    application performance, thus reducing the complexities of
                    business operations and accelerating the business output or
                    efficiency of our clients.
                  </p>
                  <p>
                    Over the years we have gathered wide experience and
                    expertise in our Domain. We have periodically based on the
                    market trend and technological changes diversified and
                    perfected our skills in the field of Website development,
                    web-based application development shopping
                  </p>
                </div>
              </Col>
              <Col md="5">
                <div className="aboutslider">
                  <Carousel interval={5000}>
                    {AboutWork.map((a, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100"
                          src={a.aboutslider}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </Col>
              <Col md="12">
                <div className="custombox">
                  <p>
                    cart/ E-commerce website, Mobile Apps, Search Engine
                    Optimization, Domain Registration payment gateway, small
                    software like CRM, school Management software, Inventory
                    Management Software, Travel Management Software and certain
                    custom software etc.
                  </p>
                  <p>
                    Our Vision: Our vision is to be the most admired Company in
                    the eyes of our Global customers by understanding their
                    rapidly changing requirements and delivering world-class
                    solutions, products, and service consistency.
                  </p>
                  <p>
                    Our Mission: We will achieve our vision by creating and
                    delivering superior value to our customers by managing our
                    business through four imperatives namely Quality,
                    Commitment, Innovation, and Service Excellence.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="gray">
          <Container>
            <h2 className="text-center mb-4">Founding Team</h2>
            <Row className="mb-4">
              <Col>
                <div className="card border-0 shadow">
                  <img
                    src={require("../images/Gaurav_Sir.png")}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Gaurav Jain</h5>
                    <div class="card-text text-black-50">Founder & CEO</div>
                  </div>
                </div>
              </Col>

              <Col>
                <div class="card border-0 shadow">
                  <img
                    src={require("../images/Akshya_Sir_(1).png")}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Akshay Pratap Singh</h5>
                    <div class="card-text text-black-50">
                      Co-Founder, Business Consultant
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <h2 className="text-center md-4 mb-4">Delivery Leadership</h2>
            <Row className="mb-4">
              <Col>
                <div class="card border-0 shadow">
                  <img
                    src={require("../images/image_large.png")}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Rohit Arora</h5>
                    <div class="card-text text-black-50">
                      Delivery Head (Middle East & APAC)
                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div class="card border-0 shadow">
                  <img
                    src={require("../images/Neelam_Mam.png")}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Neelam Jain</h5>
                    <div class="card-text text-black-50">
                      Director of Digital Business
                    </div>
                  </div>
                </div>
              </Col>

              <Col>
                <div class="card border-0 shadow">
                  <img
                    src={require("../images/Tony_Sir.png")}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title mb-0">Tony Timbol</h5>
                    <div class="card-text text-black-50">
                      Agile Coach, Mentor & IT Consultant
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col md="12">
                <div className="custombox">
                  <h2>Why choose us</h2>
                  <Row xs={2} md={2} lg={4}>
                    {Choose.map((c, index) => (
                      <Col key={index}>
                        <div className="choosebox ">
                          <div className="image-wrap c-height">
                            <div className="authenticity">
                              <img src={c.image} alt="" />
                            </div>
                            <h3>{c.Title}</h3>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="client-logohappy pt-100 pb-100">
          <Container>
            <Row>
              <Col md="12">
                <h2 className="title-resalt mb-5">
                  We have earned the trust of <span> 25,869 </span>customers ,
                  including these fine companies
                </h2>
                <Swiper
                  spaceBetween={15}
                  slidesPerView={10}
                  // navigation
                  loop={true}
                  autoplay={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {Logoslider.map((L, index) => (
                    <SwiperSlide key={index}>
                      <div className="logosliderb">
                        <img src={require(`../images/logo/logo-${L}.png`)} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}
