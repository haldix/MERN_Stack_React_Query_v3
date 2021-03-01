const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.js');
const guestRouter = require('./routes/guestRoutes');

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/guests', guestRouter);

app.all('*', (req, res) => {
  console.log('BAD REQUEST', req.originalUrl);
});

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
