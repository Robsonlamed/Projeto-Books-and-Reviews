import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";
import { jest, it, describe, expect } from "@jest/globals";
import { BooksController } from "./books.controllers";
import { fakeBookService, fakeBookServiceGetByAuthor } from "../__mocks__/fake.books.service";
import { fakeBooksData, fakeBooksInvalidBody, fakeId,   updatedBook, updatedBookStatus } from "../__mocks__/fake.books.data";
import { mockRequest, mockResponse } from "../__mocks__/fake.books.routes";

const booksController = new BooksController(fakeBookService);
const booksControllerGetByAuthor = new BooksController(fakeBookServiceGetByAuthor);

const req = mockRequest();
const res = mockResponse();

describe("BooksController", () => {
  describe("getAll", () => {
    it("should return all books", async () => {
      await booksController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData);
    });
    it("should return book author", async () => {
      await booksControllerGetByAuthor.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[0])
;
    });
    it("should return status code 200", async () => {
      await booksController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });

    it("should return a promiseError", async () => {
      jest
        .spyOn(fakeBookService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await booksController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("should return a book", async () => {
      req.params.id = fakeId;
      await booksController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[0]);
    });
  
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await booksController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakeBookService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await booksController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      jest
        .spyOn(fakeBookService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await booksController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("should create a book", async () => {
      req.body = fakeBooksData[1];
      await booksController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[1]);
    });
    it("should return status code 201", async () => {
      req.body = fakeBooksData[1];
      await booksController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("should return a promiseError", async () => {
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBookService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await booksController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return status code 400", async () => {
      req.body = fakeBooksInvalidBody;
      await booksController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("update", () => {
    it("should update a book", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await booksController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[1]);
    });
    it("should return status code 400", async () => {
      req.body = fakeBooksInvalidBody;
      await booksController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await booksController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBookService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await booksController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBookService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await booksController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("updateStatus", () => {
    it("should update book status", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await booksController.updateStatus(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeBooksData[1]);
    });
    it("should return status code 400", async () => {
      req.body = fakeBooksInvalidBody;
      await booksController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      await booksController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    }); 
    
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBookService, "updateStatus")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await booksController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      req.params.id = fakeId;
      req.body = fakeBooksData[1];
      jest
        .spyOn(fakeBookService, "updateStatus")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await booksController.updateStatus(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });
})
