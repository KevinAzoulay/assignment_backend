const { MongoClient, ServerApiVersion } = require('mongodb');
const creds = {username: "user", password: '123password123'};
const uri = `mongodb+srv://${creds.username}:${creds.password}@cluster0.ats7z.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


module.exports = uri, client