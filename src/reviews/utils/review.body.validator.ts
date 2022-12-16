import { Request } from "express"

export function invalidBodyCreateReview(req: Request) {
  const updateStatus = {
    title: req.body.title,
    textReview: req.body.textReview,
    updateDate: req.body.updateDate, 
    score: req.body.score,
  };

  const jsonBook = JSON.stringify(updateStatus)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}

export function invalidBodyUpdateReview(req: Request) {
  const updateStatus = {
    textReview: req.body.textReview,
    updateDate: req.body.updateDate,
  };

  const jsonBook = JSON.stringify(updateStatus)
  const jsonBody = JSON.stringify(req.body)

  if (jsonBook !== jsonBody) {
    return true
  }

  return false
}