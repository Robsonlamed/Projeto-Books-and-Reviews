import { BooksService } from "../service/books.service";
import { fakeBooksData, updatedBook } from "./fake.books.data";

export const fakeBookService = {
  getAll: () => Promise.resolve(fakeBooksData),
  getById: () => Promise.resolve(fakeBooksData[0]),
  getByAuthor: () => Promise.resolve(fakeBooksData[0]),
  create: () => Promise.resolve(fakeBooksData[1]),
  update: () => Promise.resolve(updatedBook),
  delete: () => Promise.resolve(fakeBooksData[0]),
  updateStatus: () => Promise.resolve(updatedBook),
  updateLanguage: () => Promise.resolve(updatedBook),
} as unknown as BooksService;

export const fakeBookServiceGetByAuthor = {
  getAll: () => Promise.resolve(fakeBooksData[0]),
  getById: () => Promise.resolve(fakeBooksData[0]),
  getByAuthor: () => Promise.resolve(fakeBooksData[0]),
  create: () => Promise.resolve(fakeBooksData[1]),
  update: () => Promise.resolve(updatedBook),
  delete: () => Promise.resolve(fakeBooksData[0]),
  updateStatus: () => Promise.resolve(updatedBook),
  updateLanguage: () => Promise.resolve(updatedBook),
} as unknown as BooksService;