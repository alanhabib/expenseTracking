const express = require("express");
const path = require("path");
const app = express();
const publicPath = __dirname && "dist";
const port = process.env.PORT || 3000;

app.use(express.static(path.join(publicPath)));

app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"))
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});