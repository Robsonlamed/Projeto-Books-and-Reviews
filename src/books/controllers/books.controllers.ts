import { StatusCode } from "../../utils/status.code";
import { Request, Response } from "express";
import { BooksService } from "../service/books.service";
import { invalidBodyCreateBook, invalidBodyUpdateLanguageAndReviewIdBook, invalidBodyUpdateStatusBook } from "../utils/books.body.validator";
import { invalidBodyError } from "../../utils/error.handler";

export class BooksController { 
  constructor(private readonly booksService: BooksService) {}

  async getAll(req: Request, res: Response) {
    
    const { author } = req.query;

    if(author){
    const bookAuthor = await this.booksService.getAll(author as string)
    return res.status(StatusCode.OK).json(bookAuthor);
    }
 

    const result = await this.booksService.getAll(author as string);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;

    const result = await this.booksService.getById(id);

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async create(req: Request, res: Response) {

    if (invalidBodyCreateBook(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return; 
    }

    const { body } = req

    const result = await this.booksService.create(body);
    if ("promiseError" in result) {
      // console.log(result)
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    return res.status(StatusCode.CREATED).json(result);
  }

  async update(req: Request, res: Response) {
   
    if (invalidBodyUpdateLanguageAndReviewIdBook(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }

    const { id } = req.params;
    const { body } = req;

    const result = await this.booksService.update(id, body);

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

  async updateStatus(req: Request, res: Response) {

    if (invalidBodyUpdateStatusBook(req)) {
      res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
      return;
    }
    
    const { id } = req.params;
    const { body } = req;

    const result = await this.booksService.updateStatus(id, body)
    console.log("🚀 ~ file: books.controllers.ts:82 ~ BooksController ~ updateStatus ~ result", result)

    if ("promiseError" in result) {
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
    }

    if ("invalidIdError" in result) {
      return res.status(StatusCode.BAD_REQUEST).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  }

}
