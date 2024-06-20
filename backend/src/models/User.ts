import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
interface IUser extends Document {
  // image: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "employee" | "job-seeker";
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  matchPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    // image: { type: String, required: true },
    name: {
      type: String,
      required: [true, "Please enter your Name!"],
      minLength: [3, "Name must contain at least 3 Characters!"],
      maxLength: [30, "Name cannot exceed 30 Characters!"],
    },
    email: {
      type: String,
      required: [true, "Please enter your Email!"],
      validate: [validator.isEmail, "Please provide a valid Email!"],
    },
    password: {
      type: String,
      required: [true, "Please provide a Password!"],
      minLength: [6, "Password must contain at least 6 characters!"],
      maxLength: [32, "Password cannot exceed 32 characters!"],
      select: false,
    },
    role: {
      type: String,
      enum: [ "employee", "job-seeker"],
      required: [true, "Please select a role"],
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser>("User", userSchema);
export default User;
