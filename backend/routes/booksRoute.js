import express from "express"
import { Book } from "../models/bookSchema.js";

const router = express.Router();

router.put("/:id", async (request, response) => {
    try{
       if(!(request.body.author && request.body.title && request.body.publishYear)){
        response.status(400).send({
            message: "Missing One or More Required Fields: author, title, publishYear"
        })
       }

       const {id} = request.params

       const result = await Book.findByIdAndUpdate(id, request.body)

       if (result){
        response.status(201).send({message: "Updated book"});
       } else {
        response.status(404).send({message: "Book not found"});
       }
      

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

router.post("/", async (request, response) => {
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

router.delete("/:id", async (request, response) => {
    try{
       if(!(request.body.author && request.body.title && request.body.publishYear)){
        response.status(400).send({
            message: "Missing One or More Required Fields: author, title, publishYear"
        })
       }

       const {id} = request.params

       const result = await Book.findByIdAndDelete(id, request.body)

       if (result){
        response.status(201).send({message: "Deleted book"});
       } else {
        response.status(404).send({message: "Book not found"});
       }
      

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})


router.get("/:id", async (request, response) => {
    try{
        const {id} = request.params
        response.status(201).send(await Book.findById(id));

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})

router.get("/", async (request, response) => {
    try{
       response.status(201).send(await Book.find({}));
      

    } catch (error) {
        console.log(error.message)
        response.status(500).send({message: error.message})
    }
})



export default router