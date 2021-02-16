import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from "mdbreact";
import InnerBannerTop from "./InnerBannerTop";
import React, { Component } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <InnerBannerTop
          breadcrumbname="Home"
          breadcrumactive="view-gallery"
          name="Life At Digimonk"
          text="We're a group of CREATIVE WORKERS WHO REJOICE IN COLLECTIVE
                    EFFORTS OF BRINGING IMAGINATION Your life.We enjoy
                    festivities with fervor. We focus on notions that contribute
                    to life thoughts with a colorful shade. We are the
                    harbingers of change, the architects of vision, the
                    engineers of direction, the techies of execution, the
                    marketers of acumen, the designers of imagination, the
                    storytellers of persuasion and activists who create
                    excitement nearby a name assiduously. Put together we bring
                    unlimited potential which gets employed in productive
                    expression."
        />
        <div className="gallery linebg">
          <MDBContainer>
            {/* <MDBRow className="mb-5">
              <MDBCol md="12" className="text-center">
                <MDBAnimation type="fadeInUp">
                  <h1>Life at Digimonk</h1>
                  <p>
                    We're a group of CREATIVE WORKERS WHO REJOICE IN COLLECTIVE
                    EFFORTS OF BRINGING IMAGINATION Your life.We enjoy
                    festivities with fervor. We focus on notions that contribute
                    to life thoughts with a colorful shade. We are the
                    harbingers of change, the architects of vision, the
                    engineers of direction, the techies of execution, the
                    marketers of acumen, the designers of imagination, the
                    storytellers of persuasion and activists who create
                    excitement nearby a name assiduously. Put together we bring
                    unlimited potential which gets employed in productive
                    expression.
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow> */}
            <SimpleReactLightbox>
              <SRLWrapper>
                <MDBRow className="img-gallery">
                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-1.155084b4.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-1.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-2.a835fe8c.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-2.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-3.731fd6e9.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-3.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-4.0535f313.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-4.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-5.e25d87ef.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-5.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-6.77f0acda.jpeg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-6.jpeg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-7.54946ea0.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-7.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-8.671cda24.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-8.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="4" className="mb-4">
                    <MDBAnimation reveal type="fadeInUp">
                      <a
                        href="/static/media/office-pic-9.40b6179a.jpg"
                        data-attribute="SRL"
                      >
                        <img
                          src={require("../images/office-pic-9.jpg")}
                          alt=""
                        />
                      </a>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </SRLWrapper>
            </SimpleReactLightbox>
          </MDBContainer>
        </div>
        <Footer />
      </div>
    );
  }
}
