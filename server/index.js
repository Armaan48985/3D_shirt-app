import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleroute from './routes/dalle.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({limig: "50mb"}))

app.use('/armaan', dalleroute)

app.get('/', (req, res) => {
    res.status(200).json({message: "hello from dale"})
})

app.listen(8080, () => console.log("you are on port 8080"))
