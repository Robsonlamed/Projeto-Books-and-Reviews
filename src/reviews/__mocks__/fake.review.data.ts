import { loremIpsum } from "lorem-ipsum";
import { Review } from "../models/reviews.model";



//esse é o mock de um ID padrão da mongo 
export const fakeId = "332130d71623c49bf7b1c7e9"

//esse é o mock do banco de dados
export const fakeReviewsData: Review[] = [
  {
    title: "review Harry Potter e a Pedra Filosofal",
    textReview: ["Lorem ipsum dolor sit amet, consectetur adipis eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    updateDate: [new Date()],
    score: 3,
  },
  {
    title: "review Harry Potter e a Pedra",
    textReview: ["Lorem ipsum dolor sit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    updateDate: [new Date()],
    score: 3,
  },
  {
    title: "review Harry Potter",
    textReview: ["Lorem insectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    updateDate: [new Date()],
    score: 3,
  },
]

export const fakeReviewsInvalidBody = 
  {
    title: "Harry Potter e a Pedra Filosofal",
    textReview: ["Long elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  }

export const updatedReviews: Review = {
  title: "review Harry Potter e a Camara",
  textReview: ["Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  updateDate: [new Date()],
  score: 3,
}