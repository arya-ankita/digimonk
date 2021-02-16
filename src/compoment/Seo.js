import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdbreact';
import Footer from './Footer';
import Navbar from './Navbar'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Seo extends Component {
    render() {
        return (
            <>
         
                <Navbar/>
                <div className='sectopgap24'>
                   <MDBContainer>
                      
                       <MDBAnimation type="fadeInUp">
                      
                         <MDBView className='overlay3'>
                       <img src={require('../images/seo.png')} alt=""/>
                     
                       <MDBMask  className='flexwebcdev-10'>
                         <MDBRow className="lastsense-10" >
                         <h1 className='webcdev-10'>Search Engine Optimization</h1>
                         <p className='paracwebdev-10'>Improve your search ranking with on-page and off-page<br/> optimization tactics that actually work.</p>
                       </MDBRow>
                       </MDBMask>
                       </MDBView>
                      
                    
                       </MDBAnimation>
                       </MDBContainer>
                       
                       
 <MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
    <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">We integrate SEO as a critical part of 
our digital marketing strategies keeping in mind the target geography, 
target device and target audience for your business. With over 500 updates to Google's
 search algorithm every year, it is all about managing moving parts. Our dedicated team of
 SEO experts aim to formulate a holistic approach to help you rank better on search.</p>
    </MDBAnimation>
   
</MDBRow>

<MDBRow className="devweb-14">
<MDBAnimation reveal type="fadeInUp">
    <h1>Our Process</h1>
    
  
</MDBAnimation>
    
    </MDBRow>
</MDBContainer> 



<MDBContainer>
<MDBRow >
    <MDBCol md={6} className="seosec-10">
    <MDBCardTitle className='headsubsdi-2 ssd'>Keyword Research and Mapping</MDBCardTitle>
      <p class="card-text">Our SEO experts conduct a thorough research and analysis to ensure the inclusion of right keywords in the overall SEO strategy. This ensures improved rankings for your website’s search results.
     </p>
    </MDBCol>
    <MDBCol md={6} className="seosec-2">
    <img src={require('../images/seo-1.png')} alt=""/>
                     
    </MDBCol>

</MDBRow >
<div className='secsec-2'>
<MDBRow >
    <MDBCol md={6} className="seosec-2">
    <img src={require('../images/seo-2.png')} alt=""/>
    </MDBCol>
    <MDBCol md={6} className=" seosec-11">
   
    <MDBCardTitle className='headsubsdi-2 ssd1 '>Keyword Research and Mapping</MDBCardTitle>
      <p class="card-text">Our SEO experts conduct a thorough research and analysis to ensure the inclusion of right keywords in the overall SEO strategy. This ensures improved rankings for your website’s search results.
     </p>
    </MDBCol>
</MDBRow>
</div>


<MDBRow >
    <MDBCol md={6} className="seosec-10">
    <MDBCardTitle className='headsubsdi-2 ssd'>Off-Page SEO</MDBCardTitle>
      <p class="card-text">Our team of SEO experts work outside of your website to impact and improve the overall search rankings of your website.
     </p>
    </MDBCol>
    <MDBCol md={6} className="seosec-2">
    <img src={require('../images/seo-3.png')} alt=""/>
                     
    </MDBCol>

</MDBRow >


<div className='secsec-2'>
<MDBRow >
    <MDBCol md={6} className="seosec-2">
    <img src={require('../images/seo-4.png')} alt=""/>
    </MDBCol>
    <MDBCol md={6} className=" seosec-11">
   
    <MDBCardTitle className='headsubsdi-2 '>Reputation<br/> Management</MDBCardTitle>
      <p class="card-text">We not only work on bringing your website in the top search results page but also ensure that no negative results pop up when your brand is being searched for.
     </p>
    </MDBCol>

</MDBRow>
</div>
<MDBRow >
    <MDBCol md={6} className="seosec-10">
    <MDBCardTitle className='headsubsdi-2'>Reporting and Analytics</MDBCardTitle>
      <p class="card-text">We capture the site’s rankings for all targeted keywords, as well as cover backlinks audit, off page link building, seo optimization status, traffic reports and technical seo audit reports.
     </p>
    </MDBCol>
    <MDBCol md={6} className="seosec-2">
    <img src={require('../images/seo-5.png')} alt=""/>
                     
    </MDBCol>

</MDBRow >
</MDBContainer>

<div className='secsec-2'>
<MDBContainer>
<MDBRow className='dot1'>
    <h1>Our 3 Pillars of Search Engine Optimization</h1>
    </MDBRow>

    <MDBRow style={{textalign:"center"}}>
  <MDBCol md={4}>
      <div className="card-12">
          <h5 className='tecahseo'>Technical SEO </h5>
          <ul className='serversecseo'>
              <li>Server analysis & website rendering</li>
             <li> Internationalization</li>
             <li> Site architecture</li>
             <li> Sitemaps</li>
             <li>Tags</li>
             <li> Mobile optimization</li>
             <li> Performance</li>
             <li> UX & Content</li>
            
                  </ul>
          </div>
  </MDBCol>
  <MDBCol md={4}>
      <div className="card-12">
          <h5 className='tecahseo'>On-Page SEO</h5>
          <ul className='serversecseo'>
          <li>Intent-based query analysis</li>
             <li> Meta tags</li>
             <li> Unique descriptions for product pages</li>
             <li> User & search engine friendly content creation</li>
             <li> Metadata & On-page optimization</li>
             <li> Analytics & Reporting</li>
                  </ul>
          </div>
  </MDBCol>
  <MDBCol md={4}>
      <div className="card-12">
          <h5 className='tecahseo'>On-Page SEO </h5>
          <ul className='serversecseo'>
              <li>Intent-based query analysis</li>
             <li> Meta tags</li>
             <li> Unique descriptions for product pages</li>
             <li> User & search engine friendly content creation</li>
             <li> Metadata & On-page optimization</li>
             <li> Analytics & Reporting</li>
            
            
            
                  </ul>
          </div>
  </MDBCol>
    </MDBRow>

    </MDBContainer>
    </div>


    <ScrollAnimation animateIn="fadeIn"> 
<MDBContainer className='secsec-2' >
    <MDBRow className="devweb-13">
<MDBAnimation reveal type="fadeInUp">
    <h1>Tools We Use</h1>
</MDBAnimation>
    </MDBRow>
    <MDBRow className='toolwebsec'>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg1.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">SEO Moz</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg2.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Google Analytics</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg3.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Google Adwords</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg4.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Google Pagespeed Insights</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg5.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Google Trends</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg6.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Similarweb</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg7.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Sitemap</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg8.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Lighthouse</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg8.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Woorank</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img src={require('../images/toolimg10.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Copyscape</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img className="img-12sse" src={require('../images/toolimg11.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">Google Search Console</h1>
          
        </div>
    </div>
    </MDBCol>
    <MDBCol md={3}>
    <div className="card-13">
    <img className="img-12ss" src={require('../images/toolimg12.png')} alt=""/>
            <div className='card13bot'>
                <h1 className="seotoolsec">ScreamingFrog</h1>
          
        </div>
    </div>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </ScrollAnimation>
</div>


<Footer/>
    
            </>
        )
    }
}
