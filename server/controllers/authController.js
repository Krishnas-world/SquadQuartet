const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json({ success: false, message: 'Invalid password' });
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        const { password: pass, ...rest } = validUser._doc;

        res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);
    } catch (error) {
        next(error);
    }
};

const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password || username === '' || email === '' || password === '') {
            throw new Error('All fields are required');
        }
        const hashPass = bcrypt.hashSync(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashPass
        });

        await newUser.save();
        res.status(200).json({
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

