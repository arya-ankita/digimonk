import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class AuthenticationAPI extends Component {
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
                <h1>Authentication API</h1> 
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
<img src={require('../images/api1.png')} alt=""/>
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
         <p>Internal APIs are meant to be used by the system itself and are not intended to be consumed by client applications directly in the micro services architecture. Such APIs are often used to encapsulate and manage a set of shared ressources. For example, shared resource data that many parts of the system would need to access in a micro service architecture.</p>

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
<img src={require('../images/au-api.png')} alt=""/>
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
<h5>Strengthen Authentications & Reduce Fraud</h5>
<p>Instant API access to ongoing and accurate key phone number and user identity data attributes to help make better decisions about new registrations, user activity and fraud risks.
</p></div>
</div>
<div className="media">
<div className="media-left">
<div className="f-icon" data-number="2"><i className="fa fa-check fa-lg"></i></div>
</div>
<div className="media-body">
<h5>Verify Transactions</h5>
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
    <h2 className="is-h4 mb-5 text-center">Authentication APIs</h2>
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
