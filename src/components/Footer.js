import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>WiVatria Verginia Wally</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
