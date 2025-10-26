// Course Model
// Mongoose schema for course data

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters']
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  category: {
    type: String,
    required: true,
    enum: ['Technology', 'Business', 'Science', 'Arts', 'Mathematics', 'Languages', 'Other']
  },
  level: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  duration: {
    type: Number, // in hours
    required: true,
    min: [1, 'Duration must be at least 1 hour']
  },
  instructor: {
    name: String,
    email: String,
    bio: String
  },
  syllabus: [{
    module: String,
    topics: [String],
    duration: Number // in hours
  }],
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  price: {
    type: Number,
    default: 0,
    min: [0, 'Price cannot be negative']
  },
  thumbnail: String,
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  rating: {
    average: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Index for search optimization
courseSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Course', courseSchema);
