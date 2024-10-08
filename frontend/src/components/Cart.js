import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import dummyItems from './dummyItems';



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Function to fetch cart items
  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/cart', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5001/api/cart/remove/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Refresh the cart items after removal
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleAddItem = async () => {
    if (!selectedItem || quantity <= 0) {
      alert("Please select an item and enter a valid quantity.");
      return;
    }

    try {
      const newItem = {
        itemId: selectedItem.itemId,
        merchantId: selectedItem.merchantId,
        itemName: selectedItem.itemName,
        imageUrl: selectedItem.imageUrl,
        quantity: quantity,

      };
      await axios.post('http://localhost:5001/api/cart/add', newItem, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchCart();
      setSelectedItem(null);
      setQuantity(1);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(false);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <button onClick={() => setIsModalOpen(true)}>select Item</button>
      <div>
        <b>Selected Item:</b> {selectedItem ? `${selectedItem.itemName} ` : 'None'}
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <button
          onClick={handleAddItem}
          disabled={!selectedItem}
          className={`add-to-cart-button ${!selectedItem ? 'disabled' : ''}`}
          style={{ padding: "8px", marginLeft: "5px" }}
        >
          Add to cart
        </button>      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectItem}
        dummyItems={dummyItems}
      />
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.itemId} className="cart-item">
              <img src={item.imageUrl} alt={`Item ${item.itemName}`} className="cart-item-image" />
              <div className="cart-item-details">
                <div className="cart-item-name"><b>{item.itemName}</b></div>
                <div className="cart-item-quantity">Quantity: {item.quantity}</div>
              </div>
              <button onClick={() => handleRemoveItem(item.itemId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Cart;
