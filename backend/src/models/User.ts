// import { bcrypt } from 'bcryptjs';
// import { Schema, model, Document } from "mongoose";

// interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
// }

// const userSchema = new Schema<IUser>({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   role: {
//     type: String,
//     enum: ["admin", "employee", "job-seeker"],
//     default: "job-seeker",
//   },
// });

// export const User = model<IUser>("User", userSchema);

import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  image: string;
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
    image: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "employee", "job-seeker"],
      default: "job-seeker",
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
