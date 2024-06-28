import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide a company."],
   
  },
  title: {
    type: String,
    required: [true, "Please provide a title."],
   
  },
  description: {
    type: String,
    required: [true, "Please provide description."],
    
  },
  category: {
    type: String,
    required: [true, "Please provide a category."],
  },
  country: {
    type: String,
    required: [true, "Please provide a country name."],
  },
  city: {
    type: String,
    required: [true, "Please provide a city name."],
  },
  location: {
    type: String,
    required: [true, "Please provide location."],
   
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [10, "Salary cannot exceed 9 digits"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [10, "Salary cannot exceed 9 digits"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary must contain at least 4 digits"],
    maxLength: [10, "Salary cannot exceed 9 digits"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

});

const Job = mongoose.models.Job || mongoose.model('Job', jobSchema);

export default Job;