const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
});

registerSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.passwordHash;
    delete returnedObj.__v;
  },
});

const register = mongoose.model("register", registerSchema);

module.exports = register;
