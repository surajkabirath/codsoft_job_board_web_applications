// express.d.ts or custom.d.ts (or any other suitable filename)
import { Request } from 'express';
import { IUser  } from '../models/User'; // Adjust according to your User model and schema
import { ObjectId } from 'mongoose'; // Adjust as per your ObjectId type

interface User {
  _id: ObjectId; // Assuming _id is of type ObjectId
  role: string;
  // Add other properties as per your user schema
}
declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Adjust the type according to your User model
    }
  }
}
