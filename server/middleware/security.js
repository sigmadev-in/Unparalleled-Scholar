// Security Middleware
// Developed by Srijanxi Technologies
// Project: US.V1 - Unparalleled Scholar

const rateLimit = require('express-rate-limit');
const validator = require('validator');

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// API rate limiter (stricter)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: 'Too many API requests, please try again later.',
});

// Authentication rate limiter (very strict)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many authentication attempts, please try again later.',
});

// Input validation middleware
const validateInput = (req, res, next) => {
  const suspiciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /eval\(/gi,
    /expression\(/gi,
  ];

  const checkValue = (value) => {
    if (typeof value === 'string') {
      return suspiciousPatterns.some(pattern => pattern.test(value));
    }
    if (typeof value === 'object' && value !== null) {
      return Object.values(value).some(checkValue);
    }
    return false;
  };

  // Check request body
  if (req.body && checkValue(req.body)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input detected. Please remove any script tags or malicious code.',
    });
  }

  // Check query parameters
  if (req.query && checkValue(req.query)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid query parameters detected.',
    });
  }

  next();
};

// Sanitize email
const sanitizeEmail = (email) => {
  if (!email || typeof email !== 'string') return '';
  return validator.normalizeEmail(email) || '';
};

// Validate email
const isValidEmail = (email) => {
  return validator.isEmail(email);
};

// Sanitize string (remove HTML tags)
const sanitizeString = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').trim();
};

// Validate phone number
const isValidPhone = (phone) => {
  return validator.isMobilePhone(phone, 'any');
};

// Validate URL
const isValidURL = (url) => {
  return validator.isURL(url, { 
    protocols: ['http', 'https'],
    require_protocol: true 
  });
};

module.exports = {
  limiter,
  apiLimiter,
  authLimiter,
  validateInput,
  sanitizeEmail,
  isValidEmail,
  sanitizeString,
  isValidPhone,
  isValidURL,
};
