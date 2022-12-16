import { it, describe, expect } from "@jest/globals";
import { mockRequest } from "../__mocks__/fake.reviews.routes";
import { invalidBodyCreateReview, invalidBodyUpdateReview } from "./review.body.validator";

const req = mockRequest()

const invalidBodyCreateReviewTeste = {
  title: "review Harry Potter e a Pedra Filosofal",
  textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  updateDate: [new Date()],
  score: 3,
  data: 123
}
const isvalidBodyCreateReviewTeste = {
  textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  updateDate: [new Date()],
}

describe ("invalidBodyCreateReview", () => {
  it("should return true if body is invalid", () => {
    req.body = invalidBodyCreateReviewTeste
    const bodyCreateBook = invalidBodyCreateReview(req)
    expect(bodyCreateBook).toEqual(true)
  })
  it("should return false if body is valid", () => {
    req.body = isvalidBodyCreateReviewTeste
    const bodyCreateBook = invalidBodyCreateReview(req)
    expect(bodyCreateBook).toEqual(false)
  })
})

const invalidBodyUpdateReviewTeste = {
  title: "review Harry Potter e a Pedra Filosofal",
  textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  updateDate: [new Date()],
  score: 3,
  data: 123
}
const isvalidBodyUpdateReviewTeste = {
  textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  updateDate: [new Date()],
}

describe ("invalidBodyUpdateReview", () => {
  it("should return true if body is invalid", () => {
    req.body = invalidBodyUpdateReviewTeste
    const bodyCreateBook = invalidBodyUpdateReview(req)
    expect(bodyCreateBook).toEqual(true)
  })
  it("should return false if body is valid", () => {
    req.body = isvalidBodyUpdateReviewTeste
    const bodyCreateBook = invalidBodyUpdateReview(req)
    expect(bodyCreateBook).toEqual(false)
  })
})