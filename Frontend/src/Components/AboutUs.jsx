import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container fluid className="about-us-section" style={{ padding: '50px 20px', backgroundColor: '#f8f9fa' }}>
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff' }}>About Us</h1>
          <p style={{ fontSize: '18px', color: '#6c757d', marginTop: '20px' }}>
            Welcome to Our Matrimony Website. We are dedicated to helping you find your perfect match.
          </p>
        </Col>
      </Row>
      <Row className="about-us-content">
        <Col md={4} className="text-center mb-4">
          <Image
            src="path-to-your-image1.jpg"
            roundedCircle
            className="about-us-image mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #007bff' }}
          />
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#007bff' }}>Our Mission</h3>
          <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '15px' }}>
            Our mission is to connect people and help them find their soulmates.
          </p>
        </Col>
        <Col md={4} className="text-center mb-4">
          <Image
            src="path-to-your-image2.jpg"
            roundedCircle
            className="about-us-image mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #007bff' }}
          />
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#007bff' }}>Our Vision</h3>
          <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '15px' }}>
            We envision a world where everyone finds love and happiness.
          </p>
        </Col>
        <Col md={4} className="text-center mb-4">
          <Image
            src="path-to-your-image3.jpg"
            roundedCircle
            className="about-us-image mb-4"
            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '5px solid #007bff' }}
          />
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#007bff' }}>Our Values</h3>
          <p style={{ fontSize: '16px', color: '#6c757d', marginTop: '15px' }}>
            We value trust, honesty, and respect in all our relationships.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
