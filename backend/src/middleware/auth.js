import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
  const token = req.headers['authorization'];
  
  // Check if the token is provided
  if (!token) return res.status(403).send('Token is required');
  const tokenValue = token.split(' ')[1]; 

  // Verify the token
  jwt.verify(tokenValue, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); 
    req.user = user; 
    next(); 
  });
};
