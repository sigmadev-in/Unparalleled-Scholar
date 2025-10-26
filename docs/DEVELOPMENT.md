# Unparalleled Scholar - Development Guide
## Project Code Name: US.V1

### 🚀 Quick Start

#### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (optional for now - mock data available)

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Scholar Site"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - API Health Check: http://localhost:3000/api/health

### 📁 Project Structure

```
Scholar Site/
├── client/                 # Frontend assets
│   ├── css/               # Stylesheets
│   └── js/                # Client-side JavaScript
├── server/                # Backend application
│   ├── config/            # Configuration files
│   ├── controllers/       # Business logic
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   └── server.js          # Main server file
├── src/                   # HTML pages
│   ├── index.html         # Landing page
│   └── pages/             # Additional pages
│       ├── courses.html
│       └── contact.html
├── docs/                  # Documentation
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies
└── README.md             # Project overview
```

### 🔌 API Endpoints

#### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student
- `GET /api/students/:id/courses` - Get student courses

#### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course by ID
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/:id/enroll` - Enroll student
- `GET /api/courses/category/:category` - Get courses by category

#### Contact
- `GET /api/contact` - Get all contact submissions
- `GET /api/contact/:id` - Get contact by ID
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id` - Update contact
- `DELETE /api/contact/:id` - Delete contact

### 🛠️ Development Commands

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run tests (when implemented)
npm test
```

### 🎨 Frontend Pages

1. **Landing Page** (`src/index.html`)
   - Hero section
   - About section
   - Platform pillars
   - CTA section

2. **Courses Page** (`src/pages/courses.html`)
   - Course catalog
   - Category filters
   - Dynamic course loading

3. **Contact Page** (`src/pages/contact.html`)
   - Contact form
   - Form validation
   - API integration

### 🗄️ Database Integration (Future)

MongoDB integration is planned. Currently using mock data for development.

To enable MongoDB:
1. Install MongoDB locally or use MongoDB Atlas
2. Update `MONGODB_URI` in `.env`
3. Uncomment database connection in `server.js`
4. Run migrations (when available)

### 🚢 Deployment

#### Netlify
```bash
# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --prod
```

#### Vercel
```bash
# Deploy to Vercel
npm install -g vercel
vercel --prod
```

### 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `NODE_ENV` | Environment | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/unparalleled-scholar |

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

### 📝 License

© 2024 Unparalleled Scholar. Built by Srijan | Srijan Technologies. All rights reserved.

### 🆘 Support

For support, email info@unparalleledscholar.com or visit our LinkedIn page.

---

**Built with ❤️ by Srijan | Srijan Technologies**
