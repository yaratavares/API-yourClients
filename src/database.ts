import * as mongoDB from "mongodb"

const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DATABASE_URL);

await client.connect();

const database = client.db(process.env.DATABASE_NAME);

const collections: {customers?: mongoDB.Collection} = {};
const customerCollection: mongoDB.Collection = database.collection(process.env.DATABASE_CUSTOMER_COLLECTION)
collections.customers = customerCollection
//console.log(`Successfully connected to database: ${database.databaseName} and collection: ${customerCollection.collectionName}`)
export default collections;
