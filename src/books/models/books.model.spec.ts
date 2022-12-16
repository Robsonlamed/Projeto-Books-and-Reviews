import { BooksModel } from "./books.model";
import { it, describe, expect } from "@jest/globals";

describe("BooksModel", () => {
  it("should be defined", () => {
    expect(BooksModel).toBeDefined();
  });
});