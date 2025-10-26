// Contact Routes
// API endpoints for contact form submissions

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// GET all contact submissions
router.get('/', contactController.getAllContacts);

// GET single contact by ID
router.get('/:id', contactController.getContactById);

// POST create new contact submission
router.post('/', contactController.createContact);

// PUT update contact status
router.put('/:id', contactController.updateContact);

// DELETE contact
router.delete('/:id', contactController.deleteContact);

module.exports = router;
