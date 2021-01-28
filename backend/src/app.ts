import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import authRouter from './api/auth'
import session from 'express-session';

const app = express()
const port = 3000;
app.use(cors());
app.use(bodyParser.json())

app.set('trust proxy', 1)
app.use(session({
  secret: "sessionSecret",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use("/auth", authRouter)

app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`)
})




