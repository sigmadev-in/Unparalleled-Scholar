// Frontend Security Utilities
// Developed by Srijanxi Technologies
// Project: US.V1 - Unparalleled Scholar

// DOMPurify configuration (using CDN version)
const securityConfig = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
  ALLOWED_ATTR: ['href', 'title'],
};

// Sanitize HTML content
function sanitizeHTML(dirty) {
  if (typeof DOMPurify !== 'undefined') {
    return DOMPurify.sanitize(dirty, securityConfig);
  }
  // Fallback: simple tag removal
  return dirty.replace(/<[^>]*>/g, '');
}

// Validate email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone
function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

// Sanitize input value
function sanitizeInput(value) {
  if (typeof value !== 'string') return value;
  
  // Remove potential XSS patterns
  return value
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

// Rate limiting on client side
class ClientRateLimiter {
  constructor(maxRequests = 10, timeWindow = 60000) {
    this.requests = [];
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
  }

  canMakeRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      return false;
    }
    
    this.requests.push(now);
    return true;
  }

  getRemainingRequests() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    return Math.max(0, this.maxRequests - this.requests.length);
  }
}

// Export for use in other scripts
window.SecurityUtils = {
  sanitizeHTML,
  validateEmail,
  validatePhone,
  sanitizeInput,
  ClientRateLimiter,
};
