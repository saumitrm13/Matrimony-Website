import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PolicyPage = () => {
  return (
    <Container fluid className="policy-page" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#343a40' }}>Policies</h1>
          <p style={{ fontSize: '18px', color: '#6c757d', marginTop: '20px' }}>
            Please read our policies carefully to understand how we operate, what we expect from our users, and how we handle your personal information.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Privacy Policy</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            Your privacy is of utmost importance to us. We are committed to safeguarding your personal information and ensuring that it is used only for the purposes intended. We do not share your data with third parties without your consent, except as required by law.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Terms of Use</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            By using our website, you agree to comply with our terms of use. You are responsible for the accuracy of the information you provide and for keeping your login credentials confidential. Any misuse of our platform may result in the termination of your account.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Refund Policy</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            If you are not satisfied with our services, you may be eligible for a refund under certain conditions. Refunds will be processed based on the nature of the request and within a specific time frame. Please refer to our detailed refund policy for more information.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Safety Guidelines</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            We take the safety of our users seriously. We encourage you to exercise caution when interacting with others on our platform. Never share personal information too soon, and always meet in a public place when meeting someone for the first time. Report any suspicious activity to us immediately.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Account Deactivation</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            If you wish to deactivate your account, you can do so by accessing the account settings. Deactivated accounts can be reactivated by logging back in. However, if you wish to permanently delete your account, please contact our support team.
          </p>
        </Col>
      </Row>

      <Row className="policy-section mb-4">
        <Col md={10} className="mx-auto">
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: '#007bff' }}>Contact Us</h3>
          <p style={{ fontSize: '16px', color: '#6c757d' }}>
            If you have any questions or concerns regarding our policies, please feel free to reach out to our support team. We are here to help you and ensure that your experience with our platform is positive and secure.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PolicyPage;
