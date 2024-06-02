const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    role: {
        type: String,
        enum: ["student", "teacher", "parent", "admin"],
        required: true,
    },
    profile: {
        firstName: { 
            type: String 
        },
        lastName: { 
            type: String 
        },
        age: { 
            type: Number 
        },
        gender: { 
            type: String 
        },
        // Additional profile fields
    },
    profilePicture:{
        type: String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    learningPath: [{ 
        type: Schema.Types.ObjectId, 
        ref: "LearningPath" 
    }]
},{timestamps:true});

module.exports = mongoose.model("User", UserSchema);
