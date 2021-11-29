const router = require("express").Router();
const User = require("@controller/userController");

router.post("/login", User.login);
router.get("/users", User.get);
router.get("/user/:id", User.get);
router.post("/user-add", User.add);



module.exports = router;