import * as mongoDB from "mongodb"

const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DATABASE_URL);

await client.connect();

const database = client.db(process.env.DATABASE_NAME);

const collections: {customers?: mongoDB.Collection, categories?: mongoDB.Collection} = {};

const customerCollection: mongoDB.Collection = database.collection(process.env.DATABASE_CUSTOMER_COLLECTION);
collections.customers = customerCollection;

const categoryCollection: mongoDB.Collection = database.collection(process.env.DATABASE_CATEGORY_COLLECTION);
collections.categories = categoryCollection

export default collections;
