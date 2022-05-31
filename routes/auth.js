const authRouter = require("express").Router();
const User = require("../models/user");

authRouter.post("/checkCredentials", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send("Invalid checkCredential");
    } else {
      User.verifyPassword(password, user.hashedPassword).then(
        (passwordIsCorrect) => {
          if (passwordIsCorrect) {
            res.status(200).send("checkCredential correct");
          } else {
            res.status(401).send("Invalid checkCredential pass");
          }
        }
      );
    }
  });
});

module.exports = authRouter;
