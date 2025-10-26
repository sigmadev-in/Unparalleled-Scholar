// Student Routes
// API endpoints for student management

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// GET all students
router.get('/', studentController.getAllStudents);

// GET single student by ID
router.get('/:id', studentController.getStudentById);

// POST create new student
router.post('/', studentController.createStudent);

// PUT update student
router.put('/:id', studentController.updateStudent);

// DELETE student
router.delete('/:id', studentController.deleteStudent);

// GET student courses
router.get('/:id/courses', studentController.getStudentCourses);

module.exports = router;
