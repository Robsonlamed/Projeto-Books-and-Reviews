import express from 'express' 
import { booksRoutes } from './books/routes/books.routes'
import { connectMongo } from './db/mongo.connection'
import { reviewsRoutes } from './reviews/routes/reviews.routes'

connectMongo()

const app = express()
const port = 5555

app.use(express.json())

app.use("/books", booksRoutes)
app.use("/reviews", reviewsRoutes)
app.listen(port, () => console.log('listening on port ' + port))
