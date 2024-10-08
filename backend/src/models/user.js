import jwt from 'jsonwebtoken';

let users = {}; // Simulating a user database

export const registerUser = (username, password) => {
  // Register new user
  const userId = Date.now().toString();
  users[userId] = { username, password };
  return userId;
};

export const loginUser = (username, password) => {
  const userId = Object.keys(users).find(id => users[id].username === username && users[id].password === password);

  if (!userId) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET);
  return token;
};

export const getUserById = (id) => users[id];
