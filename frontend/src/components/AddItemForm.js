import React, { useState } from 'react';
import { addItemToCart } from '../api';

const AddItemForm = ({ fetchCart }) => {
  const [itemId, setItemId] = useState('');
  const [merchantId, setMerchantId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItemToCart({ itemId, merchantId, quantity });
    fetchCart(); // Refresh the cart after adding an item
    setItemId('');
    setMerchantId('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Merchant ID"
        value={merchantId}
        onChange={(e) => setMerchantId(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default AddItemForm;
