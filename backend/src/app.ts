import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import jobROutes from "./routes/jobRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";
import cors from "cors";
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173", // React app URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow more methods if needed
  allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization header if using auth
  credentials: true, // Allow cookies to be sent with requests
};
app.use(cors(corsOptions));
// Use morgan to log HTTP requests if in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Middleware to parse cookies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/job", jobROutes);

// Catch-all route handler for undefined routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(errorHandler);

export default app;
