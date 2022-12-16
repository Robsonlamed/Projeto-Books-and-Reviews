import { books } from "../factories/books.factory"
import { Router } from 'express'

const express = require('express')
const app = express()
 
app.use(express.json())

export const booksRoutes = Router()
 
//o bind é encarregado de manter o escopo do this
booksRoutes.get("/", books.getAll.bind(books))
// booksRoutes.get("/books/author", books.getByAuthor.bind(books))
booksRoutes.get("/:id", books.getById.bind(books))
booksRoutes.post("/", books.create.bind(books))
booksRoutes.put("/:id", books.update.bind(books))
booksRoutes.put("/:id/status", books.updateStatus.bind(books))

// booksRoutes.put("/books/:language", books.update.bind(books))

