import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBLink } from 'mdbreact'
export default class Python extends Component {
    render() {
        return (
            <div>
               <Navbar/>

               <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Python"
              name="Python"
              text=" Digimonk specializes in building high performing and elegant applications using the Python web framework.
              We are the partner of choice for several brands."
            />

<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Build Scalable and Robust Web Solutions with Python</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Digimonk specializes in building high performing and elegant applications using the Python web framework.
                 We are the partner of choice for several brands. Our expert <span className="cloud">Python developers</span> leverage Python to add better
                  functionality into 
                your website and web apps, making them more interactive and profitable.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/Python.jpg')} alt=""/>
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
                <img src={require('../images/python2.png')}/>
                </MDBAnimation>
            </MDBCol>

<MDBCol md="7">
<MDBAnimation reveal type="fadeInUp">
<div className="text-descp">
    <h2>Why Python Development Services</h2>
<p>Python is a multi-paradigm programming language that fully supports both object-oriented programming and structured programming. Python, in general, is a high-level programming language that can be used for developing desktop GUI software applications, web apps, and websites too.</p>
<p>The simple syntax rules of the programming language make it easier for the Python developer to keep the code base readable and application maintainable. Python’s large standard library is one of its greatest assets and provides developers a plethora of tools suited to many tasks.</p>
<p>As of 2018, the Python Package Index (PyPI), also known as the official repository for third-party Python software, had over 130,000 packages with a wide range of functionality, including GUIs, web frameworks, multimedia, databases, networking, test frameworks, automation, web scraping and text and image processing. There are several Python App Development integrations with several languages such as CPython, JPython, IronPython, PyObjc and Ruby Python.</p>
</div>
</MDBAnimation>
</MDBCol>

        </MDBRow>
    </MDBContainer>
</section>

<section>
<MDBContainer>

<MDBAnimation reveal type="fadeInUp">
      
            <h2>Advantages of the Python development environment</h2>
            <ul class="digimonk-list">
<li>Python is a multipurpose programming language and can be used for developing both desktop and web apps.</li>
<li>It comes with features to facilitate data analysis, and can thus prove useful in Artificial Intelligence (AI) and Natural Language Processing tasks.</li>
<li>Python reduces the cost of software development. Developers can use Python’s frameworks, libraries and development tools.</li>
<li>The syntax rules in Python allow developers to share concepts, without spending time in writing additional code.</li>
<li>They can use the Python development environment for other programming languages, emphasizing on reading the codes and adding special characters.</li>
<li>Python’s readable and clean code base helps maintain and update the software without putting extra time and effort.</li>
<li>Python runs on multiple platforms, with the same code. It has a varied and robust library, which is more comprehensive than other programming languages</li>
</ul>
            </MDBAnimation>
         


</MDBContainer>

</section>

<section className="gray">
    <MDBContainer>
    <MDBRow>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
   <img src={require('../images/python-coding.png')} alt=""/>
   </MDBAnimation>
        </MDBCol>

        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
   <h2>Best Python App Development Services in town!</h2>
   <p>Our expert team of Python developers have extensive experience in developing Python based solutions for a multitude of industries.</p>
   <h3>Our Python development services:</h3>
   <ul class="digimonk-list">
<li>Python Web Development</li>
<li>Python Mobile App Development</li>
<li>Python software development</li>
<li>Migrate legacy applications to Python</li>
<li>Python-based web crawler development</li>
<li>Migration of Python applications from 2.x to 3</li>
<li>Server and Network monitoring applications</li>
<li>Deep Learning-based decision-making applications</li>

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
