import React from 'react';

const Error = ({ children }) => {
  return (
    <div style={{ background: '#BC544B', color: 'white', padding: '3px', marginTop:"20px" }}>
      {children}
    </div>
  );
};

export default Error;