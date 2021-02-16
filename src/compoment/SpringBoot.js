import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
export default class SpringBoot extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Spring-Boot"
              name="Spring-Boot"
              text="Spring Boot Framework is used for developing web apps, and with its advanced features it has fast-gained popularity with JavaScript."
            />


<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Spring Boot Framework</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Spring Boot Framework is used for developing web apps, and with its advanced features it has fast-gained popularity with JavaScript.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/spring_boot-1.png')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</section>



<section className="gray">
<MDBContainer>
<MDBRow>
<MDBCol md="5">
    <MDBAnimation reveal type="fadeInUp">
        <img src={require('../images/HTR-Spring-01.png')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="7">
    <MDBAnimation reveal type="fadeInUp">
    <h2>Our list of advanced SpringBoot features include</h2>
    <ul className="digimonk-list">
	<li>
	Stand-alone spring applications
	</li>
	<li>
	Providing opinionated 'starter' dependencies
	</li>
	<li>
	Production-ready tools
	</li>
	<li>
	Quick standalone mode
	</li>
	<li>
	Simpler dependency management
	</li>
</ul>
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
            <img src={require('../images/spring-boot.jpg')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="mb-3">Hire Spring Boot Developer</h2>
        <p>
        Digimonk also uses Hibernate annotation on top of standardized Java persistence annotations, in a bid to utilize all Hibernate features. The database of Hibernate is strong and secure which can be used in a number of ways. We offer to hire Hibernate developers from us who can handle mapping Java class to the DB table using specialized Hibernate annotations or XML files and use its APIs to do the necessary functions among other things
        </p>
        <ul class="digimonk-list">
<li>Spring MVC</li>
<li>MySQL</li>
<li>Eclipse</li>
<li>Java</li>
<li>Bootstrap</li>

</ul>
            </MDBAnimation> 
        </MDBCol>

        <MDBCol md="12" className="pt-3">
        <MDBAnimation reveal type="fadeInUp">
        
        <p>Reach out to digimonk, a leading ReactJS development company, to revolutionize your brand with high-quality ReactJS
             development services. Mobinius offers you deep expertise in ReactJS web development and ReactJS app development,
              delivered by a team of highly-skilled ReactJS Developers with unmatched expertise in building progressive and dynamic 
              web apps 
            using ReactJS.</p>
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
