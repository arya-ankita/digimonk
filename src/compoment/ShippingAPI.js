import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class ShippingAPI extends Component {
    render() {
        return (
            <div>
              <Navbar/>

<div className="about-us linebg react-pt">
    <MDBContainer>
        <MDBRow className="d-flex align-items-center">
            <MDBCol md="6">
                <div className="about-banner">
                   <MDBAnimation type="fadeInUp">
                <h1>Shipping API</h1> 
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Ensuring the validity of your users is extremely important in preventing fraud and securing accounts from compromise. By attaching a verified phone number to an end-users' account that users' identity can easily be confirmed when they access their account from
                 a new browser or device or attempt a high-value transaction.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/shipping-api-integration.png')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</div>

<div className="react-box pt-5 pb-5 text-center">
<MDBContainer>
<MDBAnimation type="fadeInUp">

</MDBAnimation>
    <MDBRow>
        <MDBCol md="12">
        <MDBAnimation reveal type="fadeInUp">
            <h2 className="is-h4 mb-5">Why is Shipping API Integration a sensitive item for shipping purposes?</h2>
         <p>Shipping API Integration is very sensitive as if they are not shipped according to the customer requirements, software applications wouldn’t be ready on time. This can cause major IT companies to lose their stake in the markets.
Even after the shipping, it is important that one makes sure that the protocols have reached the right place or not.
We live in a time where there are a lot of notorious hackers and cyber criminals who hunt for such protocols so that they can design a fake application program and steal sensitive information.
Since there are different protocols for every application program that is designed, it is important that the shipping company you opt for makes sure that the shipping is done to the right place.</p>

          </MDBAnimation>
        </MDBCol>

      


    </MDBRow>
</MDBContainer>

</div>

<div className="onapi pt-5 pb-5 linebg">
<MDBContainer>

    <MDBRow className="d-flex align-items-center">

    <MDBCol md="6">
<MDBAnimation reveal type="fadeInUp">
<img src={require('../images/integrate-any-api-or-payment-gateway-in-your-app.png')} alt=""/>
</MDBAnimation>
</MDBCol>

        <MDBCol md="6">
        
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="is-h4 mb-4">MAIN BENEFITS</h2>
<div className="media-box text-left" id="feature">
<div className="media">
<div className="media-left">
<div className="f-icon" data-number="1"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Fully Managed API</h5>
<p>Instant API access to ongoing and accurate key phone number and user identity data attributes to help make better decisions about new registrations, user activity and fraud risks.
</p></div>
</div>
<div className="media">
<div className="media-left">
<div className="f-icon" data-number="2"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Rapid API Development</h5>
<p>Seamlessly authenticates users as they make account changes and high-value transactions such as accessing credit card details, transferring funds or making bill payments.
</p></div>
</div>
<div className="media">
<div className="media-left">
<div className="f-icon" data-number="3"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Protect End-User Accounts</h5>
<p>Secures accounts from compromise using voice-based OTPs on any phone type, on a global scale.</p>
</div>
</div>

<div className="media">
<div className="media-left">
<div className="f-icon" data-number="4"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Prevent Fake Users</h5>
<p>Secures accounts from compromise using voice-based OTPs on any phone type, on a global scale.</p>
</div>
</div>

<div className="media">
<div className="media-left">
<div className="f-icon" data-number="5"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Reach Landline Phones</h5>
<p>Secures accounts from compromise using voice-based OTPs on any phone type, on a global scale.</p>
</div>
</div>
</div>
                </MDBAnimation>
        </MDBCol>



    </MDBRow>


</MDBContainer>
</div>

<div className="apibenift react-box">
<MDBContainer>
    <h2 className="is-h4 mb-5 text-center">shipping APIs</h2>
    <MDBRow>
<MDBCol md="4">
<MDBAnimation reveal type="fadeInUp">
    <div className="apis">
        <img src={require('../images/in-built-payment-gateway.svg')} alt=""/>
        <h5 className="font-weight-bold">Auto Transfers</h5>
        <p>Auto transfer each individual payment any number of times to multiple vendors. </p>
    </div>
    </MDBAnimation>
</MDBCol>

<MDBCol md="4">
<MDBAnimation reveal type="fadeInUp">
    <div className="apis">
        <img src={require('../images/capital.svg')} alt=""/>
        <h5 className="font-weight-bold">Invoices</h5>
        <p>Send your vendors GST compliant invoices with our Invoice generator app. </p>
    </div>
    </MDBAnimation>
</MDBCol>

<MDBCol md="4">
<MDBAnimation reveal type="fadeInUp">
    <div className="apis">
   
        <img src={require('../images/manage-settlements.svg')} alt=""/>
        <h5 className="font-weight-bold">Settlements</h5>
        <p>Manage settlements with periodic & custom payouts – complete control over payouts.  </p>
    </div>
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
