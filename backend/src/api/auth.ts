import express from 'express'
import { db } from '../utils/db';
import { hash, verify } from "argon2"
import { HttpError } from '../utils/error'
import { asyncHandlerWrapper, AsyncRequestHandler } from '../utils/async-handler'
import { filteredUser } from '../model/User';


const login: AsyncRequestHandler = async (req, res) => {
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
  console.log(user)
  req.session!.user = filteredUser(user)
  res.json(user)
}


const signup: AsyncRequestHandler = async (req, res) => {
  const { email, password, name } = req.body
  const user = await db.userCollection().findOne({ email: email })
  if (user) {
    throw new HttpError(res, 400, "이미 존재하는 email입니다.")
  }
  const hashedPassword = await hash(password)
  await db.userCollection().insertOne({ email, hashedPassword, name })
  res.status(204).send()
}


const authRouter = express.Router()
authRouter.post("/login", asyncHandlerWrapper(login))
authRouter.post("/signup", asyncHandlerWrapper(signup))
authRouter.get('/auth/token')
authRouter.get('/auth/logout')
authRouter.get('change-password')
export default authRouter