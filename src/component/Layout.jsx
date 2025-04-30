import React from 'react';
import ChatBot from './ChatBot';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <ChatBot />
    </>
  );
};

export default Layout;
