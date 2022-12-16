import { ReviewsService } from "../service/reviews.service";
import { fakeReviewsData, updatedReviews } from "./fake.review.data";

export const fakeReviewService = {
  getAll: () => Promise.resolve(fakeReviewsData),
  getById: () => Promise.resolve(fakeReviewsData[0]),
  getByAuthor: () => Promise.resolve(fakeReviewsData[0]),
  create: () => Promise.resolve(fakeReviewsData[1]),
  update: () => Promise.resolve(updatedReviews),
} as unknown as ReviewsService;

