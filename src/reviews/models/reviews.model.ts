import { Schema, model, Model, InferSchemaType } from "mongoose";

const reviewSchema = new Schema({
    title: {
      type: String,
      maxlength: 24,
      required: true,
      unique: true
    }, 
    textReview: {
      type: [String],
      maxlength: 200,
      required: true,
    },
    updateDate: {
      type: [Date],
      required: true,
    },
    score: {
      type: Number,
      max: 5,
      min: 1,
      required: true,
    },
  }, {
    timestamps: {createdAt: true, updatedAt: false}
  });
  
  export type Review = InferSchemaType<typeof reviewSchema>; 
  
  
  export const ReviewsModel: Model<Review> = model("Review", reviewSchema);