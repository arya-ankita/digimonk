import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
import React, { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import { Container, Row, Col } from "react-bootstrap";
import InnerBannerTop from "./InnerBannerTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const gallery = [
  {
    Birthday: "Birthday Celebration",
    image: require("../images/gallery/gallery-1.jpg"),
  },
  {
    Birthday: "It's party time",
    image: require("../images/gallery/gallery-2.jpg"),
  },
  {
    Birthday: "Drawing Competition",
    image: require("../images/gallery/gallery-3.jpg"),
  },
  {
    Birthday: "Office Pics",
    image: require("../images/gallery/gallery-4.jpg"),
  },
  {
    Birthday: "PM addressing STPI",
    image: require("../images/gallery/gallery-5.jpg"),
  },
  { Birthday: "Christmas", image: require("../images/gallery/gallery-6.jpg") },
  {
    Birthday: "New Year Eve",
    image: require("../images/gallery/gallery-7.jpg"),
  },
  {
    Birthday: "Gift Distribution",
    image: require("../images/gallery/gallery-8.jpg"),
  },
  {
    Birthday: "Independence day Celebration",
    image: require("../images/gallery/gallery-9.jpeg"),
  },
  { Birthday: "Campaign", image: require("../images/gallery/gallery-10.jpg") },
  {
    Birthday: "Diwali Celebration",
    image: require("../images/gallery/gallery-11.jpg"),
  },
  { Birthday: "Goa Trip", image: require("../images/gallery/gallery-11.jpg") },
];

export default class MainGallery extends Component {
  render() {
    return (
      <>
        <Navbar />

        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Gallery"
          name="Gallery"
          text=" Make sure your content is consistent and personalized for
              each customer with Adobe Experience Manager Sites. Create
              and manage your digital experience across all channels
              with automated tools that make scaling effortless."
        />

        <section>
          <Container>
            <Row xs={1} md={4} lg={12}>
              {gallery.map((gallery, index) => (
                <Col key={index} className="mb-4">
                  <article class="fancy-card two">
                    <Link to="/view-gallery">
                      <img src={gallery.image} />
                      <div class="bg-overlay"></div>
                      <div class="v-border"></div>
                      <div class="h-border"></div>
                      <div class="content">
                        <div class="secondary">
                          <h2>{gallery.Birthday}</h2>
                        </div>
                      </div>
                    </Link>
                  </article>
                  {/* <div className="gallery-card ">
                                
                                <div className="gallery-overlay">
                                    <h3>Sunil Baghel</h3>
                                    <p>Birthday Party</p>
                                </div>
                            </div> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <Footer />
      </>
    );
  }
}
