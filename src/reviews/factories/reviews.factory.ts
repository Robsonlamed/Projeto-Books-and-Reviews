import { ReviewsController } from "../controllers/reviews.controllers"
import { ReviewsModel } from "../models/reviews.model"
import { ReviewsRepository } from "../repository/reviews.repository"
import { ReviewsService } from "../service/reviews.service"

export function reviewsFactory() {
  const reviewsRepository = new ReviewsRepository(ReviewsModel)
  const reviewsService = new ReviewsService(reviewsRepository)
  const reviewsController = new ReviewsController(reviewsService)

  return reviewsController
}

export const reviews = reviewsFactory()
