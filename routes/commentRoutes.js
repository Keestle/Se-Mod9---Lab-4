const express = require("express");
const router = express.Router();
const Controllers = require("../controller");

router.post('/', (req, res) => {
Controllers.CommentController.createComment(res);
})

module.exports = router;