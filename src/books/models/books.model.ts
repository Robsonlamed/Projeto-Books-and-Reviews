import { Schema, model, Model, InferSchemaType } from "mongoose";

const booksSchema = new Schema({
    title: {
      type: String,
      maxlength: 24,
      required: true,
      unique: true
    }, 
    releaseDate: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      maxlength: 18,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    reviewId: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
    author: {
      type: String,
      maxlength: 24,
      required: true,
      index: true, 
      unique: true,
    },
  }, {
    timestamps: {createdAt: true, updatedAt: false}
  });
  
  export type Books = InferSchemaType<typeof booksSchema>;
  
  
  export const BooksModel: Model<Books> = model("Books", booksSchema);