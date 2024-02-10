// const login = require("../model/Login");
const jwt = require("jsonwebtoken");
const register = require("../model/Register");
const bcrypt = require("bcrypt");

class loginController {
  static post = async (req, res) => {
    const { email, password } = req.body;
    const user = await register.findOne({ email });
    if (!user) {
      res.status(403).json({ error: "No user" });
    }
    console.log(email, password);
    const correctPassword = await bcrypt.compare(password, user.passwordHash);
    if (!(user && correctPassword)) {
      res.status(403).json({ error: "User or Password Invalid" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.SECRET
    );
    res.send({ token });
  };
}
module.exports = loginController;
