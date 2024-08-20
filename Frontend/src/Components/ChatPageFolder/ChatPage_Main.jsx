import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatHeader from './ChatPage_Header';
import ChatMessages from './ChatPage_Input';
import ChatInput from './ChatPage_Messages';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { text: messageInput, sender: 'user' }]);
      setMessageInput('');
    }
  };

  return (
    <div className="container d-flex flex-column vh-100">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatPage;
