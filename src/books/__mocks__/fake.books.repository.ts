import { fakeBooksData, updatedBook } from "./fake.books.data";
import { BooksRepository } from "../repository/books.repository";

export const fakeBooksRepository = {
  getAll: () => Promise.resolve(fakeBooksData),
  getById: () => Promise.resolve(fakeBooksData[0]),
  getByAuthor: () => Promise.resolve(fakeBooksData[0]),
  create: () => Promise.resolve(fakeBooksData[1]),
  update: () => Promise.resolve(updatedBook),
  updateStatus: () => Promise.resolve(updatedBook),

} as unknown as BooksRepository;
