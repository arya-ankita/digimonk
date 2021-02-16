import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBLink } from 'mdbreact';
import InnerBannerTop from "./InnerBannerTop";

export default class IBMClouds extends Component {
    render() {
        return (
          <>
            <Navbar />
            <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="IBM Clouds"
              name="IBM Clouds"
              text="Enterprises are increasingly adopting hybrid and
                          multi-cloud."
            />

            <section>
              <MDBContainer>
                <MDBAnimation type="fadeInUp"></MDBAnimation>
                <MDBRow>
                  <MDBCol md="5">
                    <MDBAnimation reveal type="fadeInUp">
                      <img src={require("../images/cloud.png")} alt="" />
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="7">
                    <MDBAnimation reveal type="fadeInUp">
                      <p>
                        Amazon CloudFront is a fast content delivery network
                        (CDN) service that securely delivers data, videos,
                        applications, and APIs to customers globally with low
                        latency, high transfer speeds, all within a
                        developer-friendly environment. CloudFront is integrated
                        with AWS – both physical locations that are directly
                        connected to the AWS global infrastructure, as well as
                        other AWS services. CloudFront works seamlessly with
                        services including AWS Shield for DDoS mitigation,
                        Amazon S3, Elastic Load Balancing or Amazon EC2 as
                        origins for your applications, and Lambda@Edge to run
                        custom code closer to customers’ users and to customize
                        the user experience. Lastly, if you use AWS origins such
                        as Amazon S3, Amazon EC2 or Elastic Load Balancing, you
                        don’t pay for any data transferred between these
                        services and CloudFront. You can get started with the
                        Content Delivery Network in minutes, using the same AWS
                        tools that you're already familiar with: APIs, AWS
                        Management Console,
                      </p>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="12" className="mt-1">
                    <p>
                      AWS CloudFormation, CLIs, and SDKs. Amazon's CDN offers a
                      simple, pay-as-you-go pricing model with no upfront fees
                      or required long-term contracts, and support for the CDN
                      is included in your existing AWS Support subscription.
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <section className="gray">
              <MDBContainer>
                <MDBAnimation reveal type="fadeInUp">
                  <h2>Benefits</h2>
                </MDBAnimation>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="tech-service-block py-2 pr-4">
                        <h3>Fast & global</h3>
                        <p class="text-subpara">
                          By using React Native for mobile app development app
                          developers can run the same written code on both
                          Android and iOS. Moreover when the develop mobile apps
                          using React Native the code lines are shorter.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInDown">
                      <div class="tech-service-block py-2 pr-4">
                        <h3>Security at the Edge</h3>
                        <p class="text-subpara">
                          The single codebase allows developers to write once
                          and use it for multiple platforms. This helps improve
                          the quality of code because it is more manageable.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInUp">
                      <div class="tech-service-block py-2 pr-4">
                        <h3>Highly programmable</h3>
                        <p class="text-subpara">
                          In case of React Native app development the native
                          components in the library can be integrated into the
                          mobile app's code so that developers do not need to
                          rewrite them.
                        </p>
                      </div>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBAnimation reveal type="fadeInDown">
                      <div class="tech-service-block py-2 pr-4">
                        <h3>Deep integration with AWS</h3>
                        <p class="text-subpara">
                          The building blocks provided by React Native allow
                          developers to reuse 'native components' for Android
                          and iOS apps. They can use simple methods to customize
                          the components that can be reused.
                        </p>
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
