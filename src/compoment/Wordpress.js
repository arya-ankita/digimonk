import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
export default class Wordpress extends Component {
    render() {
        return (
            <div>
                 <Navbar/>

                 <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Wordpress"
              name="Wordpress"
              text="With a blend of creativity and using advanced technology, we offer WordPress development services that take your business to the next level and offer competitive growth."
            />

{/* <section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h1>Wordpress
Development</h1>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                With a blend of creativity and using advanced technology, we offer WordPress development services that take your business to the next level and offer competitive growth.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/wordpress-banner-right.png')} alt=""/>
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
        <img src={require('../images/wordpress.jpg')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
    <h2>WordPress Customization</h2>
    <p>We enable rich, robust, customized, and scalable WordPress website design that drives extensive growth. We have a team of proficient WordPress developers that bring their expertise and innovative technologies to create unmatched and highly customized websites to empower your web identity.</p>
<div className="word">
<ul className="digimonk-list">
					<li>
				
					
					<h3>100% transparency</h3>
					<p>Right from designing to successful implementation, we maintain complete transparency with our clients and provide cutting-edge solutions.</p>
					</li>
					<li>
				
					
					<h3>95% timely delivery</h3>
					<p>We are a WordPress Design Company in India that provides on-time delivery, measurable results, and guaranteed ROI.</p>
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
    <h2 className="mb-4">Top Notch WordPress Expertise</h2>
    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Custom WordPress Development</h3>
<p>Make your business relevant for today and ready for tomorrow with enterprise grade customer WordPress sites. These are scalable and offer total SEO compliance.</p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>WordPress migration and upgrade</h3>
<p>Get your site to cater to modern day business needs. We help with migration from legacy technologies and with version upgrades.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Third party integration</h3>
<p>We help extend the site’s functionality with integration to APIs like Google, PayPal, IDX etc. This provides users with a richer UX.</p>
</div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>PSD to WordPress conversion</h3>
<p>We take your creative work of art and convert it to a one-of-its-kind WordPress theme. We support PSD, XD, and PNG.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Multisite development</h3>
<p>Get total support for multisite development and network management. We handle every aspect from customization to bug fixing and plugin integration.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4" className="mb-4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block">
<h3>Themes and Plug-ins</h3>
<p>Enrich the visual appeal and functionality of the suite with 100% custom themes and plug-ins. These give you an unmatched competitive edge.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

    

    </MDBRow>
    </MDBContainer>
</section>





<section>
    <MDBContainer>
   

    <MDBRow>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
            <img src={require('../images/wordpress-brands-left.png')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
        <h3 className="font-weight-bold mb-3">Get Holistic Support from an Experienced WordPress development company</h3>
        <p>We offer a complete suite of value-added WordPress services that set us apart in terms of quality, performance, and value. Right from a small static website to a comprehensive e-commerce portal, we can do it all.</p>
            <h3>Why TIS India is your first choice?</h3>
            <ul className="digimonk-list">
					<li>We are obsessed with Quality.</li>
					<li>We offer unmatched customer service with cutting-edge expertise.</li>
					<li>We are experienced in developing top-notch WordPress web solutions and WordPress blog design services.</li>
					<li>You get to hire WordPress Developers that are experienced and enthusiastic about the CMS.</li>
					<li>We are one-stop WordPress Design Company in India that creates engaging, purposeful, and creative web solutions.</li>
					<li>We are WordPress Development Company in India with a passion for creativity and innovation.</li>
					</ul>
            </MDBAnimation> 
        </MDBCol>

   
        

        
     

    </MDBRow>
    </MDBContainer>
</section>


<section className="gray">
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 className= "mb-3">Enable Business Acceleration With WordPress</h2>
    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Search Engines Love WordPress Site</h3>
<p>The code behind WordPress site is very clean and simple. So, search engines can easily read and index the website’s content. This makes WordPress sites to rank high in search engines.</p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>In-built Blog that is ready to go</h3>
<p>As WordPress is a content management system, it has various features such as a built-in blog that makes publishing content very easy. Blogging capabilities are built-in and easy to integrate with WP.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>WordPress is Cost Effective</h3>
<p>Creating a website with WordPress won’t cost you an arm and a leg. WordPress website design is extremely cost-effective. Even its upkeep and maintenance cost are relatively inexpensive.</p>
</div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Open Source Content Management</h3>
<p>WordPress is an open source CMS based on PHP and MySQL. This CMS offers open source code which is available for everyone who needs to utilize it or customize it.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>WordPress Sites are Responsive</h3>
<p>In today’s technological era, responsive web design is no longer an option but a must. With the use of WordPress, you will get the benefit of responsive web technology automatically.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>Plugins Extend Functionality</h3>
<p>WordPress has all the elements that needed to develop a basic site but if you want more specialized functions then you can purchase it and install custom-plugins from third-party developers.</p>
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
