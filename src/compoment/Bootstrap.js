import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
export default class Bootstrap extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Bootstrap"
              name="Bootstrap"
              text="Bootstrap makes front-end web development faster and easier. Bootstrap easily and efficiently scales your websites and applications with a single code base."
            />


<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Bootstrap- the amazing HTML, CSS and JavaScript Framework</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Bootstrap makes front-end web development faster and
easier. Bootstrap easily and efficiently scales your
websites and applications with a single code base.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/bootstrap_banner_screen.png')} alt=""/>
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
        <img src={require('../images/bootstrap-icon.png')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
    <MDBCol md="7">
    <MDBAnimation reveal type="fadeInUp">
    <h2>All about Bootstrap</h2>
    <p>t is a free open-source collection of tools for creating websites and web applications. It is a front-end framework that acts as an interface for the user.</p>
<p>Web applications developed using Bootstrap framework are mobile-friendly, thus, providing easy access to websites or applications.</p>
<ul className="digimonk-list">
    <li>SaSS instead of LESS.</li>
    <li>New Grid Tier for small screens</li>
    <li>Relative CSS Module</li>
    <li>Bootstrap powered-card elements</li>
</ul>
</MDBAnimation>
    </MDBCol>
    
</MDBRow>
         


</MDBContainer>

</section>








<section>
    <MDBContainer>
   

    <MDBRow>
       
        <MDBCol md="7">
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="mb-3">What do we do?</h2>
     
        <p>Digimonk has an exceptionally talented team that specializes in Bootstrap. They have a
highly qualified team with several years of experience who works in the following
domains:</p>
<p>Creating responsive templates in bootstrap using HTML, Joomla, WordPress, Drupal</p>

<ul className="digimonk-list">
    <li>Convert normal CSS to Bootstrap Framework</li>
    <li>Modifying existing bootstrap templates into a more responsive one</li>
    <li>Bootstrap Migration Services</li>
</ul>
            </MDBAnimation> 
        </MDBCol>
        <MDBCol md="5">
        <MDBAnimation reveal type="fadeInUp">
            <img src={require('../images/bootstrap_wt_screen.png')} alt=""/>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="12" className="pt-3">
        <MDBAnimation reveal type="fadeInUp">
        
        <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>


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
