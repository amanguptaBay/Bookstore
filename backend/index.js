import express from "express";
import {PORT, mongoURL} from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookSchema.js";

const app = express();
app.use(express.json())


app.post("/books", async (request, response) => {
    try{
       if(!(request.body.author && request.body.title && request.body.publishYear)){
        response.status(400).send({
            message: "Missing One or More Required Fields: author, title, publishYear"
        })
       }

       const book = await Book.create({
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
       })

       response.status(201).send(book);
      

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

app.get("/books/:id", async (request, response) => {
    try{
        const {id} = request.params
        response.status(201).send(await Book.findById(id));

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

app.get("/books", async (request, response) => {
    try{
       response.status(201).send(await Book.find({}));
      

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

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