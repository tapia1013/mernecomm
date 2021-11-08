import jwt from 'jsonwebtoken';

// pass in user ID cause thats what we want to pass in as the payload as the token 
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_TOKEN, {
    expiresIn: '30d'
  });
};

export default generateToken;