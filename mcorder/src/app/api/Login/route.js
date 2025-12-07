import { MongoClient } from 'mongodb';

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);

  const email = searchParams.get('email');
  const password = searchParams.get('password');

  const client = new MongoClient("mongodb+srv://ciandonnelly81_db_user:1234@cluster0.7f1qrtd.mongodb.net");
  await client.connect();

  const db = client.db("McOrder_App");
  const users = db.collection("Users");

  // Find user by email and password
  const user = await users.findOne({ email, password });

  const valid = !!user; // true if user exists, false otherwise

  return Response.json({ valid: true });
}
