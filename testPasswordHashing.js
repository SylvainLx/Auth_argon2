const User = require("./models/user");
/* prend un password et le crypt */
/*User.hashPassword("myPlainPassword").then((hashedPassword) => {
  console.log(hashedPassword);
});*/

/* au moment du log, vérifie si le password correspon au crypt hash */
User.verifyPassword(
  "myPlainPassword",
  "$argon2id$v=19$m=65536,t=5,p=1$6F4WFjpSx9bSq9k4lp2fiQ$cjVgCHF/voka5bZI9YAainiaT+LkaQxfNN638b/h4fQ"
).then((passwordIsCorrect) => {
  console.log(passwordIsCorrect);
});
