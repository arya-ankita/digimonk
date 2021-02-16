import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";
import InnerBannerTop from "./InnerBannerTop";
export default class ProductLaunchStrategy extends Component {
  render() {
    return (
      <>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Product Launch Strategy"
          name="Product Launch Strategy"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua."
        />
        <section>
          <MDBContainer>
            <MDBRow className="d-flex align-items-center">
              <MDBCol md="4">
                <MDBAnimation type="fadeInUp">
                  <img src={require("../images/product-1.jpg")} alt="" />
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="8">
                <div className="about-banner">
                  <MDBAnimation type="fadeInUp">
                    <h1>Product Launch Strategy</h1>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </MDBAnimation>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section className="gray">
          <MDBContainer>
            

            <MDBRow className="d-flex align-items-center">
              <MDBCol md="6">
                <MDBAnimation reveal type="fadeInUp">
                  <div className="best">
                    <h5 className="font-weight-bold">Product 2</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <ul class="digimonk-list">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Integer blandit turpis eget nulla vestibulum sodales.
                      </li>
                      <li>
                        Aenean fermentum mauris semper, maximus mi vitae, tempus
                        tortor.
                      </li>
                      <li>Donec iaculis sapien sit amet porttitor feugiat.</li>
                    </ul>
                  </div>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6">
                <img src={require("../images/product-2.jpg")} alt="" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </>
    );
  }
}
