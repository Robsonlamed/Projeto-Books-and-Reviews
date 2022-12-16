import { Model } from "mongoose";
import { Review } from "../models/reviews.model";
import { fakeReviewsData, updatedReviews } from "./fake.review.data";

export const fakeReviewsModel = {
  find: (param) => {
    if(param){
      return Promise.resolve(fakeReviewsData[0])
    }
    return Promise.resolve(fakeReviewsData)
  },
  findById: () => Promise.resolve(fakeReviewsData[0]),
  create: () => Promise.resolve(fakeReviewsData[0]),
  findByIdAndUpdate: () => Promise.resolve(updatedReviews),
} as unknown as Model<Review>;
