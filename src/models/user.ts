import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
    },
    addressline1:{
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);
export default User;