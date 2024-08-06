import e from "express";
import cors from 'cors'
import { coursesRouter } from "./src/routes/cousesRoutes.js";

let app = e();
let conectivty = process.env.PORT || 3001

app.use(cors({

}))

app.use('/courses', coursesRouter)

app.listen(conectivty, () => {
    console.log(`Listening to port: http://localhost:${conectivty}`)
})