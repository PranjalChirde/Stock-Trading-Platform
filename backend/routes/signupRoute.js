const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(409).json({ message: "Email is already registered. Please log in." });
    }

    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    await newUser.save();

    return res.status(201).json({
      message: "Account created successfully!",
      username: newUser.username,
    });

  } catch (error) {
    console.log("Signup Error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
