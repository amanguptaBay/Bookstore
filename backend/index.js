import express from "express";
import {PORT} from "./config.js"
const app = express();

app.get("/", (request, response) => {
    let statusCode = 404;
    let body = "";

    statusCode = 200;
    body = "Hello World";

    return response.status(statusCode).send(body);
    
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`);
})