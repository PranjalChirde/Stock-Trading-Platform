const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/UserSchema");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "No account found with this email." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password. Please try again." });
    }

    return res.status(200).json({
      message: "Login successful!",
      username: user.username,
    });

  } catch (error) {
    console.log("Login Error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
