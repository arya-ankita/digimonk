import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const testmonoials = [
  {
    image: require("../images/testmonoials/client-1.jpg"),
    title: "Joseph C",
    subtitle: "USA",
    description:
      '"They were very good with making revisions to get the product exactly how I wanted it."',
  },
  {
    image: require("../images/testmonoials/client-2.jpg"),
    title: "Rohan K",
    subtitle: "USA",
    description:
      '"Digimonk are high caliber professionals who work diligently to provide best in class service. I highly recommend selecting Digimonk for your next project. Looking forward to working with them in the future."',
  },
  {
    image: require("../images/testmonoials/client-3.jpg"),
    title: " Antonio T",
    subtitle: "USA",
    description:
      '"DigiMonk completed my project and delivered the services and outcomes I expected with an outstanding degree of professionalism and skill. This small, complex project not only demonstrated Digimonk expertise in specific technologies and tool sets but also showcased their deep understanding of the software development work I needed."',
  },
  {
    image: require("../images/testmonoials/client-4.jpg"),
    title: "Rodolfo V",
    subtitle: "USA",
    description:
      ' "DigiMonk team is absolutely the best! I have had one of my best experiences in Freelancer so far. We are doing a very complex project and they are delivering everything on time. DigiMonk 100% know what they are doing, they have solved so many problems that my project had. I will keep using them for the long run. Highly Highly recommended !"',
  },
  {
    image: require("../images/testmonoials/client-5.jpg"),
    title: " Andras F",
    subtitle: "Hungary",
    description:
      '"It was a pleasure working with Gaurav, he was always very helpful and quick, came up with new ideas to make my work easier. Recommend him very much!!!"',
  },
  {
    image: require("../images/testmonoials/client-6.jpg"),
    title: "Thomas R",
    subtitle: "USA",
    description:
      ' "Digimonk will get the job done. They will put in the  extra effort to please you. The communication is very good and the site is robust. Just need to improve on designs a little."',
  },
  {
    image: require("../images/testmonoials/client-7.jpg"),
    title: "Hansel",
    subtitle: "Australia",
    description:
      ' Digimonk is a committed team of expert deisgners and programmers. They were very flexible and made all the changes I suggetsed very promptly. They stayed in touch regularly and addressed any concerns I had promptly. It was great working with this team and I will definitely hire them again for my upcoming projects."',
  },
  {
    image: require("../images/testmonoials/client-9.png"),
    title: "Jassim A",
    subtitle: "Kuwait",
    description:
      ' "They were very good with making revisions to get the product exactly how I wanted it."',
  },
];
export default class Review extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Review"
          name="Review"
          text=" Running a business is not simple and by giving quality
                      service, we bring a smile on our client's face. We resolve many
                      challenges faced by small medium enterprises and provide
                      timely delivery. The pleasure we get by knowing that our
                      client is profiting from our services is showcased"
        />

        <section className="review">
          <Container>
            <Row>
              <Col md="12">
                <h2 className="text-center mb-5">Customer Stories</h2>
              </Col>
            </Row>
            <div className="Reviewbox">
              <Row xs={1} md={2} lg={2}>
                {testmonoials.map((t, index) => (
                  <ScrollAnimation animateIn="fadeIn" className="effectsbox">
                    <Col className="mb-4">
                      <Row>
                        <Col md="2">
                          <div className="review-img">
                            <img src={t.image} alt="" />

                            <h4>{t.title}</h4>
                            <span>{t.subtitle}</span>
                          </div>
                        </Col>
                        <Col md="10">
                          <div className="review-text">
                            <p>{t.description}</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </ScrollAnimation>
                ))}
              </Row>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }
}
