const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const userRoutes = require("./routes/userRoutes");

const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
