/**
 * -----------------------------
 * -----SETUP SERVER SIDE-------
 * -----------------------------
 * Go to expressjs.com >> getting started >> installing
 * CMD go to projects >> run this command >> mkdir appname
 * Go to app folder run this command >> npm init or npm init -y (-y for avoid multiple questions)
 * Run this command >> npm i express cors mongodb (to install express, cors and mongodb at same time)
 * Create index.js file
 * Server side setup COMPLETED!!!
 * 
 * 
 * -----------------------------
 * -----SETUP NODE EXPRESS------
 * -----------------------------
 * Import or make require the express
 * Import or make require the cors
 * Declare app
 * Declare the port
 * app.use(cors()); (cors middleware)
 * app.use(express.json()); (document or object body parser middleware)
 * Set app.get function (for root)
 * Set app.listen function
 * Go to package.json >> scripts >> add this two line scripts >> "start": "node index.js", "start-dev" : "nodemon index.js",
 * Run this command - npm run start-dev
 * 
 * 
 * -----------------------------
 * -----SETUP MONGODB ATLAS-----
 * -----------------------------
 * To know brief setup guide follow 65-2 video
 * Import or make require mongodb top of the code (const { MongoClient, ServerApiVersion } = require('mongodb');)
 * Login to mongodb
 * Go to atlas project
 * Get the atlas username and password
 * Go to mongodb>>atlas>>databse>>browse collections to check previous doccument or objects
 * Set uri with password (const uri = "mongodb+srv://dbuser1:ohO160tFcuYcLdXx@cluster0.pyvcmep.mongodb.net/?retryWrites=true&w=majority";)
 * Set client (const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });)
 * Go to (https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/) and use the async await function to store doc or object to the mongodb
 * 
 * 
 * -----------------------------
 * --CRUD: CREATE. READ. UPDATE-
 * -----------------------------
 * #######CRUD is an acronym for: CREATE. READ. UPDATE. DELETE.##########
 * ----CLIENT SIDE----
 * Make a client side react app
 * Make a form to get user
 * Use onsubmit to get form data and create user object
 * ----SERVER SIDE----
 * Create user POST api to receive data on the server side
 * ----CLIENT SIDE----
 * Client side set fetch using post method follow this url(https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data)
 * Make sure you return a json as a response from the server side post api to client side data(fetch res data)
 * ----SERVER SIDE----
 * Finaly use the inserOne to send data to the mongodb and send a response(result) to the client side.
 * ----CLIENT SIDE----
 * Use alert or toast to show user added successfully to the mongodb message
 * Reset user input field
 * ----SERVER SIDE----
 * Create get api to show data from mongodb to serverside
 * Use find function to do that follow this url (https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/)
 * ----CLIENT SIDE----
 * Fetch and show data from server to client side.
 * 
 * 
 * -----------------------------
 * --------CRUD: DELETE---------
 * -----------------------------
 * We are able to create, read, update our data and now we need to apply DELETE OPERATION.
 * ----CLIENT SIDE----
 * Create delete button add handler to the button
 * Setup delete confirmation
 * ----SERVER SIDE----
 * Delete operation follow this url (https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/)
 * Create async function 
 * Declare id from the req params
 * Import or make require the objectId (const ObjectId = require('mongodb').ObjectId;)
 * Declare the query (const query = {_id: ObjectId(id)};)
 * Finally use the deleteOne into result var
 * ----CLIENT SIDE----
 * Create the dynamic url for fetch(delete method)
 * After fetch conditionally console log the res
 * Declare remaining and filter to delete user from UI without reloading
 * 
 * 
 * -----------------------------
 * --------CRUD: UPDATE---------
 * -----------------------------
 * ----CLIENT SIDE----
 * Make a new component
 * Set route with params
 * Destructure id from the params
 * Set link template sting on home component to go to the update route for availabel user.
 * ----SERVER SIDE----
 * Create a findOne api follow this url (https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/)
 * Declare id from req params
 * Declare query same as CRUD DELETE
 * Finally use the findOne into result var
 * ----CLIENT SIDE----
 * Create the dynamic url for fetch(update method)
 * After fetch set data to the user
 * Create a form
 * Add clickhandler
 * Get data from the input field and create a user obj
 * Fetch user to send the updated data to the server (method: 'PUT')
 * ----SERVER SIDE----
 * Create PUT api to get updated user from the client side
 * Declare id
 * Take updatedUser from req body
 * Filter using ObjectId Follow this url (https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/)
 * Use upsert from the mongo doccumentation
 * Use updatedDoc $set
 * Finally use updateOne and send the res
 */