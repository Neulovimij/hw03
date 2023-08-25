import express, {Request, Response} from "express";

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listenning on port ${port}`)
})