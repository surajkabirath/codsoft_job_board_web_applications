import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes";
import jobRoutes from "./routes/jobRoutes.js"
import  errorHandler from "./middlewares/errorMiddleware.js";
import cors from "cors";
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};
app.use(cors(corsOptions));
// Use morgan to log HTTP requests if in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Middleware to parse cookies
app.use(cookieParser());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/job", jobRoutes);

// Catch-all route handler for undefined routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(errorHandler);

export default app;
