import express from 'express'
import { db } from './db';

const app = express()
const port = 3000;
const url = "mongodb://localhost:27017/wanna-cocktail-db"

// cors setting
// import cors from "cors"
const cors = require("cors")
app.use(cors());
console.log(`cors enabled`)

// yup  사용 session 사용 argon2 사용 jwt 

app.post('/auth/login', async (req, res) => {
  console.log("hi")
  // findOne
  const result = await db.userCollection().aggregate([
    {
      $match:
      {
        id: "ogu",
        password: "1234"
      }
    }
  ]).toArray()
  console.log(result)
  res.json(result)
})

app.get('/auth/token')
app.get('/auth/logout')
app.get('/auth/signin')
app.get('change-password')

app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`)
})

