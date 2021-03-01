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

// Create new gues
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
    res.json(updatedGuest);
  } catch (error) {
    console.error(error);
  }
});

// Delete guest
router.delete('/:id', async (req, res) => {
  try {
    const guest = Guest.findById(rea.params.id);
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found.' });
    }
    await guest.remove();
    res.json({ messge: 'Guest deleted.' });
  } catch (error) {}
});

module.exports = router;
