import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class IBMWebsphereCommerce extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="IBM-Websphere-Commerce"
              name="IBM-Websphare-Commerce"
              text="IBM Websphere Portal serves as a set of software tools that enable companies to build and manage web portals. We develop enterprise portals using IBM WebSphere Portal server online solutions for multi-channel, B2B and B2C commerce."
            />

{/* <section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h1>IBM Websphere Commerce</h1>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                IBM Websphere Portal serves as a set of software tools that enable companies to build and manage web portals. We develop enterprise portals using IBM WebSphere Portal server online solutions for multi-channel, B2B and B2C commerce.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/banner1-1.jpg')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</section> */}



<section>
<MDBContainer>
<MDBRow>
<MDBCol md="6" className="text-center">
    <MDBAnimation reveal type="fadeInUp">
        <img src={require('../images/ibm.png')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
    <h2 className="font-weight-bold">Effective & Affordable
Shopify Customization</h2>
    <p>Utilize our proven proficiencies in Shopify development services to boost your business top lines. We not only understand our client's requirements, and their target market, but also come up with viable opportunities that address their issues. Our Shopify developers from India practice customer-first attitude.</p>
<div className="word">
<ul className="digimonk-list">
					<li>
				
					
					<h3 className="font-weight-bold">Assured Transparency</h3>
					<p>When you opt for Drupal web development services, you get a blend of feature rich, scalable application</p>
					</li>
					<li>
				
					
					<h3 className="font-weight-bold">95% Well-Timed Delivery</h3>
					<p>Be it legacy migration or version upgrades; we can do it all and much more at TIS India</p>
					</li>
				</ul>

</div>
</MDBAnimation>
    </MDBCol>
    
</MDBRow>
         


</MDBContainer>

</section>



<section className="gray">
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 className=" mb-3">Highlights & Benefits</h2>
    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Access control and personalization</h3>
<p>Make your business relevant for today and ready for tomorrow with enterprise grade customer WordPress sites. These are scalable and offer total SEO compliance.</p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Application consolidation</h3>
<p>Get your site to cater to modern day business needs. We help with migration from legacy technologies and with version upgrades.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>End-user customization</h3>
<p>We help extend the site’s functionality with integration to APIs like Google, PayPal, IDX etc. This provides users with a richer UX.</p>
</div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>User-friendly interaction</h3>
<p>We take your creative work of art and convert it to a one-of-its-kind WordPress theme. We support PSD, XD, and PNG.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Branding and communicating across various channels</h3>
<p>Get total support for multisite development and network management. We handle every aspect from customization to bug fixing and plugin integration.</p>
            </div>
            </MDBAnimation>
        </MDBCol>


        

    </MDBRow>
    </MDBContainer>
</section>










<Footer/> 
            </div>
        )
    }
}
