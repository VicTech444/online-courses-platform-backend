import e from "express";
import cors from 'cors'

let app = e();
let conectivty = process.env.PORT || 3001

app.use(cors({

}))

app.get('/', (req, res) => {
    res.send({message: "succesfully sent the resposne"})
})

app.listen(conectivty, () => {
    console.log(`Listening to port: http://localhost:${conectivty}`)
})