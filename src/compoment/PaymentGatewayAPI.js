import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class PaymentGatewayAPI extends Component {
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
                <h1>Payment Gateway API</h1> 
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Digimonk is the easiest Payment Gateway solution for any developer. It can be integrated on any website with any stack. We have Simple Payment APIs with detailed documentation and SDKs for all major platforms. With responsive developer support, 
                integrating Instamojo is a butter-smooth experience!</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/banner-15.jpg')} alt=""/>
</MDBAnimation>
</MDBCol>
            
        </MDBRow>
    </MDBContainer>
</div>

<div className="react-box pt-5 pb-5">
<MDBContainer>
<MDBAnimation type="fadeInUp">
<h2 className="is-h4 mb-5 text-center">Free Payments</h2>
</MDBAnimation>
    <MDBRow>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
          <div className="onside">
<div className="leftimg">

    <img src={require('../images/on-your-website-1.svg')} alt=""/>
</div>
<div className="onsite-text">
    <h5 className="font-weight-bold">On your website</h5>
    <p>Start accepting payments on your website with our API or libraries.</p>
</div>

          </div>
          </MDBAnimation>
        </MDBCol>

        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
          <div className="onside">
<div className="leftimg">

    <img src={require('../images/on-your-mobile-app.svg')} alt=""/>
</div>
<div className="onsite-text">
    <h5 className="font-weight-bold">In your mobile app</h5>
    <p>Integrate our Android SDK to collect payments in your app.</p>
</div>

          </div>
          </MDBAnimation>
        </MDBCol>


    </MDBRow>
</MDBContainer>

</div>

<div className="onapi pt-5 pb-5 linebg">
<MDBContainer>
<MDBAnimation reveal type="fadeInUp">
    <h2 className="is-h4 mb-4">One API.<br/>
All Payment Methods</h2>
</MDBAnimation>
    <MDBRow>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInUp">
            <p>We provide a wide range of payment options – Credit/Debit cards, Netbanking, EMI, Wallets, and UPI. We support Rupay, 
                VISA, MasterCard, and AMEX cards. You can choose our APIs and SDKs, or jump straight to our plugins.</p>
                <img src={require('../images/cards.webp')} className="mt-3 opicity"/>
                </MDBAnimation>
        </MDBCol>

<MDBCol md="5" className="offset-md-1">
<MDBAnimation reveal type="fadeInUp">
<img src={require('../images/one-API-all-payment-modes.jpg')} alt=""/>
</MDBAnimation>
</MDBCol>

    </MDBRow>

<MDBRow className="mt-5 mb-5 d-flex align-items-center">
    <MDBCol md="6">
    <MDBAnimation reveal type="fadeInUp">
    <img src={require('../images/best-payment-gateway-for-marketplace.jpg')} alt=""/>  
    </MDBAnimation>
    </MDBCol>
    <MDBCol md="5" className="offset-md-1">
    <MDBAnimation reveal type="fadeInUp">
        <h2 className="is-h4 mb-4">
        Best Payment Gateway for Marketplace/Franchise Business Models
        </h2>
        <p>We provide APIs specially built for Marketplaces. You can add multiple beneficiaries, split payments and settle them 
            to individual beneficiaries, and hold or release funds as per fulfilment. </p>
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
