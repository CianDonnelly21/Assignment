import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://ciandonnelly81_db_user:YOUR_PASSWORD@cluster0.7f1qrtd.mongodb.net';
const dbName = 'McOrder_App';

export async function GET() {
  let client;

  try {
    client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('orders'); // make sure this matches your collection

    const orders = await collection.find({}).toArray();

    return new Response(JSON.stringify({ orders }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ orders: [], error: err.message }),
      { headers: { 'Content-Type': 'application/json' }, status: 500 }
    );
  } finally {
    await client?.close();
  }
}
