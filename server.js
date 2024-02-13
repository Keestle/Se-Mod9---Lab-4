const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type - application/json

app.use(express.json());
let dbConnect = require("./dbConnect")

let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let likeRoutes = require('./routes/likeRoutes');
let commentRoutes = require('./routes/commentRoutes');
let fruitRoutes = require('./routes/fruitRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/fruit', fruitRoutes);


app.get("/", (req, res) => {
res.json({ message: "Welcome to my MySQL application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);
});