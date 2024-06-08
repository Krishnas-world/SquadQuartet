const User = require('../models/userModel.js');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const signin = async (req, res, next) => {
    const { email, password, role } = req.body;
  
    if (!email || !password || !role) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
  
    try {
      const validUser = await User.findOne({ email, role });
      if (!validUser) {
        return res.status(404).json({ success: false, message: 'User not found or role mismatch' });
      }
      const validPassword = bcrypt.compareSync(password, validUser.password);
      if (!validPassword) {
        return res.status(400).json({ success: false, message: 'Invalid password' });
      }
      const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, role: validUser.role });
    } catch (error) {
      next(error);
    }
  };

const signup = async (req, res, next) => {
    try {
        const { username, email, password, role, name } = req.body;
        if (!username || !email || !password || username === '' || email === '' || password === '') {
            throw new Error('All fields are required');
        }
        const userEmail = await User.findOne({ username });
        if (userEmail) {
            throw new Error('Email already in use!')
        }
        const hashPass = bcrypt.hashSync(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashPass,
            role, // Include role in the user object
            name
        });

        await newUser.save();

        // Generate JWT token containing user data
        const token = jwt.sign({ id: newUser._id,name:newUser.name, role: newUser.role }, process.env.JWT_SECRET);

        // Send token in response
        res.status(200).json({
            token, // Send the generated token to the client
            message: "User created successfully"
        });
    } catch (error) {
        next(error);
    }
};

const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res
                .status(200)
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .json(rest);
        } else {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({
                username:
                    name.toLowerCase().split(' ').join('') +
                    Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            res
                .status(200)
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .json(rest);
        }
    } catch (error) {
        next(error);
    }
};

const completeProfile = async (req, res, next) => {
    const userId = req.params.id;
    const { firstName, lastName, age, gender } = req.body;

    if (!firstName || !lastName || !age || !gender) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { 'profile.firstName': firstName, 'profile.lastName': lastName, 'profile.age': age, 'profile.gender': gender },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};


module.exports = { signin, signup, google, completeProfile };

