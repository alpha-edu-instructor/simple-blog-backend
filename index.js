import express from "express";
import { connectDatabase } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 7000;

app.use(express.json());
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
