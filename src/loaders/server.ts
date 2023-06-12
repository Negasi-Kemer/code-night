import express from "express";
const app = express()

// Use third party middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

export default app