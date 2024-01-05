import express from "express";
import {PORT, mongoURL} from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
const app = express();
app.use(express.json())

app.use("/books", booksRoute)

app.get("/", (request, response) => {
    let statusCode = 404;
    let body = "";

    statusCode = 404;
    body = "Requested Resource does not exist on server";

    return response.status(statusCode).send(body);
    
})

console.log("Initializing App")

mongoose
.connect(mongoURL)
.then(() => {
    console.log("Connected to DB")
    app.listen(PORT, () => {
        console.log(`Server has started on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})