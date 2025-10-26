// Course Routes
// API endpoints for course management

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// GET all courses
router.get('/', courseController.getAllCourses);

// GET single course by ID
router.get('/:id', courseController.getCourseById);

// POST create new course
router.post('/', courseController.createCourse);

// PUT update course
router.put('/:id', courseController.updateCourse);

// DELETE course
router.delete('/:id', courseController.deleteCourse);

// POST enroll student in course
router.post('/:id/enroll', courseController.enrollStudent);

// GET courses by category
router.get('/category/:category', courseController.getCoursesByCategory);

module.exports = router;
