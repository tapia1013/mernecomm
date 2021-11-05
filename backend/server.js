import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';


import productRoutes from './routes/productRoutes.js';
import Product from './models/productModel.js';



dotenv.config()

connectDB()

const app = express()


// //middleware demo
// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next()
// })


app.get('/', (req, res) => {
  res.send('API is running...')
})



app.use('/api/products', productRoutes)


// error middlewares
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold);
});

