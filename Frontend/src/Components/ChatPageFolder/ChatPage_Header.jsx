import React from 'react';
import logo from '../images/logo2.png';

const ChatPage_Header = () => {
  return (
    <div className="d-flex align-items-center p-3 border-bottom" style={{ backgroundColor: '#333', color: '#fff' }}>
      <button className="btn btn-light me-2" style={{ border: 'none', background: 'transparent', fontSize:'2rem', color:'white' }} onClick={() => window.history.back()}>
        {'<'}
      </button>
      <img
        src={logo}
        alt="Profile"
        className="rounded-circle me-2"
        style={{ width: '40px', height: '40px' }}
      />
      <div className="d-flex flex-column">
        <h5 className="mb-0">Other User</h5>
        <button className="btn btn-secondary btn-sm mt-1">View Profile</button>
      </div>
    </div>
  );
};

export default ChatPage_Header;
