import React, { Component } from 'react'
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";


export default class InnerBannerTop extends Component {
    render() {
        return (
          <>
            <div className="outsidebanner">
              <Container>
                <Row>
                  <Col md="12">
                    <Breadcrumb>
                      <Breadcrumb.Item href="#">
                        {this.props.breadcrumbname}
                      </Breadcrumb.Item>

                      <Breadcrumb.Item active>
                        {this.props.breadcrumactive}
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </Col>
                  <Col md="12">
                    <div className="inner-title">
                      <h1>{this.props.name}</h1>
                      <p>
                        {this.props.text}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        );
    }
}
