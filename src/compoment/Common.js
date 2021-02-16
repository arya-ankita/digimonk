import React, { Component } from 'react'
import Navbar from "./Navbar";
import InnerBannerTop from './InnerBannerTop';
import {Container, Row, Col} from 'react-bootstrap'

const icon =[
    {
        Title: 'Payment Gateway API',
        Image: require('../images/icon/1.png')
        
    },
    {
        Title: 'Google API',
        Image: require('../images/icon/2.png')
        
    },
    {
        Title: 'Authentication API',
        Image: require('../images/icon/3.png')
        
    },
    {
        Title: 'Shipping API',
        Image:require('../images/icon/4.png')
        
    },
    {
        Title: 'Social-Networking API',
        Image: require('../images/icon/5.png')
        
    },
    // {
    //     Title: '',
    //     Image: '6.png'
        
    // }
]

export default class Common extends Component {
    render() {
        return (
            <>
            <Navbar/>

            <InnerBannerTop
                breadcrumbname="Home"
              breadcrumactive="API Integration"
              name="API Integration"
              text=" Make sure your content is consistent and personalized for
              each customer with Adobe Experience Manager Sites. Create
              and manage your digital experience across all channels
              with automated tools that make scaling effortless."
            />


         <section className="gray">

         <Container>
             <Row xs={1} md={3} lg={3} className="justify-content-center">
              {icon.map((icon,index)=>(
                  <Col key= {index} className="mb-4 ">
       
                   <div className="common">
                   <img src={icon.Image}/>
                   </div> 

                  </Col>

              ))}

             </Row>
         </Container>


         </section>                
            </>
        )
    }
}
