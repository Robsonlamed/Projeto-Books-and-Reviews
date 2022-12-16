import { it, describe, expect } from "@jest/globals";
import { mockRequest } from "../__mocks__/fake.books.routes"
import { invalidBodyCreateBook, invalidBodyUpdateLanguageAndReviewIdBook, invalidBodyUpdateStatusBook } from "./books.body.validator"

const req = mockRequest()

const invalidBodyCreateBookTeste = {
  title: "Harry Potter e a Pedra Filosofal",
  releaseDate: "1997",
  language: ['português', 'inglês'],
  status: true,
  data: 123
}
const isvalidBodyCreateBookTeste = {
  title: "Harry Potter e a Pedra Filosofal",
  releaseDate: "1997",
  language: ['português', 'inglês'],
  status: true,
  author: "J. K. Rowling",
}

describe ("invalidBodyCreateBook", () => {
  it("should return true if body is invalid", () => {
    req.body = invalidBodyCreateBookTeste
    const bodyCreateBook = invalidBodyCreateBook(req)
    expect(bodyCreateBook).toEqual(true)
  })
  it("should return false if body is valid", () => {
    req.body = isvalidBodyCreateBookTeste
    const bodyCreateBook = invalidBodyCreateBook(req)
    expect(bodyCreateBook).toEqual(false)
  })
})

const invalidBodyUpdateBookTeste = {
  title: "Harry Potter e a Pedra Filosofal",
  releaseDate: "1997",
  language: ['português', 'inglês'],
  status: true,
  data: 123
}
const isvalidBodyUpdateBookTeste = {
  language: ['português', 'inglês'],
}

describe ("invalidBodyUpdateLanguageAndReviewIdBook", () => {
  it("should return true if body is invalid", () => {
    req.body = invalidBodyUpdateBookTeste
    const bodyUpdateBook = invalidBodyUpdateLanguageAndReviewIdBook(req)
    expect(bodyUpdateBook).toEqual(true)
  })
  it("should return false if body is valid", () => {
    req.body = isvalidBodyUpdateBookTeste
    const bodyUpdateBook = invalidBodyUpdateLanguageAndReviewIdBook(req)
    expect(bodyUpdateBook).toEqual(false)
  })
})

export const invalidBodyUpdateStatusBookTeste = {
  title: "Harry Potter e a Pedra Filosofal",
  releaseDate: "1997",
  language: ['português', 'inglês'],
  status: true,
  data: 123
}
const isvalidBodyUpdateStatusBookTeste = {
  status: true,
}

describe ("invalidBodyUpdateStatusBook", () => {
  it("should return true if body is invalid", () => {
    req.body = invalidBodyUpdateStatusBookTeste
    const bodyUpdateBook = invalidBodyUpdateStatusBook(req)
    expect(bodyUpdateBook).toEqual(true)
  })
  it("should return false if body is valid", () => {
    req.body = isvalidBodyUpdateStatusBookTeste
    const bodyUpdateBook = invalidBodyUpdateStatusBook(req)
    expect(bodyUpdateBook).toEqual(false)
  })
})
