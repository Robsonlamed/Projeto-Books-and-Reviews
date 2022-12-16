import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { ReviewsService } from "../service/reviews.service";
import { invalidBodyCreateReview, invalidBodyUpdateReview } from "../utils/review.body.validator";
import { invalidBodyError } from "../../utils/error.handler";

export class ReviewsController { 
  constructor(private readonly reviewsService: ReviewsService) {}

  async getAll(req: Request, res: Response) {
    
    const result = await this.reviewsService.getAll();

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.reviewsService.getById(id);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {

    if (invalidBodyCreateReview(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const { body } = req

    const result = await this.reviewsService.create(body, ""); 
    if ("promiseError" in result) {
      // console.log(result)
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {

    if (invalidBodyUpdateReview(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const { id } = req.params;
    const { body } = req;

    const result = await this.reviewsService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

}
