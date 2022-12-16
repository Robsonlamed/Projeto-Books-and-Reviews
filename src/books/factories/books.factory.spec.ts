import { booksFactory } from "./books.factory";
import {it, describe, expect } from "@jest/globals";

describe("UserFactory", () => {
  it("should create the user Domain", () => {
    expect(booksFactory()).toBeDefined();
  });
});
