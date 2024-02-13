const express = require("express");
const router = express.Router();
const Controllers = require("../controller");
// matches GET requests sent to /api/users
// (the prefix from server.js)

// matches POST requests sent to /api/users/create
router.get('/', (req, res) => {
Controllers.fruitController.getFruit(req.body, res)
})

router.put('/update', (req, res) => {
    Controllers.fruitController.updateFruit(req.body, res)
    })

module.exports = router;