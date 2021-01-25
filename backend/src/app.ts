import express, { Response } from 'express'
import { db } from './db';
import cors from "cors"
import bodyParser from 'body-parser'
import { hash, verify } from "argon2"


const app = express()
const port = 3000;

app.use(cors());
app.use(bodyParser.json())

app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body
  const user = await db.userCollection().findOne({ email })
  if (!user) {
    throw new HttpError(res, 400, "email이 존재하지 않습니다.")
  }
  const isVerifiedPassword = async (hashedPassword: string, password: string) => {
    return await verify(hashedPassword, password)
  }
  if (!await isVerifiedPassword(user.hashedPassword, password)) {
    throw new HttpError(res, 400, `비밀번호가 틀립니다.`)
  }
  res.json(user)
})


app.post('/auth/signup', async (req, res) => {
  const { email, password, name } = req.body
  const user = await db.userCollection().findOne({ email: email })
  if (user) {
    throw new HttpError(res, 400, "이미 존재하는 email입니다.")
  }
  const hashedPassword = await hash(password)
  await db.userCollection().insertOne({ email, hashedPassword, name })
  res.status(204).send()
})

app.get('/auth/token')
app.get('/auth/logout')
app.get('change-password')

app.listen(port, () => {
  console.log(`서버가 ${port}에서 동작중입니다.`)
})


class HttpError extends Error {
  constructor(res: Response, code: number, message: string) {
    super(message)
    res.status(code).send(message)
  }
}

