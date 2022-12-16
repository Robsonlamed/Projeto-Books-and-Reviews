import { jest, it, describe, expect } from "@jest/globals";
import { fakeId, fakeReviewsData, updatedReviews } from "../__mocks__/fake.review.data";
import { fakeReviewsModel } from "../__mocks__/fake.reviews.model";
import { ReviewsRepository } from "./reviews.repository";

const reviewsRepository = new ReviewsRepository(fakeReviewsModel);

describe("ReviewsRepository", () => {
  describe("getAll", () => {
    it("should return a list of reviews", async () => {
      const review = await reviewsRepository.getAll();
      expect(review).toEqual(fakeReviewsData);
    });
    it("should return an empty array", async () => {
      jest.spyOn(fakeReviewsModel, "find").mockResolvedValueOnce([]);

      const review = await reviewsRepository.getAll();
      expect(review).toEqual([]);
    });
  });
  describe("getById", () => {
    it("should return a review", async () => {
      const book = await reviewsRepository.getById(fakeId);
      expect(book).toEqual(fakeReviewsData[0]);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeReviewsModel, "findById").mockResolvedValueOnce(null);

      const book = await reviewsRepository.getById(fakeId);
      expect(book).toEqual({});
    });
  });
  describe("create", () => {
    it("should create a review", async () => {
      const newBook = await reviewsRepository.create(fakeReviewsData[0]);
      expect(newBook).toEqual(fakeReviewsData[0]);
    });
  });
  describe("update", () => {
    it("should update a review new text", async () => {
      jest.spyOn(fakeReviewsModel, "findById").mockResolvedValueOnce(updatedReviews);

      const book = await reviewsRepository.update(fakeId, fakeReviewsData[0]);
      expect(book).toEqual(updatedReviews);
    });
    it("should update a review", async () => {
      jest.spyOn(fakeReviewsModel, "findById").mockResolvedValueOnce(updatedReviews);
      jest.spyOn(fakeReviewsModel, "findByIdAndUpdate").mockResolvedValueOnce(updatedReviews);

      const book = await reviewsRepository.update(fakeId, fakeReviewsData[0]);
      expect(book).toEqual(updatedReviews);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeReviewsModel, "findById").mockResolvedValueOnce(updatedReviews);

      jest.spyOn(fakeReviewsModel, "findByIdAndUpdate").mockResolvedValueOnce(null);

      const book = await reviewsRepository.update(fakeId, fakeReviewsData[0]);
      expect(book).toEqual({});
    });
  });
});
