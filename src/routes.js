const router = require("express").Router();

const User = require("@controller/userController");

router.get("/users", User.get);
router.get("/user/:id", User.get);
router.post("/user-add", User.add);
router.put("/user-edit", User.edit);
router.delete("/user-delete", User.delete);


module.exports = router;