import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
export default class JSP extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="JSP"
              name="JSP"
              text="This article discusses the JSP Architecture and processing of a Java Server."
            />


<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>JSP Developer</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                This article discusses the JSP Architecture and processing of a Java Server. It describes phases like conversion, translation, and execution of a Java server page with interactive diagrams. A complete flow diagram (at last) represents various stages i.e., requests from the web client to the response from the web server.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/JSP-Architecture.jpg')} alt=""/>
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
        <img src={require('../images/JSP-architecture-MVC-Controller.jpg')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="7">
    <MDBAnimation reveal type="fadeInUp">
    <h2>Model-View-Controller Framework</h2>
    <p>In Web applications of Model2 type, requests are in reference to a single URL, a servlet also called as controller through view. This servlet takes a look at the path information of the request to see what it needs to do. For e.g., there may be a complete table of names and actions of JSP pages so that each one of them can be handled. These handlers are the model of the web application. They have the access to databases or perform other calculations. JSP pages (the view) to present the output</p>
</MDBAnimation>
    </MDBCol>
    
</MDBRow>
         


</MDBContainer>

</section>








<section>
    <MDBContainer>
   

    <MDBRow>
        <MDBCol md="5">
        <MDBAnimation reveal type="fadeInUp">
            <img src={require('../images/jsp-processing-4-638.jpg')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="7">
        <MDBAnimation reveal type="fadeInUp">
        <h2>Advantages of MVC</h2>
     
        <ul class="digimonk-list">
<li>Firstly Its navigation is centrally controlled as the controller is the interface between view and model.</li>
<li>Secondly, Model 1 is easier to implement as compared to Model 2 architecture, but the former doesn’t scale. Model 2 scales much better as the websites need to be interactive and easy to handle.</li>
<li>Thirdly, MVC is easy to test.</li>
<li>It’s easy to maintain.</li>
<li>Easy to extend as it allows specialists to write different parts of the application. Java programmers can write the model and controller, and User interface specialists can write JSP pages that do nothing but display output.</li>

</ul>
            </MDBAnimation> 
        </MDBCol>

        <MDBCol md="12" className="pt-3">
        <MDBAnimation reveal type="fadeInUp">
        
        <p>In Web applications of Model2 type, requests are in reference to a single URL, a servlet also called as controller through view. This servlet takes a look at the path information of the request to see what it needs to do. For e.g., there may be a complete table of names and actions of JSP pages so that each one of them can be handled. These handlers are the model of the web application. They have the access to databases or perform other calculations. JSP pages (the view) to present the output</p>
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
