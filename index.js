import e from "express";
import cors from 'cors'
import { coursesRouter } from "./src/routes/cousesRoutes.js";
import { lessonsRouter } from "./src/routes/lessonsRoutes.js";
import { signRouter } from "./src/routes/signRoutes.js";
import { loginRoutes } from "./src/routes/loginRoute.js";

let app = e();
let conectivty = process.env.PORT || 3001

app.use(cors({
credentials: true,
}))
app.use(e.json())

app.use('/courses', coursesRouter);
app.use('/lessons', lessonsRouter);
app.use('/sign', signRouter);
app.use('/log', loginRoutes)

app.listen(conectivty, () => {
    console.log(`Listening to port: http://localhost:${conectivty}`)
})