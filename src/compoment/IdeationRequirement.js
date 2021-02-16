import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact'
import InnerBannerTop from "./InnerBannerTop";
export default class IdeationRequirement extends Component {
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Ideation &amp; Requirement  "
              name="Ideation &amp; Requirement"
              text="Integration has always been considered as a hectic
                          procedure. Whether its a one-time migration from a
                          legacy system or a real-time integration between one
                          or more data sources, Digimonk will preserve the
                          integrity of your data throughout the process."
            />
           

            <section>
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInUp">
                      <img src={require("../images/mi_key_feature.png")} />
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="7">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="text-descp">
                        <h3 class="pb-3 text-innertitle">
                          End-To-End Consulting
                        </h3>
                        <p>
                          From creating data architecture to creating automated
                          transfer scripts, from creating data warehouses to
                          running your automated scripts, we can help you at
                          every step. End-To-End consulting
                        </p>
                        <h3 class="pb-3 text-innertitle">
                          Automated Data Transfer
                        </h3>
                        <p>
                          digimonk focuses on an automated tool-based data
                          migration approach offering minimal code changes,
                          leaving the investment in business logic intact.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <MDBAnimation reveal type="fadeInUp">
                  <div className="text-center mb-5">
                    <h2 className="text-center">What do we do?</h2>
                    <p>
                      Our dedicated team has successfully worked with
                      Salesforce.com standard data migration tools like
                      <br />
                      DataLoader, as well as third party tools like Talend ETL,
                      Jitterbit, and others. We will build web services and
                      leverage
                      <br />
                      Salesforce.com REST and SOAP APIs to keep your data in
                      sync and working seamlessly with Salesforce.com.
                    </p>
                  </div>
                </MDBAnimation>
                <MDBRow>
                  <MDBCol md="5" className="left-media text-right">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="media animated fadeInLeftShort mb-5">
                        <div class="media-body">
                          <p>Migration assessment and Application porting.</p>
                        </div>
                        <div class="media-left">
                          <a href="#" target="_blank">
                            <img
                              class="media-object"
                              src={require("../images/mi_wt_icon1.png")}
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </MDBAnimation>

                    <MDBAnimation reveal type="fadeInUp">
                      <div className="media animated fadeInLeftShort mb-5">
                        <div className="media-body">
                          <p>
                            Application re-engineering for new improved business
                            functionality and operation.
                          </p>
                        </div>
                        <div className="media-left">
                          <a href="#" target="_blank">
                            <img
                              className="media-object"
                              src={require("../images/mi_wt_icon2.png")}
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </MDBAnimation>

                    <MDBAnimation reveal type="fadeInUp">
                      <div className="media animated fadeInLeftShort mb-5">
                        <div className="media-body">
                          <p>Data migration.</p>
                        </div>
                        <div className="media-left">
                          <a href="#" target="_blank">
                            <img
                              className="media-object"
                              src={require("../images/mi_wt_icon3.png")}
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBAnimation reveal type="fadeInDown">
                      <img src={require("../images/mi_wt_ph.png")} alt />
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="5" className="right-media">
                    <MDBAnimation reveal type="fadeInUp">
                      <div className="media animated fadeInRightShort mb-5">
                        <div className="media-left">
                          <a href="#" target="_blank">
                            <img
                              className="media-object"
                              src={require("../images/mi_wt_icon4.png")}
                            />{" "}
                          </a>
                        </div>
                        <div className="media-body">
                          <p>
                            Application upgrade (within same operating
                            environment).
                          </p>
                        </div>
                      </div>
                    </MDBAnimation>

                    <MDBAnimation reveal type="fadeInUp">
                      <div className="media animated fadeInRightShort mb-5">
                        <div className="media-left">
                          <a href="#" target="_blank">
                            <img
                              className="media-object"
                              src={require("../images/mi_wt_icon5.png")}
                            />{" "}
                          </a>
                        </div>
                        <div className="media-body">
                          <p>Technology migration.</p>
                        </div>
                      </div>
                    </MDBAnimation>

                    <MDBAnimation reveal type="fadeInUp">
                      <div className="media animated fadeInRightShort mb-5">
                        <div className="media-left">
                          <a href="#" target="_blank">
                            <img
                              className="media-object"
                              src={require("../images/mi_wt_icon6.png")}
                            />{" "}
                          </a>
                        </div>
                        <div className="media-body">
                          <p>Cloud migration/transition services.</p>
                        </div>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <Footer />
          </>
        );
    }
}
