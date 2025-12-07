import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://ciandonnelly81_db_user:1234@cluster0.7f1qrtd.mongodb.net';
const client = new MongoClient(url);
const dbName = 'McOrder_App';

export async function GET() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('Orders');

  const orders = await collection.find({}).toArray();

  return new Response(JSON.stringify({ orders }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
