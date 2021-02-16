import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import  { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class MEANStack extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="MEAN-Stack"
              name="MEAN-Stack"
              text="MEAN is a full-stack JavaScript solution that helps us develop fast, robust, and scalable web applications."
            />

<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Top MEAN Stack Development Services</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                MEAN is a full-stack JavaScript solution that helps us develop fast, robust, and scalable web applications.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/mearn-stack.jpeg')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</section>



<section className="gray">
<MDBContainer>
<MDBRow>
<MDBCol md="4">
    <MDBAnimation reveal type="fadeInUp">
        <img src={require('../images/angularjs1.png')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="8">
    <MDBAnimation reveal type="fadeInUp">
    <h2>Why You Should Pick MEAN Stack Development?</h2>
    <p>MEAN is a collection of JavaScript-based technologies that includes MongoDB, ExpressJS, AngularJS and NodeJS.</p>
<p>Being lightweight and efficient, the MEAN stack has unleashed a new era of developing robust, swift and scalable web applications using its strong design patterns such as Model/View/Controller (MVC). It allows to develop the most complex projects in short span of time and deploy them faster than ever by using MEAN components.</p>
<p>MEAN Stack is the future of web and app development and using the above technologies MEAN can offer end-to-end web app solutions from client to server to database</p>
</MDBAnimation>
    </MDBCol>
    
</MDBRow>
         


</MDBContainer>

</section>



<section>
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 className="mb-3">We’re the Best MEAN Stack Development Company</h2>
    <p>We leverage the power of MEAN to develop lightweight and high-performance websites including social networking portals, fast and scalable APIs, gaming and video streaming platforms, as well as e-commerce portals.</p>

    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>MongoDB Development</h3>
<p>We’re a trusted<a className="cloud"> MongoDB development company</a> and have developed several apps using MongoDB’s dynamic schema that has the ability to index data quickly along with auto-sharing. </p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block  commin-height mb-4">
<h3>ExpressJS Development</h3>
<p>ExpressJS is a minimal, flexible and quick NodeJS web app development framework that comes with a wide-range of features for both web and mobile apps.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block  commin-height mb-4">
<h3>AngularJS Development</h3>
<p class="text-subpara">We have a rich development experience using <a className="cloud">AngularJS</a> and have built engaging and intuitive front-end interfaces with MVC capability and restful APIs.</p>
</div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block  commin-height mb-4">
<h3>NodeJS Development</h3>
<p><a className="cloud">NodeJS</a> MDBAnimation. has asynchronous event-driven JavaScript programming, which allows us to create infinitely scalable, lightweight and high-performance applications with strong social and video integrations.</p>
            </div>
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
            <img src={require('../images/fullstack.jpg')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="mb-3">Why choose Digimonk for MEAN Stack Development?</h2>
        <p>Web and app development experts at Mobinius have unparalled expertise in MEAN Stack development team.</p>
        <ul class="digimonk-list">
<li>Global customer base in 5+ countries</li>
<li>150+ projects delivered successfully</li>
<li>Google Certified Partner</li>
<li>Agile methodology that ensures timely completion of the projects</li>
<li>Faster and scalable web apps with MEAN Stack App development services</li>
<li>Dedicated team of<a className="cloud"> MEAN Stack developers</a> for maintenance and support</li>
<li>Flexible engagement models to suit various business requirements</li>
<li>Adherence to the highest quality standards</li>
<li>On-time and within budget MEAN Stack development project delivery</li>
<li>Our scalable MEAN Stack web solutions offer seamless integration with other codes and APIs</li>
</ul>
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
