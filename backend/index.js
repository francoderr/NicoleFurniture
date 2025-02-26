import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/routes.js'
import { configDotenv } from 'dotenv'

const app = express()

app.use(cors());

configDotenv()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json())  
app.use('/', routes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    })
    .catch((error) => {
        console.log(error.message)
    })
