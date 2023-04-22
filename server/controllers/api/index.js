const { User } = require("../../models");

module.exports = {
  // Gets a user
  getUser(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));

    console.log(JSON.stringify(res.json));
  },
  // Creates a user
  createUser(req, res) {
    console.log("new request");
    console.log(JSON.stringify(req.body));
    const newUser = User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    // if (newUser) {
    //   res.json("User was created");
    // } else {
    //   res.json("no user created");
    // }
  },
};
