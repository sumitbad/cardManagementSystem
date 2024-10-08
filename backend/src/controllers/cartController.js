let cart = [];

export const getCart = (req, res) => {
  const userId = req.user.id; 
  console.log("this is cart", cart);

  const userCart = cart.filter(item => item.userId === userId); 
  res.json(cart);
};



export const addItemToCart = (req, res) => {
  const { itemId, merchantId, quantity,itemName,imageUrl } = req.body;
  const userId = req.user.id; 

  // Remove existing item from the same merchant
  cart = cart.filter(item => !(item.userId === userId && item.merchantId === merchantId));

  // Add new item to cart
  cart.push({ userId, itemId, merchantId, quantity,itemName,imageUrl });
  res.status(201).json({ message: 'Item added to cart', cart });
};




export const removeItemFromCart = (req, res) => {
  const itemId = req.params.itemId;
  cart = cart.filter(item => item.itemId !== itemId);
  res.json({ message: 'Item removed from cart', cart });
};
