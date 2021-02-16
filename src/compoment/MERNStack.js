import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class MERNStack extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="MERN-Stack"
              name="MERN-Stack"
              text="MERN is the right technology when you want to build an innovative web app with a stunning UI to capture your customer’s attention, and do so in the shortest span of time."
            />

<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Best MERN Stack Development Services</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                MERN is the right technology when you want to build an innovative web app with a stunning UI to capture your customer’s attention, and do so in the shortest span of time.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/API-Development.jpg')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</section>



<section className="gray">
<MDBContainer>
<MDBRow>
<MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
        <img src={require('../images/business-1839876_1920.jpg')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
    <h2>Why Choose MERN Stack?</h2>
    <p>With millions of customers demanding mobile apps, it is imperative that enterprises offer apps that are perfect in terms of technology, UI/UX, functionality, and utility.</p>
<p>The <a className="cloud">MERN Stack</a> has the right combination of technologies – MongoDB, ExpressJS, ReactJS, and NodeJS – to ensure that your apps stand out in the crowd and deliver the best to your customers.</p>
<ul class="digimonk-list">
<li><strong>Mongo DB</strong> – MongoDB is an open-source NoSQL database, which has a flexible structure and it supports various data formats.</li>
<li><strong>ExpressJS</strong> –&nbsp;ExpressJS is a flexible and minimal web app development framework that comes with a strong kit of features to create dynamic portal and APIs.</li>
<li><strong>ReactJS</strong> –<a className="cloud">&nbsp;ReactJS</a> is a widely-used, popular and comprehensive JavaScript framework, and is used to develop high-speed JavaScript-based isomorphic web apps.</li>
<li><strong>NodeJS</strong> –&nbsp;<a className="cloud">NodeJS</a>, an open-source, cross-platform app development platform is used for creating quick and scalable server-side applications.</li>
</ul>
</MDBAnimation>
    </MDBCol>
    
</MDBRow>
         


</MDBContainer>

</section>



<section>
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 className="mb-3">Digimonk is trusted by leaders for MERN Stack Development</h2>
    <p>Our team of multi-skilled app development experts is best equipped to offer custom LAMP development across the range of industries. Further, our excellent maintenance services enable clients to concentrate on their core business and focus on value-addition.</p>

    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Single Page Application Development</h3>
<p>We build single page applications that load a single HTML page and dynamically update that page as the user interacts with the app.</p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4 ">
<h3>Custom React Development</h3>
<p>We excel in developing React applications according to your specific requirement with custom templates, modules and libraries.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>React Web Application Development</h3>
<p>We use React to create dynamic, high-performance web apps for businesses. These apps match the smooth performance of native apps.</p>
</div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Real-time Application Development</h3>
<p>digimonk develops high-performance applications for fast moving businesses that want to engage their customers in real-time.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Custom Widget Development</h3>
<p>digimonk experts develop reusable user-interface components using the latest version of ReactJS.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        

    </MDBRow>
    </MDBContainer>
</section>





<div className="pb-5 pt-5 react-box">
    <MDBContainer>
   

    <MDBRow>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
            <img src={require('../images/fullstack.jpg')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
        <h5 className="font-weight-bold mb-3">Why Digimonk for MERN Stack Development</h5>
        <ul class="digimonk-list">
<li>The best <a className="cloud">MERN stack developers</a> in the country</li>
<li>Ability to create innovative MERN solutions for all types of businesses</li>
<li>Deep commitment to high quality</li>
<li>Our MERN Stack developers stay updated with the latest versions of all technologies</li>
<li>Focus on your business requirements and customization needs</li>
<li>World-class technical support and maintenance</li>
</ul>
            </MDBAnimation> 
        </MDBCol>

   
        

        
     

    </MDBRow>
    </MDBContainer>
</div>







<Footer/>
            </div>
        )
    }
}
