const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
dotenv.config();
app.use(cors());

app.use(express.json({ limit: "50mb" })); //? allow body parsing
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
//frf
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

const RegisterRoute = require("./routes/RegisterRouter");
const LoginRoute = require("./routes/LoginRouter");
const WorkoutRoute = require("./routes/WorkoutRouter");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to API",
  });
});

app.use("/api/register", RegisterRoute);
app.use("/api/login", LoginRoute);
app.use("/api/workouts", WorkoutRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
