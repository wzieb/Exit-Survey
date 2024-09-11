const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Surveyschema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    enum: ['Class 101'],
  },
  rating:{
    type: Number,
    enum: [1,2,3,4,5],
  },
  favoritePart :{
    type: String
  },
  leastFavorite: {
    type:String
  },
  takeaway :
  {
    type:String
  },
  rateTeacher :{
    type: Number,
    enum: [1,2,3,4,5],
  },
  applicable:{
    type: Number,
    enum: [1,2,3,4,5]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

});

const Survey = model('Survey', Surveyschema);

module.exports = Survey;
