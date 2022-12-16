import {
  CustomErrors,
  invalidIdError,
  promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";
import { Books } from "../models/books.model";
import { BooksRepository } from "../repository/books.repository";

export class BooksService {
  constructor(private readonly booksRepository: BooksRepository) {}

  async getAll(author:string): Promise<Books[] | CustomErrors> {
    try {
      if(author){
        const books = await this.booksRepository.getAll(author)
        return books
      }
      const books = await this.booksRepository.getAll(author);
      
      return books;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Books | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const book = await this.booksRepository.getById(id);
      return book;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(book: Books): Promise<Books | CustomErrors> {
    try {
      const newBook = await this.booksRepository.create(book);
      return newBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, book: Books): Promise<Books | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updateBook = await this.booksRepository.update(id, book);
      return updateBook;
    } catch (error) {
      return promiseError(error);
    }
  }

  async updateStatus(id: string, book: Books): Promise<Books | CustomErrors>{
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }
    
    try {
      const updateStatusBook = await this.booksRepository.updateStatus(id, book)
      return updateStatusBook
    } catch (error) {
      return promiseError(error)
    }
  }
}
