import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Subscribe } from '../components/subscribe';

export const SubscribePage = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Subscribe</h4>
      <Subscribe />
    </Col>
  </Row>
);
