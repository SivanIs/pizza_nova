const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017/"; // Create a new MongoClient
const client = new MongoClient(uri);

//connect with the contact page to mongodb//
async function saveContact(details){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("pizza_nova").collection("contacts");
    var result = await col.insertOne(details);
    client.close();
    return result;
}
exports.saveContact = saveContact;

//connect with the mongodb and the menu//

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("pizza_nova");
    dbo.collection("products").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  async function getPizzaCollection(){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("pizza_nova");
    let collection = db.collection('products');
    let res = await collection.find({}).toArray();
    console.log(res);
   
    return res;
    
  }
  exports.getPizzaCollection = getPizzaCollection;

  //connect with the mongodb and to insert user//
  async function saveUser(details){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("pizza_nova").collection("users");
    var result = await col.insertOne(details);
    client.close();
    return result
    
}
exports.saveUser = saveUser;

//connect with the mongo to show users

async function getUser(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('users');
  let res = await collection.find({}).toArray();
  console.log(res);
 
  return res;
  
}
exports.getUser = getUser;


async function findConnect(details){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  // var col = client.db("pizza_nova").collection('users');
  var dbo = client.db("pizza_nova");
  let collection= dbo.collection('users');
  var query = {userName:details.userName,password:details.password };
  let res=await collection.findOne(query);
  client.close();
  return res;
}
exports.findConnect = findConnect;

// add product to the menu in the mongodb

async function insertProduct(details){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("pizza_nova").collection("products");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.insertProduct = insertProduct;

// connect with the shopping cart in the mongodb

async function getShoppingCart(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('shoppingCart');
  let res = await collection.find({}).toArray();
  console.log(res);
 
  return res;
  
}
exports.getShoppingCart = getShoppingCart;

//connect with the mongo to insert the shopping cart to the active orders col

async function saveCartToActive(details){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("pizza_nova").collection("activeOrders");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveCartToActive = saveCartToActive;

//connect with the cart to insert products

async function saveProduct(details){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("pizza_nova").collection("shoppingCart");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveProduct = saveProduct;

// connection with the mongodb to get the active orders

async function getOrder(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('activeOrders');
  let res = await collection.find({}).toArray();
  console.log(res);
 
  return res;
  
}
exports.getOrder = getOrder;

//close orders
async function closeOrders(details){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var date=new Date()
  var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
  var dbo = client.db("pizza_nova");
  var myquery = {fullName: details};
  var newvalues = {$set: {status:"Close",closeDate:split_date }};
  let collection= dbo.collection('activeOrders');
  let res=await collection.updateOne(myquery,newvalues);
  client.close();
  return res;
};
exports.closeOrders = closeOrders;

// delete user from mongodb
async function removeUser(details){ 
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  var myquary= {userName:details};
  let collection = db.collection('users');
  let res = await collection.deleteOne(myquary);
  client.close();
  return res;
}
exports.removeUser=removeUser;

//find pizza
async function showPizza(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('products');
  let res = await collection.find({category:"pizza"}).toArray();
  console.log(res);
 
  return res;
  
}
exports.showPizza = showPizza;

//find pasta
async function showPasta(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('products');
  let res = await collection.find({category:"pasta"}).toArray();
  console.log(res);
 
  return res;
  
}
exports.showPasta = showPasta;

//find beverages
async function showBeverages(){  
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('products');
  let res = await collection.find({category:"beverages"}).toArray();
  console.log(res);
 
  return res;
  
}
exports.showBeverages = showBeverages;

// delete cart from mongodb
async function removeCart(){ 
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("pizza_nova");
  let collection = db.collection('shoppingCart');
  let res = await collection.deleteMany({});
  client.close();
  return res;
}
exports.removeCart=removeCart;
