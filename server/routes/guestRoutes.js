const { json } = require('express');
const express = require('express');
const Guest = require('../models/guestModel');

const router = express.Router();

// Get all guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({});
    if (!guests) {
      return res.json({ message: 'No guests found.' });
    }
    res.json(guests);
  } catch (error) {
    console.error(error);
  }
});

// Get guest by id
router.get('/:id', async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found.' });
    }

    res.json(guest);
  } catch (error) {
    console.error(error);
  }
});

// Create new guest
router.post('/', async (req, res) => {
  try {
    const guestData = req.body;
    const guest = await Guest.create(guestData);
    if (guest) {
      res.status(201).json(guest);
    } else {
      res.status(400).json({ message: 'invalid data submitted' });
    }
  } catch (error) {
    console.error(error);
  }
});

// Update guest profile
router.put('/:id', async (req, res) => {
  console.log('Put HIT ROUTE', req.params.id);

  try {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
      return res.status(404).json({ message: 'Guest not found.' });
    }
    guest.name = req.body.name || guest.name;
    guest.email = req.body.email || guest.email;
    guest.city = req.body.city || guest.city;
    guest.occupation = req.body.occupation || guest.occupation;

    const updatedGuest = await guest.save();
    res.status(201).json(updatedGuest);
  } catch (error) {
    console.error(error);
  }
});

// Delete guest
router.delete('/:id', async (req, res) => {
  try {
    await Guest.findByIdAndDelete(req.params.id);
    // if (!guest) {
    //   return res.status(404).json({ message: 'Guest not found.' });
    // }
    // await guest.remove();
    res.json({ messge: 'Guest deleted.' });
  } catch (error) {
    res.status(404).json({ message: 'Guest not found.' });
    console.log(error);
  }
});

module.exports = router;
