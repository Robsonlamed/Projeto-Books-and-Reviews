import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";
import { fakeAuthor, fakeAuthor1, fakeBooksData, fakeId, updatedBook } from "../__mocks__/fake.books.data";
import { fakeBooksRepository } from "../__mocks__/fake.books.repository";
import { BooksService } from "./books.service";

const bookService = new BooksService(fakeBooksRepository)

describe("BooksService", () => {
  describe("getAll", () => {
    it("should call Repository.getAll", async () => {
      //criamos um spy que observa o fakeBooksRepository
      const spy = jest.spyOn(fakeBooksRepository, "getAll")

      //chamamos o método getAll do service
      await bookService.getAll(fakeAuthor1);

      //verificamos se o método foi chamado
      expect(spy).toHaveBeenCalled()
    });
    it("should return a list of books", async () => {
      const books = await bookService.getAll(fakeAuthor1)
      expect(books).toEqual(fakeBooksData)
    });
    it("should return a book author", async () => {
      const books = await bookService.getAll(fakeAuthor)
      expect(books).toEqual(fakeBooksData)
    });
    it("should return an promiseError", async () => {
      //simulando uma situação de erro
      jest.spyOn(fakeBooksRepository, "getAll").mockRejectedValueOnce("Error")

      //atribui esse erro a uma consntante
      const error = await bookService.getAll(fakeAuthor1)

      //verifica se o erro foi tratado de devida forma
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("getById", () => {
    it("should call Repository.getById", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "getById")
      await bookService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.getById(fakeId)
      expect(book).toEqual(fakeBooksData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "getById").mockRejectedValueOnce("Error")
      const error = await bookService.getById(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await bookService.getById("invalidId")
      expect(error).toEqual(invalidIdError("invalidId"))
    });
  });

  describe("create", () => {
    it("should call Repository.create", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "create")
      await bookService.create(fakeBooksData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.create(fakeBooksData[1])
      expect(book).toEqual(fakeBooksData[1]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "create").mockRejectedValueOnce("Error")
      const error = await bookService.create(fakeBooksData[1]);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });

  describe("update", () => {
    it("should call Repository.update", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "update")
      await bookService.update(fakeId, updatedBook);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a book", async () => {
      const book = await bookService.update(fakeId, updatedBook)
      expect(book).toEqual(updatedBook);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "update").mockRejectedValueOnce("Error")
      const error = await bookService.update(fakeId, updatedBook)
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await bookService.update("invalidId", updatedBook)
      expect(error).toEqual(invalidIdError("invalidId"))
    });
  });

  describe("updateStatus", () => {
    it("should call Repository.updateStatus", async () => {
      const spy = jest.spyOn(fakeBooksRepository, "updateStatus")
      await bookService.updateStatus( fakeId, updatedBook)
      expect(spy).toHaveBeenCalled();
    });
    it("should update book status", async () => {
      const book = await bookService.updateStatus( fakeId, updatedBook)
      expect(book).toEqual(updatedBook);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeBooksRepository, "updateStatus").mockRejectedValueOnce("Error")
      const error = await bookService.updateStatus( fakeId, updatedBook)
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await bookService.updateStatus("invalidId", updatedBook)
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
});
