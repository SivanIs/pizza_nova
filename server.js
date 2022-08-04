const express = require('express')
const app = express()
const port = 3000
var mongo = require('mongodb');
const mydb=require('./controllers/mongodbUdapter')
const bodyParser= require('body-parser');
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ex:false}));
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});

// get contact from contactpage//
app.get('/NewContact', (req, res) => {
  var NewContact=
  {
    personName:req.query.Name,
    personEmail:req.query.Email,
    subject:req.query.Subject,
    meassage:req.query.Meassage    
  }
  async function mysave(details) {
    await mydb.saveContact(details).then((result) => res.redirect('index.html'));
  }
  mysave(NewContact);
});

//get contact with singup//
app.get('/NewUser', (req, res) => {
  var NewUser=
  {
    userName:req.query.userName,
    password:req.query.password,
    repeatPassword:req.query.repeatPassword,
    email:req.query.email,
    type:req.query.type,  
  }

  async function mysave(details) {
    await mydb.saveUser(details).then((result) => res.redirect('index.html'));
  }
  mysave(NewUser);
});

// get users 
app.get("/getUser", (req, res) => {
  async function getData() {
    await mydb.getUser().then((result) => res.send(result));
  }
  getData();
});

// get connect with the log in 

// app.post('/login', (req, res) => {
//   var users =
//   {
//     userName:req.body.userName,
//     password:req.body.password
//   }
  
//   async function userConnect(details) {
//     await mydb.findConnect(details).then((result) =>{
//       if(result===null){
//         res.redirect('index.html?failed=1');
//       } else{
//       if(result.userName==details.userName && result.password == details.password){
//         if(users.type=="manager"){
//           res.redirect('index.html');
//         }else{
//           res.redirect('index.html');
//         }
//    
//     }
//     }
// )}
// userConnect(users);
// });

app.post('/login', async (req, res) => {
  var user =
  {
    userName:req.body.username,
    password:req.body.password
  }
  console.log(user);
  try {
    let results = await mydb.findConnect(user);
    res.json(results);
  } catch (error) {
    res.status(500).json({message:error});
  }
});

//get menu//

app.get('/getPizza', async (req, res) => {
    // await mydb.getPizzaCollection().then((result) => { res.send(result)}).catch((err)=>console.log(err));
  try {
    let result =  await mydb.getPizzaCollection();
    res.send(result);
  } catch (error) {
    res.status(500).res(error);
  }
  }
);

//show pizza
app.get('/showPizza', async (req, res) => {
try {
  let result =  await mydb.showPizza();
  res.send(result);
} catch (error) {
  res.status(500).res(error);
}
}
);

//show pasta
app.get('/showPasta', async (req, res) => {
try {
  let result =  await mydb.showPasta();
  res.send(result);
} catch (error) {
  res.status(500).res(error);
}
}
);

//show Beverages
app.get('/showBeverages', async (req, res) => {
  // await mydb.getPizzaCollection().then((result) => { res.send(result)}).catch((err)=>console.log(err));
try {
  let result =  await mydb.showBeverages();
  res.send(result);
} catch (error) {
  res.status(500).res(error);
}
}
);

// add new product to the menu//

app.get('/addProduct', (req, res) => { 
  var newProduct =
  {
    name: req.query.name,
    price: req.query.price,
    img: req.query.img,
    category: req.query.category,
  }
  async function addProduct(details) {
    await mydb.insertProduct(details).then((result) => res.redirect('index.html'));
  }
  addProduct(newProduct);

});

// get shopping cart 
app.get("/getCart", (req, res) => {
  async function getData() {
    await mydb.getShoppingCart().then((result) => res.send(result));
  }
  getData();
});

//add the shopping cart to the active orders

// app.get('/getCartToActive', (req, res) => {
//   var NewCart=
//   {
//     name:req.query.name,
//     price:req.query.price,
//     quantity:req.query.quantity,
//     totalPrice:req.query.totalPrice,      
//   }

//   async function mysave(details) {
//     await mydb.saveCartToActive(details).then((result) => res.redirect('checkout.html'));
//   }
//   mysave(NewCart);
// });

//add products to shopping bag

app.get('/getProductToCart', (req, res) => {
  var NewProduct=
  {
    name:req.query.name,
    price:req.query.price,
    quantity:req.query.quantity,
    totalPrice:req.query.price*req.query.quantity,
    img:req.query.img,      
  }

  async function mysave(details) {
    await mydb.saveProduct(details).then((result) => res.redirect('index.html'));
  }
  mysave(NewProduct);
});

// add contact details of orders

app.get('/getDetails', (req, res) => {
  var NewOrder=
  {
    fullName:req.query.fullname,
    email:req.query.email,
    address:req.query.address,
    city:req.query.city,
    zip:req.query.zip,
    cardname:req.query.cardname,
    cardnumber:req.query.cardnumber,
    expmonth:req.query.expmonth,
    expyear:req.query.expyear,
    cvv:req.query.cvv,
    sameadr:req.query.sameadr,
    name:req.query.name,
    price:req.query.price,
    quantity:req.query.quantity,
    totalPrice:req.query.totalPrice,
    status:req.query.status,
    orderDate:new Date(),
    closeDate:null,
  }

  async function mysave(details) {
    await mydb.saveCartToActive(details).then((result) => res.redirect('thankYou.html'));
  }
  mysave(NewOrder);
});

// get  orders 
app.get("/getOrder", (req, res) => {
  async function getData() {
    await mydb.getOrder().then((result) => res.send(result));
  }
  getData();
});

//close order
app.get("/getclose", (req, res) => { 

  var close = req.query.fullName

  async function getclose(details) {
    await mydb.closeOrders(details).then((result) => res.redirect('index.html'));
  }
  getclose(close);
});

//remove user
app.get("/removeUser", (req, res) => { 

  var close = req.query.userName

  async function getclose(details) {
    await mydb.removeUser(details).then((result) => res.redirect('index.html'));
  }
  getclose(close);
});

//remove cart
app.get("/removeCart", (req, res) => { 

  async function getclose() {
    await mydb.removeCart().then((result) => res.redirect('index.html'));
  }
  getclose();
});

// get  contacts 
app.get("/getContact", (req, res) => {
  async function getContact() {
    await mydb.getContact().then((result) => res.send(result));
  }
  getContact();
});