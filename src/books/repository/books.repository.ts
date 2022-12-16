import { Model } from "mongoose";
import { Books } from "../models/books.model";

export class BooksRepository {
  constructor(private readonly booksModel: Model<Books>) {}

  async getAll(author: string): Promise<Books[]> {

    if(author){
      const book = await this.booksModel.find( {author})
      return book
    }
    const books = await this.booksModel.find()
    return books;
  } 

  async getById(id: string): Promise<Books> {
    const book = await this.booksModel.findById(id).populate("reviewId");

    if (book === null) {
      return {} as Books;
    }

    return book;
  }

  async create(book: Books): Promise<Books> {
    const newBook = this.booksModel.create(book);
    return newBook;
  }

  async update(id: string, book: Books): Promise<Books> {
    const { language, reviewId } = book
    const updatedBook = await this.booksModel.findByIdAndUpdate(id, { $set: { language, reviewId}},
    {
      new: true
    });

    if (updatedBook === null) {
      return {} as Books;
    }

    return updatedBook;
  }
  
  async updateStatus(id: string, book: Books): Promise<Books>{
    const { status } = book

    const updatedStatusBook = await this.booksModel.findByIdAndUpdate(id, { $set: { status } },{
      new: true,
    });

    
    if (updatedStatusBook === null) {
      return {} as Books;
    }

    return updatedStatusBook;
   }
}
