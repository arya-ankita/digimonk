import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBCol, MDBContainer, MDBRow, MDBAnimation } from 'mdbreact'

export default class GoogleAPIs extends Component {
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
                <h1>Google APIs</h1> 
                </MDBAnimation> 
                <MDBAnimation type="fadeInUp">
                <p>
                Bringing more flexibility & control to marketplace owners. Split and disburse payments,
                 charge commission fees, add custom payout rules & so much more.</p>
</MDBAnimation>
                </div>
            </MDBCol>

<MDBCol>
<MDBAnimation type="fadeInUp">
<img src={require('../images/banner-30-1.jpg')} alt=""/>
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
         <p>With Marketplace APIs, you can now fully automate payments on your marketplace. No nodal accounts.<br/>
          No infra setup. No maintenance charges.</p>

          </MDBAnimation>
        </MDBCol>

      


    </MDBRow>
</MDBContainer>

</div>

<div className="onapi pt-5 pb-5 linebg">
<MDBContainer>

    <MDBRow>

    <MDBCol md="6">
<MDBAnimation reveal type="fadeInUp">
<img src={require('../images/integrate-any-api-or-payment-gateway-in-your-app.png')} alt=""/>
</MDBAnimation>
</MDBCol>

        <MDBCol md="6">
        
        <MDBAnimation reveal type="fadeInUp">
        <h2 className="is-h4 mb-4">Features<br/>
Of Google API</h2>
            <p>Fully customisable API that offers more control & flexibility to your Marketplace’s payment processes.</p>
            <ul class="digimonk-list">
<li>Allows third party vendors to sell products on the marketplace platform</li>
<li>Auto creates and manages vendor accounts via API</li>
<li>Collects payment from the end customers on behalf of the vendors</li>
<li>Split and distribute payments between multiple accounts/vendors</li>
<li>Auto calculates marketplace owner’s commission on every product sold 
</li>
</ul>
                </MDBAnimation>
        </MDBCol>



    </MDBRow>


</MDBContainer>
</div>

<div className="apibenift react-box">
<MDBContainer>
    <h2 className="is-h4 mb-5 text-center">Benefits Of Google APIs</h2>
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
