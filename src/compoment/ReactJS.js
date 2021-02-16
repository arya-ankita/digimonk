import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'
export default class ReactJS extends Component {
    render() {
        return (
            <div>
                 <Navbar/>

                 <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="React-JS"
              name="React-JS"
              text="ReactJS is used for developing web apps, and with its advanced features it has fast-gained popularity with JavaScript."
            />

<section>
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h2>Top ReactJS Development Services</h2>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                ReactJS is used for developing web apps, and with its advanced features it has fast-gained popularity with JavaScript.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/react.png')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</section>


<section className="gray">
    <MDBContainer>
        <MDBRow>
            <MDBCol md="3" className="text-center mt-md-n3 px-5 pb-4">
            <MDBAnimation reveal type="fadeInUp">
                <img src={require('../images/React-js-e1583734773184.jpg')}/>
                </MDBAnimation>
            </MDBCol>

<MDBCol md="7">
<MDBAnimation reveal type="fadeInUp">
<div className="text-descp">
    <h2>Why You Should Consider ReactJS?</h2>
<p>
ReactJS is an open-source JavaScript library meant for building user interfaces specifically for single page apps. It’s used for handling view layer for web and mobile apps.
</p>
<p>This allows React js developers to create reusable UI components and develop large web apps. ReactJS can also be used in combination with other JavaScript libraries or frameworks, such as Angular JS in MVC.</p>
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
    <h2>ReactJS Features</h2>
    <ul class="digimonk-list">
<li>ReactJS uses the JSX template, which is a simple template that can replace the regular JavaScript. It allows HTML quoting, using the HTML tag syntax to render subcomponents.</li>
<li>ReactJS creates an in-memory data structure cache which computes the changes made and then updates the browser.</li>
<li>This enables the developer to code as if whole page will render on each change, whereas the React library only render components that actually change.</li>
<li>ReactJS also allows the developer to create components in the code, which can be reused whenever needed.</li>
<li>ReactJS components can be understood and rendered easily without having to trace the program flow.</li>
<li>ReactJS can be rendered on the server directly thereby making the development process faster and cost effective for SEO</li>
</ul>
</MDBAnimation>
    </MDBCol>
    <MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
        <img src={require('../images/angular-1.png')} alt=""/>
        </MDBAnimation>  
    </MDBCol>
</MDBRow>
         


</MDBContainer>

</section>


<section className="gray">
    <MDBContainer>
        <MDBRow>
            <MDBCol md="4" className="text-center mt-md-n3 px-5 pb-4">
            <MDBAnimation reveal type="fadeInUp">
                <img src={require('../images/react-4.png')}/>
                </MDBAnimation>
            </MDBCol>

<MDBCol md="7">
<MDBAnimation reveal type="fadeInUp">
<div className="text-descp">
    <h2>Advantages of Developing in ReactJS</h2>
    <ul class="digimonk-list">
<li>ReactJS is easy to learn even for newbie developers, who need only a basic knowledge of CSS and HTML</li>
<li>ReactJS can also be used to create mobile apps using React Native.</li>
<li>ReactJS is supports reusability and cross-platform app development.</li>
<li>ReactJS apps are super easy to test. React views can be treated as functions of the state, so we can manipulate the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.</li>
</ul>
</div>
</MDBAnimation>
</MDBCol>

        </MDBRow>
    </MDBContainer>
</section>

<section>
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
    <h2 className="mb-3">Our ReactJS Development Services</h2>

    </MDBAnimation>

    <MDBRow>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Web App Development</h3>
<p>We understand your business specific requirements and work closely with you to leverage all the benefits of AngularJS technology.</p>
            </div>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Front-End Development</h3>
<p>The AngularJS apps we create come with two-way binding to allow for automatic synchronization of data between the model and view components.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Plugin Development</h3>
<p>We make the best use of Directives to invent new HTML syntax and create reusable components to hide complex DOM structure, CSS and behavior.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Mobile App Development</h3>
<p>Advance routing in AngularJS helps to develop extraordinary single page applications that create a delightful user experience.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Migration Services</h3>
<p>We help you create real-time applications such as IM or Chat apps, cloud storage, Todo, etc. using AngularFire or Socket. Our experts integrate such apps with NodeJS, Grunt and Bower to enhance performance and user experience.</p>
            </div>
            </MDBAnimation>
        </MDBCol>

        <MDBCol md="4">
        <MDBAnimation reveal type="fadeInUp">
            <div className="tech-service-block commin-height mb-4">
<h3>ReactJS Consulting</h3>
<p>Our AngularJS experts make sure that your website matches your vision.</p>
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
            <img src={require('../images/reactjs-2.png')} alt=""/>
            </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="mb-3">Best ReactJS Development Company</h2>
        <ul class="digimonk-list">
<li>Dedicated resources at cost-effective rates</li>
<li>Project manager to keep you updated about the project</li>
<li>Adherence to budget and deadline guidelines</li>
<li>We serve enterprises around the world</li>
<li>Deep focus on quality and customer satisfaction</li>
<li>Complete transparency and privacy</li>
<li>We ensure your website/app satisfies all GDPR guidelines</li>
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
