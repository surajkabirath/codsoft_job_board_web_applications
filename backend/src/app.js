import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const corsOptions = {
  origin: ["https://codsoft-job-board-web-applications-frontend.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.get("/",(req,res)=>{
  res.send("Welcome to Codsoft Job Board API")
})
app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/application", applicationRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(errorHandler);

export default app;
