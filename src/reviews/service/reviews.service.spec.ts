import { jest, describe, it, expect } from "@jest/globals";
import { invalidIdError } from "../../utils/error.handler";
import { fakeId, fakeReviewsData, updatedReviews } from "../__mocks__/fake.review.data";
import { fakeReviewsRepository } from "../__mocks__/fake.reviews.repository";
import { ReviewsService } from "./reviews.service";

const reviewService = new ReviewsService(fakeReviewsRepository)

describe("ReviewsService", () => {
  describe("getAll", () => {
    it("should call Repository.getAll", async () => {
      //criamos um spy que observa o fakeReviewsRepository
      const spy = jest.spyOn(fakeReviewsRepository, "getAll")

      //chamamos o método getAll do service
      await reviewService.getAll();

      //verificamos se o método foi chamado
      expect(spy).toHaveBeenCalled()
    });
    it("should return a list of reviews", async () => {
      const reviews = await reviewService.getAll()
      expect(reviews).toEqual(fakeReviewsData)
    });
    it("should return an promiseError", async () => {
      //simulando uma situação de erro
      jest.spyOn(fakeReviewsRepository, "getAll").mockRejectedValueOnce("Error")

      //atribui esse erro a uma consntante
      const error = await reviewService.getAll()

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
      const spy = jest.spyOn(fakeReviewsRepository, "getById")
      await reviewService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a review", async () => {
      const review = await reviewService.getById(fakeId)
      expect(review).toEqual(fakeReviewsData[0]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewsRepository, "getById").mockRejectedValueOnce("Error")
      const error = await reviewService.getById(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await reviewService.getById("invalidId")
      expect(error).toEqual(invalidIdError("invalidId"))
    });
  });

  describe("create", () => {
    it("should call Repository.create", async () => {
      const spy = jest.spyOn(fakeReviewsRepository, "create")
      await reviewService.create(fakeReviewsData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a review", async () => {
      const review = await reviewService.create(fakeReviewsData[1])
      expect(review).toEqual(fakeReviewsData[1]);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewsRepository, "create").mockRejectedValueOnce("Error")
      const error = await reviewService.create(fakeReviewsData[1]);
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
      const spy = jest.spyOn(fakeReviewsRepository, "update")
      await reviewService.update(fakeId, updatedReviews);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a review", async () => {
      const review = await reviewService.update(fakeId, updatedReviews)
      expect(review).toEqual(updatedReviews);
    });
    it("should return an promiseError", async () => {
      jest.spyOn(fakeReviewsRepository, "update").mockRejectedValueOnce("Error")
      const error = await reviewService.update(fakeId, updatedReviews)
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await reviewService.update("invalidId", updatedReviews)
      expect(error).toEqual(invalidIdError("invalidId"))
    });
  });

});
