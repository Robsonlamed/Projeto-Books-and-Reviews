import { ReviewsRepository } from "../repository/reviews.repository";
import { fakeReviewsData, updatedReviews } from "./fake.review.data";

export const fakeReviewsRepository = {
  getAll: () => Promise.resolve(fakeReviewsData),
  getById: () => Promise.resolve(fakeReviewsData[0]),
  create: () => Promise.resolve(fakeReviewsData[1]),
  update: () => Promise.resolve(updatedReviews),

} as unknown as ReviewsRepository;
