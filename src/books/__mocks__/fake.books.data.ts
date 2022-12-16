import mongoose from "mongoose"
import { Books } from "../models/books.model"

//esse é o mock de um ID padrão da mongo 
export const fakeId = "332130d71623c49bf7b1c7e9"

export const fakeAuthor = "J. K. Rowling"
export const fakeAuthor1 = ""
//esse é o mock do banco de dados
export const fakeBooksData: Books[] = [
  {
    title: "Harry Potter e a Pedra Filosofal",
    releaseDate: "1997",
    language: ['português', 'inglês'],
    status: true,
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter e a Câmara Secreta",
    releaseDate: "1998",
    language: ['português', 'inglês'],
    status: true,
    reviewId: new mongoose.Types.ObjectId(),
    author: "J. K. Rowling",
  },
  {
    title: "Harry Potter e o Prisioneiro de Askaban",
    releaseDate: "1999",
    language: ['português', 'inglês'],
    status: true,
    reviewId: new mongoose.Types.ObjectId(),
    author: "J. K. Rowling",
  },
]

export const fakeBooksInvalidBody = 
  {
    title: "Harry Potter e a Pedra Filosofal",
    releaseDate: "1997",
  }


export const updatedBook = {
    language: ['português'],
    reviewId: new mongoose.Types.ObjectId(),
  }

  export const updatedBookStatus = {
    status: true,
  }

  export const getByAuthor: Books = {
    title: "getByAuthor",
    releaseDate: "2000",
    language: ['português'],
    status: true,
    reviewId: new mongoose.Types.ObjectId(),
    author: "Pedrinho",
  }