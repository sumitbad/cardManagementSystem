import React, { useEffect, useRef } from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, onSelect, dummyItems }) => {
  const modalRef = useRef(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <h2>Select an Item</h2>
        <button onClick={onClose}>Close</button>
        <ul>
          {dummyItems.map(item => (
            <li key={item.itemId}>
              <img src={item.imageUrl} alt={item.itemName} />
              <span>{item.itemName}</span>
              <button onClick={() => onSelect(item)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
