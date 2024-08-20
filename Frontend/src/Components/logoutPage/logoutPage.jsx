import React from 'react';
import { Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);


  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
      <h1>Thank You!</h1>
      <p style={{ fontSize: '18px', color: '#555' }}>You have successfully logged out.</p>
      <Link to="/login" className="btn btn-primary" style={{ marginTop: '20px' }}>
        Go to Login Page
      </Link>
    </div>
  );
};

export default LogoutPage;
