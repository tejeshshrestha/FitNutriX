const register = require("../model/Register");
const bcrypt = require("bcrypt");

class registerController {
  static post = async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, password } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      console.log(passwordHash);
      const Register = await new register({
        name,
        email,
        passwordHash,
      });

      const result = await Register.save();
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(400).json({
        status: false,
        msg: err,
      });
    }
  };
  static get = async (req, res) => {
    try {
      const result = await register.find({});
      if (!result) {
        throw new Error("No data");
      }
      res.status(200).json({
        status: true,
        msg: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        msg: err,
      });
    }
  };
}
module.exports = registerController;
