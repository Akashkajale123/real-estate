const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const authRoutes = require("./Routes/authRoutes.js");
const propertyRoutes = require("./Routes/propertyRoutes.js");
const cors = require("cors");
const fileupload=require("express-fileupload")
dotEnv.config();

const app = express();
const PORT = 3000;

const URI ="mongodb+srv://akashkajale125:" + encodeURIComponent("Akash@123") + "@cluster1.fnodolx.mongodb.net/Real_Estate_properties?retryWrites=true&w=majority";
;

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

connectDB();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use("/auth", authRoutes);

// Property Routes
app.use("/property", propertyRoutes);

// //file upload
app.use(fileupload({
  useTempFiles:true
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});