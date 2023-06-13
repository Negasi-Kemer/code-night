import express from "express";
const app = express();
import userRouter from "../api/users/router";

// Use third party middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);

export default app;
