// THIS FILE VALIDATES THE TOKEN
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    try {
      // assign token to use below
      token = req.headers.authorization.split(' ')[1]

      // decode token, and pass in secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // {id: '34h34h23hk545h385h45', iat: 34343, exp:21692323232}
      // console.log(decoded);

      req.user = await User.findById(decoded.id).select('-password')

      next();
    } catch (error) {
      console.error(error);
      res.status(401);

      throw new Error('Not Authorize, token failed')
    }

  }


  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, no Token')
  }


  // next();
})




export { protect }
