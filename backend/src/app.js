import express from "express";

import cors from "cors";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

import courseRoutes from "./routes/course.routes.js";

import lessonRoutes from "./routes/lesson.routes.js";

import vocabularyRoutes from "./routes/vocabulary.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";

import quizRoutes from "./routes/quiz.routes.js";

import progressRoutes from "./routes/progress.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());


// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/courses", courseRoutes);

app.use("/api/lessons", lessonRoutes);

app.use(
  "/api/vocabulary",
  vocabularyRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use("/api/quizzes", quizRoutes);

app.use(
  "/api/progress",
  progressRoutes
);


app.get("/", (req, res) => {
  res.send("API Running...");
});

export default app;