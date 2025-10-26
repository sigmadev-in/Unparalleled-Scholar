# Unparalleled Scholar API Documentation
## Version 1.0 (US.V1)

### Base URL
```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

---

## Health Check

### Check API Status
```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Unparalleled Scholar API is running",
  "version": "1.0.0",
  "project": "US.V1"
}
```

---

## Students API

### Get All Students
```http
GET /api/students
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "1",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "555-0123",
      "enrollmentDate": "2024-01-15T00:00:00.000Z",
      "status": "active",
      "courses": [],
      "profile": {
        "grade": "10th",
        "interests": ["Mathematics", "Science"]
      }
    }
  ]
}
```

### Get Student by ID
```http
GET /api/students/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
}
```

### Create New Student
```http
POST /api/students
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "555-0124",
  "profile": {
    "grade": "11th",
    "interests": ["Technology", "Arts"]
  }
}
```

### Update Student
```http
PUT /api/students/:id
Content-Type: application/json
```

### Delete Student
```http
DELETE /api/students/:id
```

---

## Courses API

### Get All Courses
```http
GET /api/courses
```

**Query Parameters:**
- `category` (optional): Filter by category
- `level` (optional): Filter by level (Beginner, Intermediate, Advanced)
- `status` (optional): Filter by status (draft, published, archived)

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": "1",
      "title": "Introduction to Web Development",
      "description": "Learn the fundamentals of web development",
      "category": "Technology",
      "level": "Beginner",
      "duration": 40,
      "instructor": {
        "name": "Sarah Johnson",
        "email": "sarah.j@unparalleledscholar.com"
      },
      "price": 0,
      "status": "published",
      "rating": {
        "average": 4.5,
        "count": 120
      }
    }
  ]
}
```

### Get Course by ID
```http
GET /api/courses/:id
```

### Create New Course
```http
POST /api/courses
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Introduction to Python",
  "description": "Learn Python programming from scratch",
  "category": "Technology",
  "level": "Beginner",
  "duration": 50,
  "instructor": {
    "name": "John Developer",
    "email": "john@example.com"
  },
  "price": 0,
  "status": "published"
}
```

### Update Course
```http
PUT /api/courses/:id
Content-Type: application/json
```

### Delete Course
```http
DELETE /api/courses/:id
```

### Enroll Student in Course
```http
POST /api/courses/:id/enroll
Content-Type: application/json
```

**Request Body:**
```json
{
  "studentId": "1"
}
```

### Get Courses by Category
```http
GET /api/courses/category/:category
```

---

## Contact API

### Get All Contact Submissions
```http
GET /api/contact
```

**Query Parameters:**
- `status` (optional): Filter by status (new, read, responded, archived)

### Get Contact by ID
```http
GET /api/contact/:id
```

### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "General Inquiry",
  "message": "I would like to know more about your courses."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "data": {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "General Inquiry",
    "status": "new",
    "createdAt": "2024-10-24T12:00:00.000Z"
  }
}
```

### Update Contact
```http
PUT /api/contact/:id
Content-Type: application/json
```

### Delete Contact
```http
DELETE /api/contact/:id
```

---

## Error Responses

### 404 Not Found
```json
{
  "error": "Route not found",
  "message": "The requested resource does not exist"
}
```

### 400 Bad Request
```json
{
  "success": false,
  "error": "Please provide all required fields"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "Something went wrong"
}
```

---

## Status Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 201  | Created |
| 400  | Bad Request |
| 404  | Not Found |
| 500  | Internal Server Error |

---

## Rate Limiting

Currently no rate limiting is implemented. This will be added in future versions.

---

## Authentication

Authentication is not yet implemented. All endpoints are currently public.

---

**Built by Srijan | Srijan Technologies**
© 2024 Unparalleled Scholar. All rights reserved.
