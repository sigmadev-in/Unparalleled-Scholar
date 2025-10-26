# 🎓 Unparalleled Scholar

<div align="center">
  <img src="./client/img/logo.png" alt="Unparalleled Scholar Logo" width="120" height="120">
  <br><br>
</div>

**Unlocking Potential Through Purpose-Driven Education**

[![Status](https://img.shields.io/badge/Status-Production_Ready-success)]()
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)]()
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red)]()

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Unparalleled%20Scholar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/unparalleled-scholar/)

**Project Code Name:** `US.V1`

---

## 🌟 About Us

**At Unparalleled Scholar**, we are pioneering an education platform designed to transform learning through innovation, accessibility, and purpose-driven solutions. Our platform seamlessly integrates traditional academics with evolving industry demands, delivering personalized, data-driven curricula to empower students, educators, and institutions. With scalable digital technology, we enable excellence and future-ready skills development.

### 🎯 Vision
To be the global education platform that leads the transformation toward a smarter, more capable world.

### 🚀 Mission
To build accessible and innovative education experiences that empower individuals to succeed in a dynamic knowledge economy.

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access the application
http://localhost:3000
```

**For detailed instructions, see [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)**

---

## ✨ Features

### Current Features
- ✅ **Dynamic Course Catalog** - Browse and filter courses
- ✅ **Contact System** - Submit inquiries
- ✅ **Testimonials Section** - Student success stories with ratings
- ✅ **RESTful API** - 18 endpoints for data management
- ✅ **Responsive Design** - Mobile-first with hamburger menu
- ✅ **Enhanced Security** - Helmet, rate limiting, input validation
- ✅ **Modern UI/UX** - Animations, parallax, scroll effects
- ✅ **Icon Integration** - Unicons library
- ✅ **Mock Data System** - Development without database
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards

### Security Features (6)
✅ Helmet.js Protection | ✅ Rate Limiting | ✅ Input Validation  
✅ Data Sanitization | ✅ DOMPurify | ✅ Client Rate Limiting

### UI/UX Features (10)
✅ Breadcrumb Navigation | ✅ Back to Top | ✅ Progress Bar  
✅ Print Optimization | ✅ Page Transitions | ✅ Parallax  
✅ Loading Animations | ✅ Typing Effect | ✅ Scroll Reveal | ✅ AOS

---

## 🛠️ Tech Stack

### Frontend
- **Core:** HTML5, CSS3, JavaScript (ES6+)
- **Framework:** Tailwind CSS
- **Icons:** Unicons
- **Animations:** AOS, Custom CSS animations

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js
- **Security:** Helmet, Express-rate-limit, Validator, DOMPurify
- **ODM:** Mongoose (ready for MongoDB)

### Development & Deployment
- **Version Control:** Git & GitHub
- **Editor:** Visual Studio Code
- **API Testing:** Postman
- **Deployment:** Vercel / Netlify
- **Package Manager:** npm

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [📖 Getting Started](./docs/GETTING_STARTED.md) | Quick start guide for new users |
| [🔧 Development Guide](./docs/DEVELOPMENT.md) | Development setup and workflows |
| [🌐 API Documentation](./docs/API.md) | Complete API reference (18 endpoints) |
| [🚀 Deployment Guide](./docs/DEPLOYMENT.md) | Production deployment instructions |
| [🎨 UI/UX Features](./docs/UI_UX_ENHANCEMENTS.md) | All UI/UX features and animations |
| [📄 Software Marketing Doc](./docs/smd.md) | Original project specifications |

---

## 📁 Project Structure

```
Scholar Site/
├── 📁 client/              # Frontend assets
│   ├── css/               # Stylesheets
│   └── js/                # Client-side JavaScript
├── 📁 server/             # Backend application
│   ├── config/            # Configuration
│   ├── controllers/       # Business logic
│   ├── middleware/        # Security & validation
│   ├── models/            # Database models
│   └── routes/            # API routes
├── 📁 src/                # HTML pages
│   ├── index.html         # Landing page
│   └── pages/             # Additional pages
├── 📁 docs/               # Documentation
├── 📄 package.json        # Dependencies
├── 📄 .env.example        # Environment template
└── 📄 README.md           # This file
```

---

## 🚀 API Endpoints

### Health Check
- `GET /api/health` - Server status

### Students (6 endpoints)
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student
- `GET /api/students/:id/courses` - Get student courses

### Courses (7 endpoints)
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/category/:category` - Get by category

### Contact (5 endpoints)
- `GET /api/contact` - Get all messages
- `GET /api/contact/:id` - Get message by ID
- `POST /api/contact` - Submit message
- `PUT /api/contact/:id` - Update message
- `DELETE /api/contact/:id` - Delete message

**For detailed API documentation, see [docs/API.md](./docs/API.md)**

---

## 🧪 Testing

### API Health Check
```bash
curl http://localhost:3000/api/health
```

### Get Courses
```bash
curl http://localhost:3000/api/courses
```

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'
```

---

## 🤝 Contributing

This is a proprietary project. For collaboration inquiries, please contact:
- **LinkedIn:** [Unparalleled Scholar](https://www.linkedin.com/company/unparalleled-scholar/)
- **Developer:** Srijan Kumar | Srijanxi Technologies

---

## 📄 License

**© 2024 Unparalleled Scholar. All rights reserved.**

This project is proprietary software developed by Srijanxi Technologies.  
Unauthorized copying, modification, or distribution is prohibited.

---

## 🔗 Links

- **LinkedIn:** [Unparalleled Scholar Company Page](https://www.linkedin.com/company/unparalleled-scholar/)
- **Getting Started:** [docs/GETTING_STARTED.md](./docs/GETTING_STARTED.md)
- **API Documentation:** [docs/API.md](./docs/API.md)

---

---

## � Documentation Guide

### � Available Documentation Files

The `docs/` folder contains detailed technical documentation:

| Document | Purpose | Key Topics |
|----------|---------|------------|
| [**GETTING_STARTED.md**](./docs/GETTING_STARTED.md) | Quick start guide | 3-step installation, Testing, Troubleshooting |
| [**DEVELOPMENT.md**](./docs/DEVELOPMENT.md) | Development workflows | Environment setup, Code standards, Best practices |
| [**API.md**](./docs/API.md) | Complete API reference | 18 endpoints, Request/response examples, Error handling |
| [**DEPLOYMENT.md**](./docs/DEPLOYMENT.md) | Production deployment | Vercel, Netlify, Heroku deployment guides |
| [**UI_UX_ENHANCEMENTS.md**](./docs/UI_UX_ENHANCEMENTS.md) | UI/UX features guide | 10 UI features, 6 security features, Animations |
| [**smd.md**](./docs/smd.md) | Project specifications | Tech stack, Vision/mission, Feature roadmap |

### 📖 Recommended Reading Order

**For New Users:**
1. Start with **GETTING_STARTED.md** to set up the project
2. Review **smd.md** to understand the vision
3. Check **API.md** to learn the endpoints

**For Developers:**
1. **GETTING_STARTED.md** → Initial setup
2. **DEVELOPMENT.md** → Development workflows
3. **API.md** → API integration
4. **UI_UX_ENHANCEMENTS.md** → Frontend features

**For Deployment:**
1. **GETTING_STARTED.md** → Verify local setup works
2. **DEPLOYMENT.md** → Production deployment steps

### 🎯 Complete Feature List

#### Security Features (6)
✅ **Helmet.js Protection** - CSP, XSS, security headers  
✅ **Rate Limiting** - 3 tiers (global, API, auth)  
✅ **Input Validation** - XSS pattern detection  
✅ **Data Sanitization** - Email, phone, URL validation  
✅ **DOMPurify** - Client-side HTML sanitization  
✅ **Client Rate Limiting** - Request throttling  

#### UI/UX Features (10)
✅ **Breadcrumb Navigation** - Dynamic page paths  
✅ **Enhanced Back to Top** - Gradient button with smooth scroll  
✅ **Reading Progress Bar** - Scroll progress indicator  
✅ **Print Optimization** - Clean print layouts  
✅ **Smooth Page Transitions** - Fade in/out effects  
✅ **Parallax Scrolling** - Depth effects on scroll  
✅ **Loading Animations** - Beautiful spinner with messages  
✅ **Typing Animation** - Dynamic text rotation  
✅ **Scroll Reveal** - Elements fade/slide into view  
✅ **AOS Integration** - 60+ scroll animation options  

### 🔗 External Resources

- **Unicons Icons:** https://iconscout.com/unicons
- **AOS Library:** https://michalsnik.github.io/aos/
- **Tailwind CSS:** https://tailwindcss.com/
- **Express.js:** https://expressjs.com/
- **Mongoose:** https://mongoosejs.com/

---

## � Recent Updates

**Version:** 1.0.0  
**Last Updated:** October 25, 2025

### Latest Changes
- ✅ Added Testimonials Section with star ratings and success stories
- ✅ Implemented mobile-responsive hamburger menu
- ✅ Enhanced SEO with meta tags and Open Graph
- ✅ Created .env file for environment configuration
- ✅ Optimized mobile navigation and user experience
- ✅ Implemented all SMD features (16+ features)
- ✅ Added enterprise security (6 features)
- ✅ Enhanced UI/UX (10 features)
- ✅ Consolidated documentation (7 files)
- ✅ Production-ready deployment configs

---

**Built with ❤️ by Srijan Kumar | Srijanxi Technologies**  
**© Unparalleled Scholar. All rights reserved.**

