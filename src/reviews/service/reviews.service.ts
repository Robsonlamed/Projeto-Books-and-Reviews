import {
  CustomErrors,
  invalidIdError,
  promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";
import { Review } from "../models/reviews.model";
import { ReviewsRepository } from "../repository/reviews.repository";

export class ReviewsService {
  constructor(private readonly reviewsRepository: ReviewsRepository,) {}

  async getAll(): Promise<Review[] | CustomErrors> {
    try {
      const review = await this.reviewsRepository.getAll();
      
      return review;
    } catch (error) {
      return promiseError(error);
    }
  }

  async getById(id: string): Promise<Review | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const review = await this.reviewsRepository.getById(id);
      return review;
    } catch (error) {
      return promiseError(error);
    }
  }

  async create(review: Review, booksId: string): Promise<Review | CustomErrors> {
    try {
      const formateedReview = {...review, updateDate: [new Date()]}

      const newReview = await this.reviewsRepository.create(formateedReview);
      return newReview;
    } catch (error) {
      return promiseError(error);
    }
  }

  async update(id: string, review: Review): Promise<Review | CustomErrors> {
    if (!isIdValid(id)) {
      return invalidIdError(id);
    }

    try {
      const updateReview = await this.reviewsRepository.update(id, review);
      return updateReview;
    } catch (error) {
      return promiseError(error);
    }
  }

}
