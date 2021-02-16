import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBLink } from 'mdbreact'

export default class PHP extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="PHP"
              name="PHP"
              text="We provide custom PHP web development services"
            />

{/* <div className="about-us linebg react-pt">
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h1>PHP Web Development Company</h1>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                We provide custom PHP web development services</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/php.png')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</div> */}


<section>
    <MDBContainer>
        <MDBRow>
            <MDBCol md="5">
            <MDBAnimation reveal type="fadeInUp">
                <img src={require('../images/spaceo-PHP1-5.png')}/>
                </MDBAnimation>
            </MDBCol>

<MDBCol md="7">
<MDBAnimation reveal type="fadeInUp">
<div className="text-descp">
    <h2 className="font-weight-bold">Working with Rockwell Softech for the Best in PHP Web Development</h2>
<p>PHP is wide used for developing dynamic websites and custom net applications. PHP has been used on twenty five million netsites and is put in in over one million web servers since its development within the Nineteen Nineties.</p>
<p>There demand for PHP net Development (using MySQL as Database) is in progress, because it aids in making a extremely interactive and dynamic net expertise. Furthermore, being an open source, it is a preferred choice of many programmers and users. PHP is maybe the foremost fashionable artificial language for making dynamic, sturdy and secure solutions.</p>
<h3 className="font-weight-bold">Our PHP/MySQL Development Service Help You with</h3>
<ul className="digimonk-list">
<li>End-to-end PHP development solutions, tailored made to suit the requirements of the individual projects</li>
<li>100% unique and quality rich custom PHP web development solutions &amp; proven development process that is cost efficient and real-time value</li>
<li>24/7 customer support, strong technical support with unified communication</li>
</ul>
</div>
</MDBAnimation>
</MDBCol>

        </MDBRow>
    </MDBContainer>
</section>

<section className="gray">
<MDBContainer>
<div className="mb-3 text-center">
<MDBAnimation reveal type="fadeInUp">
            <h2 className="font-weight-bold">Our Expertise in PHP Development</h2>
            </MDBAnimation>
          </div>
          <div className="php-develop" >
          <MDBAnimation reveal type="fadeInUp">
          <ul class="digimonk-list">
<li>Custom PHP Web Development</li>
<li>Open Source CMS Development</li>
<li>Corporate Website Development</li>
<li>Rapid PHP Application Development</li>
<li>Integrate Payment Gateway in PHP</li>
<li>PHP Web Development Framework</li>
<li>Web Services and API Integration</li>
<li>Dynamic Website and Portal Development</li>
<li>Maintenance &amp; Support</li>
</ul>
</MDBAnimation>
</div>
</MDBContainer>

</section>

<section>
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 class="font-weight-bold">Looking for Php Web Development Company in India?</h2>
    <p>Establishing Connections that make&nbsp;your business grow faster</p>
    <div className="btn-contact">
<MDBLink to="#" className="btn btn-red btn-rounded">Contact Us</MDBLink>
</div>
</MDBAnimation>
    </MDBContainer>
</section>

<Footer/> 
            </div>
        )
    }
}
