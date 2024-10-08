import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li style={cartItemStyle}>
      <span>Item ID: {item.itemId}, Merchant ID: {item.merchantId}, Quantity: {item.quantity}</span>
      <button style={buttonStyle} onClick={() => onRemove(item.itemId)}>Remove</button>
    </li>
  );
};

const cartItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  margin: '5px 0',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
};

export default CartItem;
