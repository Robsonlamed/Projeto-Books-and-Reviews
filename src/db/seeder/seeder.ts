import { BooksModel } from "../../books/models/books.model";
import { ReviewsModel } from "../../reviews/models/reviews.model";
import { bookFactory } from "./__mocks__/books.seeder";
import { reviewsFactory } from "./__mocks__/reviews.seeder";

export async function seeder() {
  try {
      const review = reviewsFactory()
      await ReviewsModel.create(review) 
      console.log("DB successfully seeded");
      console.log("Review adicionados ao banco de dados");

  } catch (error) {
      console.log(`failed to seeder Books`);
      console.log(error);
  } 

const reviews = await ReviewsModel.find()
const reviewId = reviews[reviews.length - 1]

    try{
       const book = bookFactory(reviewId._id)
        await BooksModel.create(book);
        console.log(`Book adicionados ao banco de dados`)
    } catch(error){
        console.log(`failed to seeder Books`);
        console.log(error);
    }
}


