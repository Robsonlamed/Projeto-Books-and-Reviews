import { Router } from 'express'
import { reviews } from '../factories/reviews.factory'

const express = require('express')
const app = express()
 
app.use(express.json())

export const reviewsRoutes = Router()

reviewsRoutes.get("/", reviews.getAll.bind(reviews))
reviewsRoutes.get("/:id", reviews.getById.bind(reviews))
reviewsRoutes.post("/", reviews.create.bind(reviews))
reviewsRoutes.put("/:id", reviews.update.bind(reviews))


