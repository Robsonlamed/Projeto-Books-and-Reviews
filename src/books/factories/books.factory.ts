import { BooksController } from "../controllers/books.controllers"
import { BooksModel } from "../models/books.model"
import { BooksRepository } from "../repository/books.repository"
import { BooksService } from "../service/books.service"

export function booksFactory() {
  const booksRepository = new BooksRepository(BooksModel)
  const booksService = new BooksService(booksRepository)
  const booksController = new BooksController(booksService)

  return booksController
}

export const books = booksFactory()
