// Student Controller
// Business logic for student operations

const Student = require('../models/Student');

// Mock data for development (until MongoDB is connected)
let mockStudents = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-0123',
    enrollmentDate: new Date('2024-01-15'),
    status: 'active',
    courses: [],
    profile: {
      grade: '10th',
      interests: ['Mathematics', 'Science']
    }
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-0124',
    enrollmentDate: new Date('2024-02-01'),
    status: 'active',
    courses: [],
    profile: {
      grade: '11th',
      interests: ['Technology', 'Arts']
    }
  }
];

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    // Use mock data for now
    res.json({
      success: true,
      count: mockStudents.length,
      data: mockStudents
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get student by ID
exports.getStudentById = async (req, res) => {
  try {
    const student = mockStudents.find(s => s.id === req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        error: 'Student not found'
      });
    }

    res.json({
      success: true,
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new student
exports.createStudent = async (req, res) => {
  try {
    const newStudent = {
      id: String(mockStudents.length + 1),
      ...req.body,
      enrollmentDate: new Date(),
      status: 'active',
      courses: []
    };

    mockStudents.push(newStudent);

    res.status(201).json({
      success: true,
      data: newStudent
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update student
exports.updateStudent = async (req, res) => {
  try {
    const index = mockStudents.findIndex(s => s.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Student not found'
      });
    }

    mockStudents[index] = {
      ...mockStudents[index],
      ...req.body,
      id: req.params.id // Ensure ID doesn't change
    };

    res.json({
      success: true,
      data: mockStudents[index]
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const index = mockStudents.findIndex(s => s.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: 'Student not found'
      });
    }

    mockStudents.splice(index, 1);

    res.json({
      success: true,
      message: 'Student deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get student courses
exports.getStudentCourses = async (req, res) => {
  try {
    const student = mockStudents.find(s => s.id === req.params.id);
    
    if (!student) {
      return res.status(404).json({
        success: false,
        error: 'Student not found'
      });
    }

    res.json({
      success: true,
      data: student.courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
