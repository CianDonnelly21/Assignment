export async function GET(req, res) {

  const { searchParams } = new URL(req.url);

  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const address1 = searchParams.get('address1');
  const address2 = searchParams.get('address2');
  const address3 = searchParams.get('address3');
  const password = searchParams.get('password');

  const { MongoClient } = require('mongodb');

  const client = new MongoClient("mongodb+srv://ciandonnelly81_db_user:1234@cluster0.7f1qrtd.mongodb.net");
  await client.connect();

  const db = client.db("McOrder_App");
  const users = db.collection("Users");

  // Check if email exists
  const existing = await users.findOne({ email });

  if (existing) {
    return Response.json({ Valid: false, message: "Email already used" });
  }

  // Insert user
  await users.insertOne({
    firstName,
    lastName,
    email,
    address1,
    address2,
    address3,
    password,
  });

  return Response.json({ Valid: true });
}
