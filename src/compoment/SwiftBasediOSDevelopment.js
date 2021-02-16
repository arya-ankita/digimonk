import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import InnerBannerTop from "./InnerBannerTop";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class SwiftBasediOSDevelopment extends Component {
    render() {
        return (
            <div>
               <Navbar/>

               <InnerBannerTop
              breadcrumbname="Home"
              breadcrumactive="Swift-Based-iOS-Development"
              
              name="Swift-Based-iOS-Development"
              text="Innovation is a virtue of the bold. And we strive all our courage to be brave and bold."
            />

 {/* <div className="about-us linebg react-pt">
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h1>iOS App Development</h1>
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Innovation is a virtue of the bold. And we strive all our courage to be brave and bold.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/ios_header_graphic.png')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</div>  */}


<section className="pt-5 pb-5 linebg">
    <MDBContainer>
        <MDBRow>
            <MDBCol md="6">
            <MDBAnimation reveal type="fadeInUp">
                <img src={require('../images/ios_what_do_graphic.png')}/>
                </MDBAnimation>
            </MDBCol>

<MDBCol md="6">
<MDBAnimation reveal type="fadeInUp">
<div className="text-descp">
    <h2>WHY iOS APPS?</h2>
<p>With more than 2.5 billion smartphone users around the world, this world is craving for high performance phones and secure devices to store and access data. Think of the pictures you take, passwords you save, and scores of other data such as your bill details, your banking and purchasing activities. That’s where iOS apps come into picture – it is defined for its top performing operating system which is the most secure and unquestionably reliabl</p>
<p>But where do we come into picture? Why not choose any other iOS app development services provider? Because we have also set the highest benchmark for select-services for which we are most loved!</p>
</div>
</MDBAnimation>
</MDBCol>

        </MDBRow>
    </MDBContainer>
</section>

<section>
<MDBContainer>
<div className="mb-5 text-center">
            <h2 className="font-weight-bold">iPhone App Development Services</h2>
            
          </div>
    <MDBRow>
    
      <MDBCol md="6">
      <MDBAnimation reveal type="fadeInUp">
      <div className="icon_box style_1 icon_left clearfix">
							<div className="icon font-color_base"><i className="fa fa-lock-open"></i></div>
						<div className="icon_text">
									<h5 className="font-color_base no_stripe"> Provides High Security</h5>
								<p>No more worrying about your banking apps from your device. iOS provides a strong shield for virus and malware, making it the perfect choice for business app development.</p>
			</div>
		</div>
        </MDBAnimation>
      </MDBCol>
      
      <MDBCol md="6">
      <MDBAnimation reveal type="fadeInUp">
      <div className="icon_box style_1 icon_left clearfix">
							<div className="icon font-color_base" ><i className="fa fa-smile-o"></i></div>
						<div className="icon_text">
									<h5 className="font-color_base no_stripe">Great Consumer Experience</h5>
								<p>Apple provides perfect hardware, excellent customer support, and flawless software development interface: the recipe of great user experience.</p>
			</div>
		</div>
        </MDBAnimation>
     </MDBCol>
      
     <MDBCol md="6">
     <MDBAnimation reveal type="fadeInUp">
      <div className="icon_box style_1 icon_left clearfix">
							<div className="icon font-color_base"><i className="fa fa-mobile"></i></div>
						<div className="icon_text">
									<h5 className="font-color_base no_stripe">Tech-Savvy Audience</h5>
								<p>iPhone has always been an attractive device for Tech-Savvy audiences. With a well developed iPhone app, companies can enhance their reach for the smartest of the lot.</p>
			</div>
		</div>
        </MDBAnimation>
      </MDBCol>
      
      <MDBCol md="6">
      <MDBAnimation reveal type="fadeInUp">
      <div className="icon_box style_1 icon_left clearfix">
							<div className="icon font-color_base" ><i className="fa fa-exchange-alt"></i></div>
						<div className="icon_text">
									<h5 className="font-color_base no_stripe">Higher ROI</h5>
								<p>iOS apps have the ability to cater to the investment-worthy clients and increase the reach of business with enhanced value.</p>
			</div>
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
