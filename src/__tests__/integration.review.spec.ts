import { faker } from "@faker-js/faker";
import { afterAll, beforeAll, describe, it, expect } from "@jest/globals";
import express from "express";
import supertest from "supertest";
import { reviewsRoutes } from "../reviews/routes/reviews.routes";
import { connectMongo, mongoDisconnect } from "../db/mongo.connection";
import { booksRoutes } from "../books/routes/books.routes";

const app = express();
app.use(express.json());
app.use("/reviews", reviewsRoutes);
app.use("/books", booksRoutes);

const testReviewsCreate = {
  title: faker.lorem.words(2),
  textReview: [faker.lorem.paragraphs()],
  updateDate: [new Date()],
  score: 3,
};

const testReviewsUpdate = {
  textReview: [faker.lorem.paragraph()],
  updateDate: [new Date()],
};

const testBooksCreate = {
  title: faker.lorem.words(2),
  releaseDate: new Date(),
  language: ["portugues", "ingles"],
  status: true,
  author: faker.name.fullName(),
};

const testBooksUpdate = {
  language: ["japones"],
};

const testBooksUpdateStatus = {
  status: true,
};

beforeAll(() => {
  connectMongo(true);
});

afterAll(async () => {
  await mongoDisconnect();
});

describe("Reviews", () => {
  it("should create review", async () => {
    const response = await supertest(app)
      .post("/reviews")
      .send(testReviewsCreate);
    expect(response.status).toBe(201);
  });

  it("should get all reviews", async () => {
    const response = await supertest(app).get("/reviews");
    expect(response.status).toBe(200);
  });

  it("should get review by id", async () => {
    const getAll = await supertest(app).get("/reviews");
    const id = getAll.body[0]._id;
    const response = await supertest(app).get(`/reviews/${id}`);
    expect(response.status).toBe(200);
  });

  

  it("should update review", async () => {
    const getAll = await supertest(app).get("/reviews");
    const updateReview = getAll.body[getAll.body.length - 1];
    const response = await supertest(app)
      .put(`/reviews/${updateReview._id}`)
      .send(testReviewsUpdate);
    expect(response.status).toBe(200);
  });
});

describe("Books", () => {
  it("should get all books", async () => {
    const response = await supertest(app).get("/books");
    expect(response.status).toBe(200);
  });
  it("should getByAuthor books", async () => {
    const response = await supertest(app).get("/books?author=authorTeste");
    expect(response.status).toBe(200);
  });
  it("should get books by id", async () => {
    const getAll = await supertest(app).get("/books");
    const id = getAll.body[0]._id;
    const response = await supertest(app).get(`/books/${id}`);
    expect(response.status).toBe(200);
  });

  it("should create books", async () => {
    const response = await supertest(app).post("/books").send(testBooksCreate);
    expect(response.status).toBe(201);
  });

  it("should update books", async () => {
    const getAll = await supertest(app).get("/books");
    const updateReview = getAll.body[getAll.body.length - 1];
    const response = await supertest(app)
      .put(`/books/${updateReview._id}`)
      .send(testBooksUpdate);
    expect(response.status).toBe(200);
  });

  it("should update status books no content", async () => {
    const getAll = await supertest(app).get("/books");
    const updateReview = getAll.body[getAll.body.length - 1];
    const response = await supertest(app)
      .put(`/books/${updateReview._id}/status`)
      .send(testBooksUpdateStatus);
    expect(response.status).toBe(200);
  });
});
