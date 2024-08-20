import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../images/logo.png";
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace with your API endpoint
    const apiUrl = 'http://localhost:8080/login';

    try {
        const response = await axios.post(apiUrl, { email, password });

        if (response.status === 200) {
            // Extract the ID from the response
            const { id, fullName, email, dob } = response.data;
            console.log(response);
            // Store the ID in sessionStorage
            sessionStorage.setItem('userId', id);
            sessionStorage.setItem('userName', fullName);
            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userDOB', dob);

            // Handle successful login
            console.log('Login successful:', response.data);
            navigate('/filtration'); // Redirect to your desired component
        } else {
            // Handle errors
            console.error('Login failed:', response.data);
            navigate('/login');
        }
    } catch (error) {
        console.error('Error:', error);
        navigate('/login');
    }
};

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '10px' }}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-12" style={{ backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', padding: '20px', maxWidth: '400px' }}>
                    <div className="text-center mb-4">
                        <img src={image} alt="Logo" style={{ height: '100px', marginBottom: '10px' }} />
                        <h4 className="mb-3" style={{ fontWeight: '600', color: '#343a40' }}>Welcome Back! Please Login</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                style={{ borderRadius: '8px', borderColor: '#ced4da' }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                                style={{ borderRadius: '8px', borderColor: '#ced4da' }}
                            />
                        </div>
                        <div className="mb-3">
                            <a href="#" className="text-primary">Forgot Password?</a>
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100" style={{ padding: '10px', fontSize: '15px', borderRadius: '8px' }}>Login</button>
                        <div className="mt-3 text-center">
                            <a href="register" className="text-secondary">New to Humsafar? Sign up for free</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
