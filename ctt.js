const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://Srikarmara20:Srikarmara20@me.mlmyhmg.mongodb.net/';

async function getClient() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  return client
}

async function query() {
  try {
    // Send a ping to confirm a successful connection
    database = "JPMC";
    collection = "userData";
    const client = await getClient();
    const user = await client.db(database).collection(collection).find({ Target:10000 }).toArray();
    await client.close();
    return user;
  } catch (e) {
    console.log(e)
  }
}
module.exports.data = query; 


async function insert(uname,email,password) {
  try {
    // Send a ping to confirm a successful connection
    database = "JPMC";
    collection = "userData";
    const client = await getClient();
    const user = await client.db(database).collection(collection).insertOne({username:uname,Email:email,Password:password});
    await client.close();
  } catch (e) {
    console.log(e)
  }
}
module.exports.iuser = insert;




async function CHECK(uname,password) {
  try {
    // Send a ping to confirm a successful connection
    database = "JPMC";
    collection = "userData";
    const client = await getClient();
    const user = await client.db(database).collection(collection).find({username:uname,Password:password}).toArray();
    await client.close();
    return user;
  } catch (e) {
    console.log(e)
  }
}
module.exports.icheck = CHECK;

async function insertEvent(url,title,des) {
  try{
    database = "JPMC";
    collection = "events";
    const client = await getClient();
    const user = await client.db(database).collection(collection).insertOne({url:url,title:title,des:des});
    await client.close();
  }
  catch(e){
    console.log(e);
  }
}
module.exports.insertEvent = insertEvent;



async function getEvents() {
  try{
    database = "JPMC";
    collection = "events";
    const client = await getClient();
    const user = await client.db(database).collection(collection).find({}).toArray();
    await client.close();
    return user;
  }
  catch(e){
    console.log(e);
  }
}
module.exports.getEvents = getEvents;


async function loginad(id) {
  try{
    database = "JPMC";
    collection = "admin";
    const client = await getClient();
    const user = await client.db(database).collection(collection).find({username:uname,Password:password}).toArray();
    await client.close();
    return user;
  }
  catch(e){
    console.log(e);
  }
}
module.exports.loginad = loginad;
