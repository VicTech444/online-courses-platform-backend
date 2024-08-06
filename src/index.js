import e from "express";
import cors from 'cors'

let app = e();
let conectivty = process.env.PORT || 3001

app.use(cors({

}))

app.get('/test', (req, res) => {
    res.json({message: "succesfully sent the resposne"})
})

app.listen(conectivty, () => {
    console.log(`Listening to port: http://localhost:${conectivty}`)
})