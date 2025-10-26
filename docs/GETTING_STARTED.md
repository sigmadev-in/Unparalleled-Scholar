# 🚀 Unparalleled Scholar - Getting Started Guide

## Welcome to Unparalleled Scholar (US.V1)!

This guide will help you get the application running in just a few minutes.

---

## ⚡ Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Server
```bash
npm run dev
```

### Step 3: Open Your Browser
```
http://localhost:3000
```

**That's it! 🎉**

---

## 🔍 What You'll See

### Landing Page
- Hero section with call-to-action
- About Unparalleled Scholar
- Platform pillars showcase
- Vision and Mission cards

### Courses Page
Navigate to: `http://localhost:3000/pages/courses.html`
- Browse available courses
- Filter by category
- View course details
- Enroll in courses

### Contact Page
Navigate to: `http://localhost:3000/pages/contact.html`
- Submit inquiries
- Get in touch with the team

---

## 🧪 Testing the API

### 1. Check API Health
```bash
curl http://localhost:3000/api/health
```

Expected Response:
```json
{
  "status": "OK",
  "message": "Unparalleled Scholar API is running",
  "version": "1.0.0",
  "project": "US.V1"
}
```

### 2. Get All Courses
```bash
curl http://localhost:3000/api/courses
```

### 3. Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

---

## 🛠️ Troubleshooting

### Port Already in Use
If you see "Port 3000 is already in use":

1. **Option 1:** Stop the process using port 3000
   ```bash
   # Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   
   # Mac/Linux
   lsof -ti:3000 | xargs kill
   ```

2. **Option 2:** Change the port
   ```bash
   # Edit .env file
   PORT=3001
   ```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### API Not Responding
1. Make sure the server is running
2. Check console for errors
3. Verify PORT in .env matches your requests

---

## 📂 Project Structure Overview

```
Scholar Site/
├── 📁 client/          # Frontend assets (CSS, JS)
├── 📁 server/          # Backend (API, controllers, models)
├── 📁 src/             # HTML pages
├── 📁 docs/            # Documentation
├── 📄 package.json     # Dependencies
├── 📄 .env             # Environment config
└── 📄 README.md        # Project overview
```

---

## 🎯 Next Steps

### For Developers
1. Read `docs/DEVELOPMENT.md` for detailed setup
2. Check `docs/API.md` for API documentation
3. Explore the codebase

### For Users
1. Browse courses on `/pages/courses.html`
2. Contact us via `/pages/contact.html`
3. Learn about our platform on the homepage

---

## 📚 Additional Resources

- **API Documentation:** `docs/API.md`
- **Development Guide:** `docs/DEVELOPMENT.md`
- **Build Summary:** `docs/BUILD_SUMMARY.md`

---

## 🤝 Need Help?

- 📧 Email: info@unparalleledscholar.com
- 💼 LinkedIn: [Unparalleled Scholar](https://www.linkedin.com/company/unparalleled-scholar/)
- 📝 Check console logs for debugging

---

## ✅ Checklist

Before you start:
- [ ] Node.js installed (v18+)
- [ ] npm or yarn available
- [ ] Terminal/Command Prompt open
- [ ] Text editor ready (VS Code recommended)

After installation:
- [ ] Dependencies installed successfully
- [ ] Server starts without errors
- [ ] Can access http://localhost:3000
- [ ] API responds to /api/health

---

## 🎉 You're All Set!

The Unparalleled Scholar platform is now running on your local machine.

**Enjoy exploring the future of education! 🎓**

---

**Built by Srijan | Srijan Technologies**  
© 2024 Unparalleled Scholar. All rights reserved.
