import React from 'react';

const ChatPage_Input = ({ messageInput, setMessageInput, handleSendMessage }) => {
  return (
    <div className="d-flex border-top p-3" style={{ backgroundColor: '#fff' }}>
      <input
        type="text"
        className="form-control me-2"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatPage_Input;
