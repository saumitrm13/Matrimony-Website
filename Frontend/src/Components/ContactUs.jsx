import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h1 className="text-center mb-4">Contact Us</h1>
      <form className="p-4 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ padding: '10px', fontSize: '16px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
