import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn, MDBIcon, MDBAnimation  } from 'mdbreact'
import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { Form, Button, Row, Col } from "react-bootstrap";
export default class ContactUs extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);}
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Contact Us"
              name="Contact Us"
            />
            <section>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="conact-us-wrap-one mb-30">
                      <h3 className="heading">
                        To make requests for <br />
                        further information, <br />
                        <span className="text-color-primary">contact us</span>
                        via our social channels.{" "}
                      </h3>
                      <div className="sub-heading">
                        We just need a couple of hours! <br /> No more than 2
                        working days since receiving your issue ticket.
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <Form className="contact-form">
                      <Row>
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                              type="name"
                              placeholder="Enter name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="number"
                              cols={12}
                              placeholder="Enter Phone Number"
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                              type="text"
                              cols={12}
                              placeholder="Enter Company Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md="12">
                          <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Button variant="outline-danger" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </MDBCol>
                </MDBRow>

                <MDBAnimation reveal type="fadeInUp">
                  <MDBRow className="text-center pt-md-5 pb-md-5 address-text">
                    <MDBCol md="4">
                      <div className="box-contact">
                        <MDBIcon size="5x" icon="map-marked-alt" />
                        <h3>Gwalior</h3>
                        <p>
                          Software Technology Parks Of India, Gwalior, Madhya
                          Pradesh,474005 India
                        </p>
                        <p>
                          <a href="tel:+91 77228-45500">+91 77228-45500</a>
                        </p>
                        <p>
                          <a href="mailto:info@digimonk.in">info@digimonk.in</a>
                        </p>
                      </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <div className="box-contact">
                        <MDBIcon size="5x" icon="map-marked-alt" />

                        <h3>Australia</h3>
                        <p>
                          9 / 2A Federal Rd, Seven HillsNSW - 2147,Australia
                        </p>
                        <p>
                          <a href="tel:+61 423 515 482">+61 423 515 482</a>
                        </p>
                      </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <div className="box-contact">
                        <MDBIcon size="5x" icon="map-marked-alt" />
                        <h3>Canada</h3>
                        <p>115 aylesbury dr.brampton (ontario),Canada</p>
                        <p>
                          <a href="tel:+1 902 293 2011">+1 902 293 2011</a>
                        </p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBAnimation>
              </MDBContainer>
            </section>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.9886587360575!2d78.15639789986986!3d26.262031488239657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976b771a042c3ab%3A0xef13ad0f47394b38!2sDigiMonk%20Technologies!5e0!3m2!1sen!2sin!4v1603437675889!5m2!1sen!2sin"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: "0", display: "block" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            <Footer />
          </>
        );
    }
}
