import { Model } from "mongoose";
import { Books } from "../models/books.model";
import { fakeBooksData, updatedBook } from "./fake.books.data";
import { jest } from "@jest/globals"

export const fakeBooksModel = {
  find: (param) => {
    if(param){
      return Promise.resolve(fakeBooksData[0])
    } 
    return Promise.resolve(fakeBooksData)
  },

  findById: jest.fn().mockImplementation(()=> (
    {
        populate: jest.fn().mockImplementation(()=> fakeBooksData[0])
    }
)),

  create: () => Promise.resolve(fakeBooksData[0]),
  findByIdAndUpdate: () => Promise.resolve(updatedBook), 
} as unknown as Model<Books>;

/*
Quando vamos tipar uma bibilioteca de terceeiros, com tipos muito complexos
caso isso venha a atrapalhar o desenvolvimento, podemos usar o unknown

as unknown as Model<Pet>
as unknown as CustomType

unkown é desconhecido

O unknown é um tipo que não é nem number,
nem string, nem boolean, nem nada
*/
