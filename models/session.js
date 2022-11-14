const mongoose = require('mongoose')
const sessionSchema = new mongoose.Schema({
    Codelbocks_id: String,
    User_id :  String,
})

const Session = mongoose.model("Session",sessionSchema)
module.exports= Session