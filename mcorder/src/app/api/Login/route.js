export async function GET(req, res) {


  console.log("in the api page")


  const { searchParams } = new URL(req.url)

  const firstName = searchParams.get('firstName')
  const lastName = searchParams.get('lastName')
  const email = searchParams.get('email')
  const address1 = searchParams.get('address1')
  const address2 = searchParams.get('address2')
  const address3 = searchParams.get('address3')
  const password = searchParams.get('password')
  const confirmPassword = searchParams.get('confirmPassword')

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(address1);
  console.log(address2);
  console.log(address3);
  console.log(password);
  console.log(confirmPassword);



 // =================================================

  const { MongoClient } = require('mongodb');


  const url = 'mongodb+srv://ciandonnelly81_db_user:1234@cluster0.7f1qrtd.mongodb.net/?appName=Cluster0';

  const client = new MongoClient(url);




  const dbName = 'McOrder_App';


  await client.connect();

  console.log('Connected successfully to server');

  const db = client.db(dbName);

  const collection = db.collection('Users');



  const allUsers = await collection.find({}).toArray();

  console.log("All Users:", allUsers);

  const findResult = await collection.find({firstName: firstName, lastName: lastName, email:email, address1: address1, address2: address2, address3: address3, password: password, confirmPassword: confirmPassword}).toArray();

  console.log('Found documents =>', findResult);


  let valid = findResult.length > 0;


 //==========================================================




  // at the end of the process we need to send something back.

  return Response.json({ Users: allUsers, login: valid})

}


