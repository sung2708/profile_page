var User = require('../models/users.model');
var jwt = require('jsonwebtoken');

var generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};

var register = async (req, res) => {
    try {
        var { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        var userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Email already exists" });

        var user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: "Registration successful", token: generateToken(user._id) });
    } 
    catch (error) {
        res.status(500).json({ error: error.message || "Server error" });
    }
};

module.exports = { register };

