import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from "mdbreact";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";

export default class Team extends Component {
  render() {
    return (
      <div className="team linebg">
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="Leadership"
          name="Leadership"
          text="We at Digimonk Technologies believes in digital transformation and building innovative technology solutions."
        />

        <section className="ourteam">
          <MDBContainer>
            <h2>Founding Team</h2>
            
            <MDBRow className="pt-5 justify-content-center">
              <MDBCol md="4" className="mb-4 col-md-offset-2">
                <MDBAnimation reveal type="fadeInUp">
                  <div class="card border-0 shadow">
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
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
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
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <section></section>
        <section className="delivery-leadership bg">
          <MDBContainer>
            <h2>Delivery Leadership</h2>
            <MDBRow className="pt-5">
              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
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
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
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
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4" className="mb-4">
                <MDBAnimation reveal type="fadeInUp">
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
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <Footer />
      </div>
    );
  }
}
