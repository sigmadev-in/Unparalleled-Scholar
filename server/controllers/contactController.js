// Contact Controller
// Business logic for contact form operations

const Contact = require('../models/Contact');

// Mock data for development
let mockContacts = [];

// Get all contact submissions
exports.getAllContacts = async (req, res) => {
  try {
    const { status } = req.query;
    let filteredContacts = [...mockContacts];

    if (status) {
      filteredContacts = filteredContacts.filter(c => c.status === status);
    }

    res.json({
      success: true,
      count: filteredContacts.length,
      data: filteredContacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = mockContacts.find(c => c.id === req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new contact submission
exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields'
      });
    }

    const newContact = {
      id: String(mockContacts.length + 1),
      name,
      email,
      subject,
      message,
      status: 'new',
      createdAt: new Date()
    };

    mockContacts.push(newContact);

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: newContact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update contact
exports.updateContact = async (req, res) => {
  try {
    const index = mockContacts.findIndex(c => c.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    mockContacts[index] = {
      ...mockContacts[index],
      ...req.body,
      id: req.params.id,
      updatedAt: new Date()
    };

    res.json({
      success: true,
      data: mockContacts[index]
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const index = mockContacts.findIndex(c => c.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Contact submission not found'
      });
    }

    mockContacts.splice(index, 1);

    res.json({
      success: true,
      message: 'Contact submission deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
