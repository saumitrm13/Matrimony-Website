import React from 'react';

const ChatPage_Messages = ({ messages }) => {
  return (
    <div className="flex-grow-1 p-3" style={{ overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
      {messages.map((msg, index) => (
        <div key={index} className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : ''}`}>
          <div className={`p-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`} style={{ maxWidth: '70%' }}>
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatPage_Messages;
