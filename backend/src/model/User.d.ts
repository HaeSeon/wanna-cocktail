import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId,
  id: string,
  password: string,
  name: string,
}