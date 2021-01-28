import mongodb from 'mongodb'
import assert from 'assert'
import { User } from '../model/User'

const url = "mongodb://localhost:27017/wanna-cocktail-db"

class Database {
  private client: mongodb.MongoClient | undefined;

  constructor() {
    mongodb.connect(url, { useUnifiedTopology: true }, (err, client) => {
      assert.equal(null, err);
      console.log("Connected correctly to mongodb server");
      this.client = client
    });
  }

  userCollection(): mongodb.Collection<User> {
    if (!this.client) {
      throw `db has not initialized`
    }
    return this.client.db("wanna-cocktail-db").collection("users")
  }

}

export const db = new Database()