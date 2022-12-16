import { promiseError, invalidIdError, invalidBodyError } from "./error.handler";
import { jest, describe, it, expect } from "@jest/globals";
import { invalidBodyUpdateStatusBookTeste } from "../books/utils/books.body.validator.spec";

describe("error.handler", () => {
  describe("promiseError", () => {
    it("should be defined", () => {
      const error = promiseError("error");
      expect(error).toBeDefined();
    });
    it("should return an object with a promiseError property", () => {
      const error = promiseError("error");
      expect(error.promiseError).toBeDefined();
    });
    it("should return an object with a promiseError property with a message property", () => {
      const error = promiseError("error");
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "error",
        },
      });
    });
  });
  describe("invalidIdError", () => {
    it("should be defined", () => {
      const error = invalidIdError("invalidId");
      expect(error).toBeDefined();
    });
    it("should return an object with a invalidIdError property", () => {
      const error = invalidIdError("invalidId");
      expect(error.invalidIdError).toBeDefined();
    });
    it("should return an object with a invalidIdError property with a message property", () => {
      const error = invalidIdError("invalidId");
      expect(error).toEqual({
        invalidIdError: {
          message: "Invalid id on request, please submit a ObjectId",
          id: "invalidId",
        },
      });
    }); 
  });
  describe("invalidBodyError", () => {
    it("  should be defined", () => {
      const error = invalidBodyError(invalidBodyUpdateStatusBookTeste);
      expect(error).toBeDefined();
    });
    it("should return an object with a invalidBodyError property", () => {
      const error = invalidBodyError(invalidBodyUpdateStatusBookTeste);
      expect(error.InvalidBodyError).toBeDefined();
    });
    it("should return an object with a invalidBodyError property with a message property", () => {
      const error = invalidBodyError(invalidBodyUpdateStatusBookTeste);
      expect(error).toEqual({
        InvalidBodyError: {
          message: "Invalid body on request, please submit a valid body",
          body: invalidBodyUpdateStatusBookTeste,
      },
      });
    }); 
  });
});
