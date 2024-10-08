import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Cart Management System</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

export default Header;
