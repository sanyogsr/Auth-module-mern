const mongoose = require("mongoose");
const { type } = require("os");

const userModel = new mongoose.schema({
  username: {
    type: String,
    required: [true, "Please Provide the Unique Username"],
    unique: [true, "User Exist"],
  },
  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    unique: false,
  },

  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
