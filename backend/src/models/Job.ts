import mongoose,{Schema,Document} from "mongoose";

interface IJob extends Document{
    title: string;
  description: string;
  category: string;
  country: string;
  city: string;
  location: string;
  fixedSalary?: number;
  salaryFrom?: number;
  salaryTo?: number;
  expired: boolean;
  jobPostedOn: Date;
  postedBy: mongoose.Types.ObjectId;
}

const jobSchema : Schema <IJob>= new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."],
        minLength: [3, "Title must contain at least 3 Characters!"],
        maxLength: [30, "Title cannot exceed 30 Characters!"],
      },
    description: {
        type: String,
        required: [true, "Please provide description."],
        minLength: [30, "Description must contain at least 30 Characters!"],
        maxLength: [500, "Description cannot exceed 500 Characters!"],
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
        minLength: [20, "Location must contain at least 20 characters!"],
      },
      fixedSalary: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      salaryFrom: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
      },
      salaryTo: {
        type: Number,
        minLength: [4, "Salary must contain at least 4 digits"],
        maxLength: [9, "Salary cannot exceed 9 digits"],
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
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
})

const Job = mongoose.model<IJob>("User", jobSchema);
export default Job;