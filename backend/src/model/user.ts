import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId,
  email: string,
  hashedPassword: string,
  name: string,
}

export interface filteredUser {
  _id: ObjectId,
  email: string,
  name: string,
}

declare module "express-session" {
  interface Session {
    user: filteredUser
  }
}

export const filteredUser = (user: User) => {
  return {
    _id: user._id,
    email: user.email,
    name: user.name
  }
}