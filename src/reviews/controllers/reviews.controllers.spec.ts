import { StatusCode } from "../../utils/status.code";
import { invalidIdError, promiseError } from "../../utils/error.handler";
import { jest, it, describe, expect } from "@jest/globals";
import { ReviewsController } from "./reviews.controllers";
import { fakeReviewService } from "../__mocks__/fake.reviews.service";
import { fakeId, fakeReviewsData, fakeReviewsInvalidBody } from "../__mocks__/fake.review.data";
import { mockRequest, mockResponse } from "../__mocks__/fake.reviews.routes";

const reviewsController = new ReviewsController(fakeReviewService);

const req = mockRequest();
const res = mockResponse();

describe("ReviewsController", () => {
  describe("getAll", () => {
    it("should return all reviews", async () => {
      await reviewsController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewsData);
    });
    it("should return status code 200", async () => {
      await reviewsController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });

    it("should return a promiseError", async () => {
      jest
        .spyOn(fakeReviewService, "getAll")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewsController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("getById", () => {
    it("should return a review", async () => {
      req.params.id = fakeId;
      await reviewsController.getById(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewsData[0]);
    });
  
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      await reviewsController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      jest
        .spyOn(fakeReviewService, "getById")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewsController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      jest
        .spyOn(fakeReviewService, "getById")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));
      await reviewsController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

  describe("create", () => {
    it("should create a review", async () => {
      req.body = fakeReviewsData[1];
      await reviewsController.create(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewsData[1]);
    });
    it("should return status code 400", async () => {
      req.body = fakeReviewsInvalidBody;
      await reviewsController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
    it("should return status code 201", async () => {
      req.body = fakeReviewsData[1];
      await reviewsController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
    });
    it("should return a promiseError", async () => {
      req.body = fakeReviewsData[1];
      jest
        .spyOn(fakeReviewService, "create")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewsController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
  });

  describe("update", () => {
    it("should update a review", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewsData[1];
      await reviewsController.update(req, res);
      expect(res.json).toHaveBeenCalledWith(fakeReviewsData[1]);
    });
    it("should return status code 400", async () => {
      req.body = fakeReviewsInvalidBody;
      await reviewsController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
    it("should return status code 200", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewsData[1];
      await reviewsController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
    });
    it("should return a promiseError", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewsData[1];
      jest
        .spyOn(fakeReviewService, "update")
        .mockImplementation(() => Promise.resolve(promiseError("error")));

      await reviewsController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
    });
    it("should return a invalidIdError", async () => {
      req.params.id = fakeId;
      req.body = fakeReviewsData[1];
      jest
        .spyOn(fakeReviewService, "update")
        .mockImplementation(() => Promise.resolve(invalidIdError("id")));

      await reviewsController.update(req, res);
      expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
    });
  });

});
