import {it, describe, expect } from "@jest/globals";
import { reviewsFactory } from "./reviews.factory";

describe("UserFactory", () => {
  it("should create the user Domain", () => {
    expect(reviewsFactory()).toBeDefined();
  });
});
