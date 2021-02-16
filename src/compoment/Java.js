import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBLink } from 'mdbreact'
export default class Java extends Component {
    render() {
        return (
            <div>
               <Navbar/>

               <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="Java"
              name="Java"
              text="Digimonk is recognized for its expertise in Java development. The SNS Java consulting team and software development outsourcing services provide full support at every stage of the project from architecture to implementation. We provide design and development services to utilize efficiently the services available from Java application servers and the J2EE framework."
            />




<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Java/J2ee Software Development</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Digimonk is recognized for its expertise in Java development. The SNS Java consulting team and software development outsourcing services provide full support at every stage of the project from architecture to implementation. We provide design and development services to utilize efficiently the services available from Java application servers and the J2EE framework, including Struts, Servlets and Java Server Pages (JSPs), Enterprise Java Beans (EJBs), Java’s Messaging Services and JDBC.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/java.png')} alt=""/>
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
    <h2>J2EE & J2EE Design Patterns</h2>
<p>Appzmine Tech gives Core and Advanced Java Training in Nagpur. We have a group of experienced Java experts who enable our students to learn Java with the assistance of Live Base Projects. The object-oriented, class-based form of Java has made it a standout amongst the most famous programming languages and the demand of experts with certification in Advanced Java training is at an unequaled high. By helping our students understand the basics and advanced ideas of Java, we set them up for an effective programming career.</p>
</div>
</MDBAnimation>
</MDBCol>

        </MDBRow>
    </MDBContainer>
</section>

<section>
<MDBContainer>

<MDBAnimation reveal type="fadeInUp">
      
            <h2>Student Will Learn</h2>
            <p>Students taking this course will have hands-on experience learning fundamental object-oriented ideas, for example, inheritance, encapsulation, and abstraction. They figure out how to make and utilize simple Java classes containing arrays, loops, and conditional constructs. They also learn to use and manipulate object references and to write simple error handling code. The course provides a solid understanding of what the Java SE 8 platform is and how it is used in real-world applications.</p>
            <ul className="digimonk-list">
<li>the advantages of using the Java platform</li>
<li>How to code, compile and run standalone object-oriented Java programs</li>
<li>Designing and writing Java classes suitable for a given application domain</li>
<li>Writing robust Java software that gracefully handles run-time problems</li>
<li>Coding Java programs using correct syntax and block structure</li>
<li>Using Java to read from and write to files</li>
<li>Manipulating files and directories in a platform-neutral way</li>
<li>Writing multithreaded software</li>
<li>Writing Java client/server software using TCP/IP networking</li>
<li>Accessing and updating relational databases from Java software</li>
<li>Writing and running servlets and JSPs</li>
<li>Creating graphical user interfaces for Java software</li>
<li>Writing web-based applications in Java</li>
<li>How to download, install and use the tools in the Java Development Kit</li>
</ul>
            </MDBAnimation>
         


</MDBContainer>

</section>

<section className="gray">
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2>Prerequisites for JAVA/J2EE Programmer Training course</h2>
    <p>Previous experience with basic coding. If you have never used any programming languages please consider attending our web design course Knowledge of basic programming concepts such as loops, methods, class, inheritance, and arrays. If you are not familiar with these concepts please first attend our Introduction to Programming C/C++ Course.</p>
    <h3>Training from professional JAVA developers</h3>
    <p>Appzmine developer has been implementing professional JAVA solutions across a range of Desktop app and web-based application for many years. Those consultants write and teach our JAVA training courses, so their experience directly informs course content</p>
    <h3>Real-time Practice and Live Projects.</h3>
    <p>Our Java is designed to get you started in Desktop app as well as web application development. We work on industry related projects in this JAVA. These projects help you create your JAVA portfolio.</p>
    </MDBAnimation>
    </MDBContainer>
</section>

<Footer/>   
            </div>
        )
    }
}
