const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
    },
    occupation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
