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
 * 
 */