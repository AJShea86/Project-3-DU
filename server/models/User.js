const { schema } = require('mongoose');

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Int,
    },
    location: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
    },
    bio: {
        type: String
    },
})
  
  const User = model('User', userSchema);
  
  module.exports = User