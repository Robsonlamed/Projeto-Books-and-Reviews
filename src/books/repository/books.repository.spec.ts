import { jest, it, describe, expect } from "@jest/globals";
import { BooksRepository } from "./books.repository";
import { fakeAuthor, fakeAuthor1, fakeBooksData, fakeId, updatedBook } from "../__mocks__/fake.books.data";
import { fakeBooksModel } from "../__mocks__/fake.books.model";

const booksRepository = new BooksRepository(fakeBooksModel);

describe("BooksRepository", () => {
  describe("getAll", () => {
    it("should return a list of books", async () => {
      const books = await booksRepository.getAll(fakeAuthor1);
      expect(books).toEqual(fakeBooksData);
    });
    it("should return a books author", async () => {
      const books = await booksRepository.getAll(fakeAuthor);
      expect(books).toEqual(fakeBooksData[0]);
    });
    it("should return an empty array", async () => {
      jest.spyOn(fakeBooksModel, "find").mockResolvedValueOnce([]);

      const books = await booksRepository.getAll(fakeAuthor1);
      expect(books).toEqual([]);
    });
  }); 
  describe("getById", () => {
    it("should return a book", async () => {
      const book = await booksRepository.getById(fakeId);
      expect(book).toEqual(fakeBooksData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeBooksModel, "findById").mockImplementationOnce(
          () => ({
          populate: jest.fn().mockImplementationOnce(() => null)
      }) as any
      )
      const book = await booksRepository.getById(fakeId)
      expect(book).toEqual({})
  })
  });
  describe("create", () => {
    it("should create a book", async () => {
      const newBook = await booksRepository.create(fakeBooksData[0]);
      expect(newBook).toEqual(fakeBooksData[0]);
    });
  });
  describe("update", () => {
    it("should update a book", async () => {
      const book = await booksRepository.update(fakeId, fakeBooksData[0]);

      expect(book).toEqual(updatedBook);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeBooksModel, "findByIdAndUpdate").mockResolvedValueOnce(null);

      const book = await booksRepository.update(fakeId, fakeBooksData[0]);
      expect(book).toEqual({});
    });
  });

  describe("updateStatus", () => {
    it("should update book status", async () => {
      const bookStatus = await booksRepository.updateStatus( fakeId, fakeBooksData[1]);
      expect(bookStatus).toEqual(updatedBook);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeBooksModel, "findByIdAndUpdate").mockResolvedValueOnce(null);

      const book = await booksRepository.update(fakeId, fakeBooksData[1]);
      expect(book).toEqual({});
    });
  });

});
