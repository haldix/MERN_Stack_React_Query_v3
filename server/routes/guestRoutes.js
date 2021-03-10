const { json } = require('express');
const fs = require('fs');
const express = require('express');
const Guest = require('../models/guestModel');

const router = express.Router();
const DELAY = 1000;

// Get all guests
router.get('/', async (req, res) => {
  try {
    const guests = await Guest.find({});
    if (!guests) {
      return res.json({ message: 'No guests found.' });
    }
    // setTimeout(() => res.json(guests), DELAY);
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
    setTimeout(() => res.json(guest), DELAY);
    // res.json(guest);
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
  try {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
      return res.status(404).json({ message: 'Guest not found.' });
    }
    guest.name = req.body.name || guest.name;
    guest.email = req.body.email || guest.email;
    guest.city = req.body.city || guest.city;
    guest.occupation = req.body.occupation || guest.occupation;
    guest.photo_url = req.body.photo_url || guest.photo_url;

    const updatedGuest = await guest.save();
    res.status(201).json(updatedGuest);
  } catch (error) {
    console.error(error);
  }
});

// Delete guest
router.delete('/:id', async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    const path = `${__dirname}/../../client/public${guest.photo_url}`;
    await Guest.findByIdAndDelete(req.params.id);

    fs.unlink(path, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    setTimeout(() => res.json({ messge: 'Guest deleted.' }), DELAY);
    // res.json({ messge: 'Guest deleted.' });
  } catch (error) {
    res.status(404).json({ message: 'Guest not found.' });
    console.error(error);
  }
});

// Upload guest photo
router.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: 'No file uploaded.' });
  }

  const file = req.files.file;
  file.mv(`${__dirname}/../../client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;
