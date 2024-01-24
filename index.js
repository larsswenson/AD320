import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Route handler for root
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Route handler for about
app.get("/about", (req, res) => {
    res.send("About page");
});
// 404 error handler
app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});
// Set server to listen on provided port or default to 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});