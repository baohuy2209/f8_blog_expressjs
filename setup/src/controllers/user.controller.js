const User = require("../models/user.models");
module.exports = {
  async index(req, res) {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.json({ data: users });
  },
  async store(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const newUser = await user.save();
      res.status(201).json({ data: newUser });
    } catch (error) {
      console.log(error);
      res.status(400).send("Bad request.");
    }
  },
  async show(req, res) {
    const user = await User.findById(req.params.id);
    res.json({ data: user });
  },
  async update(req, res) {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }
    );
    const user = await User.findById(req.params.id);
    res.json({ data: user });
  },
  async destroy(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        code: 404,
        message: "Resource not found",
      });
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send(null);
  },
};
