import { Request } from "express"

export function invalidBodyCreateBook(req: Request) {
  const createBook = {
    title: req.body.title,
    releaseDate: req.body.releaseDate,
    language: req.body.language, 
    status: req.body.status,
    reviewId: req.body.reviewId,
    author: req.body.author,
  };

  const jsonBook = JSON.stringify(createBook)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}

export function invalidBodyUpdateLanguageAndReviewIdBook(req: Request) {
  const updateLanguageAndReviewId = {
    language: req.body.language, 
    reviewId: req.body.reviewId,
  };

  const jsonBook = JSON.stringify(updateLanguageAndReviewId)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}

export function invalidBodyUpdateStatusBook(req: Request) {
  const updateStatus = {
    status: req.body.status,
  };

  const jsonBook = JSON.stringify(updateStatus)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}

