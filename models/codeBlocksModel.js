const mongoose = require('mongoose')

const codeBlockSchema = new mongoose.Schema({
    Title: String,
    Code: String
})

const CodeBlocks = mongoose.model("CodeBlocks",codeBlockSchema)
module.exports= CodeBlocks
