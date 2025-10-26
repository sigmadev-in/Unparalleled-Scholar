// Course Controller
// Business logic for course operations

const Course = require('../models/Course');

// Mock data for development
let mockCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript.',
    category: 'Technology',
    level: 'Beginner',
    duration: 40,
    instructor: {
      name: 'Sarah Johnson',
      email: 'sarah.j@unparalleledscholar.com'
    },
    price: 0,
    status: 'published',
    rating: { average: 4.5, count: 120 },
    enrolledStudents: []
  },
  {
    id: '2',
    title: 'Advanced Mathematics',
    description: 'Master advanced mathematical concepts and problem-solving techniques.',
    category: 'Mathematics',
    level: 'Advanced',
    duration: 60,
    instructor: {
      name: 'Dr. Michael Chen',
      email: 'michael.c@unparalleledscholar.com'
    },
    price: 0,
    status: 'published',
    rating: { average: 4.8, count: 85 },
    enrolledStudents: []
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Explore data analysis, visualization, and machine learning basics.',
    category: 'Technology',
    level: 'Intermediate',
    duration: 50,
    instructor: {
      name: 'Emily Rodriguez',
      email: 'emily.r@unparalleledscholar.com'
    },
    price: 0,
    status: 'published',
    rating: { average: 4.7, count: 95 },
    enrolledStudents: []
  }
];

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const { category, level, status } = req.query;
    let filteredCourses = [...mockCourses];

    if (category) {
      filteredCourses = filteredCourses.filter(c => c.category === category);
    }
    if (level) {
      filteredCourses = filteredCourses.filter(c => c.level === level);
    }
    if (status) {
      filteredCourses = filteredCourses.filter(c => c.status === status);
    }

    res.json({
      success: true,
      count: filteredCourses.length,
      data: filteredCourses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = mockCourses.find(c => c.id === req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new course
exports.createCourse = async (req, res) => {
  try {
    const newCourse = {
      id: String(mockCourses.length + 1),
      ...req.body,
      enrolledStudents: [],
      rating: { average: 0, count: 0 }
    };

    mockCourses.push(newCourse);

    res.status(201).json({
      success: true,
      data: newCourse
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const index = mockCourses.findIndex(c => c.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }

    mockCourses[index] = {
      ...mockCourses[index],
      ...req.body,
      id: req.params.id
    };

    res.json({
      success: true,
      data: mockCourses[index]
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const index = mockCourses.findIndex(c => c.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }

    mockCourses.splice(index, 1);

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Enroll student in course
exports.enrollStudent = async (req, res) => {
  try {
    const { studentId } = req.body;
    const course = mockCourses.find(c => c.id === req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        error: 'Course not found'
      });
    }

    if (course.enrolledStudents.includes(studentId)) {
      return res.status(400).json({
        success: false,
        error: 'Student already enrolled'
      });
    }

    course.enrolledStudents.push(studentId);

    res.json({
      success: true,
      message: 'Student enrolled successfully',
      data: course
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get courses by category
exports.getCoursesByCategory = async (req, res) => {
  try {
    const courses = mockCourses.filter(c => c.category === req.params.category);

    res.json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
